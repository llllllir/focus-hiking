param([switch]$ConfigureOnly)
$ErrorActionPreference='Stop'
$projectRoot=Split-Path $PSScriptRoot -Parent
Set-Location -LiteralPath $projectRoot
$plan=Get-Content -LiteralPath 'docs/project-plan.json' -Raw | ConvertFrom-Json
$repository="$($plan.owner)/$($plan.repository)"

# Auth comes from an authorized local credential. Nothing secret is printed or tracked.
if ($env:GH_TOKEN) { $accessToken=$env:GH_TOKEN }
elseif (Test-Path -LiteralPath '.tools/setup/github-token.dpapi') {
    $encryptedToken=(Get-Content -LiteralPath '.tools/setup/github-token.dpapi' -Raw).Trim()
    $secure=$encryptedToken | ConvertTo-SecureString
    $credential=[System.Management.Automation.PSCredential]::new('github',$secure)
    $accessToken=$credential.GetNetworkCredential().Password
} else {
    $cli=Get-Command gh -ErrorAction SilentlyContinue
    if ($cli) {
        $accessToken=& $cli.Source auth token 2>$null
        if ($LASTEXITCODE -ne 0) { $accessToken=$null }
    }
    if (-not $accessToken) { throw 'No local authorized credential. Use the connected GitHub app to publish, or sign in through the official CLI. Do not paste tokens into chat.' }
}
$headers=@{Authorization="Bearer $accessToken";Accept='application/vnd.github+json';'X-GitHub-Api-Version'='2022-11-28';'User-Agent'='Focus-Hiking-Setup'}
function Invoke-GitHub {
    param([string]$Endpoint,[string]$Method='GET',$Body=$null)
    $options=@{Uri="https://api.github.com/$Endpoint";Method=$Method;Headers=$headers;TimeoutSec=30}
    if ($null -ne $Body) {
        $options.ContentType='application/json; charset=utf-8'
        $options.Body=[System.Text.Encoding]::UTF8.GetBytes(($Body | ConvertTo-Json -Depth 30 -Compress))
    }
    Invoke-RestMethod @options
}
function Get-AllGitHub {
    param([string]$Endpoint)
    $separator=if ($Endpoint.Contains('?')) {'&'} else {'?'}
    $page=1
    do {
        $entries=@(Invoke-GitHub -Endpoint "${Endpoint}${separator}per_page=100&page=$page")
        foreach ($entry in $entries) { $entry }
        $page++
    } while ($entries.Count -eq 100)
}
$identity=Invoke-GitHub -Endpoint 'user'
if ($identity.login -ne $plan.owner) { throw "Wrong account $($identity.login), expected $($plan.owner); no repository changes made." }
$collaborator=Invoke-GitHub -Endpoint "users/$($plan.collaborator)"
Write-Output "Verified owner $($identity.login), collaborator $($collaborator.login)."
try { $repo=Invoke-GitHub -Endpoint "repos/$repository" }
catch {
    if ([int]$_.Exception.Response.StatusCode -ne 404) { throw }
    $repo=Invoke-GitHub -Endpoint 'user/repos' -Method POST -Body @{name=$plan.repository;private=$false;auto_init=$false;has_issues=$true;has_wiki=$false;description='Local webcam gaze interaction and virtual hiking attention practice; two developers working with agents.'}
    Write-Output "Created $($repo.html_url)"
}
if ($repo.private -or -not $repo.permissions.admin) { throw 'Repository must be public and administered by the expected owner.' }

if (-not $ConfigureOnly) {
    & node 'scripts/check-docs.cjs'
    if ($LASTEXITCODE -ne 0) { throw 'Documentation checks failed.' }
    # Explicit allowlist prevents credentials and tool downloads from publication.
    $files=@('README.md','AGENTS.md','CONTRIBUTING.md','.gitignore','Focus-Hiking-开发计划.md','Focus-Hiking-摄像头注视技术方案.md','Focus-Hiking-调研.md','Focus-Hiking-调研.html','build-research-report.cjs')
    foreach ($directory in @('.github','docs','scripts','src')) {
        foreach ($file in Get-ChildItem -LiteralPath $directory -File -Recurse) { $files += [System.IO.Path]::GetRelativePath($projectRoot,$file.FullName).Replace('\','/') }
    }
    $defaultBranch=$repo.default_branch
    try { $ref=Invoke-GitHub -Endpoint "repos/$repository/git/ref/heads/$defaultBranch" }
    catch {
        if ([int]$_.Exception.Response.StatusCode -notin @(404,409)) { throw }
        $readmeBytes=[System.IO.File]::ReadAllBytes((Join-Path $projectRoot 'README.md'))
        Invoke-GitHub -Endpoint "repos/$repository/contents/README.md" -Method PUT -Body @{message='docs: initialize Focus Hiking main repository';content=[Convert]::ToBase64String($readmeBytes)} | Out-Null
        $repo=Invoke-GitHub -Endpoint "repos/$repository"
        $defaultBranch=$repo.default_branch
        $ref=Invoke-GitHub -Endpoint "repos/$repository/git/ref/heads/$defaultBranch"
    }
    $baseCommit=Invoke-GitHub -Endpoint "repos/$repository/git/commits/$($ref.object.sha)"
    $entries=@(foreach ($file in $files) { @{path=$file;mode='100644';type='blob';content=[System.IO.File]::ReadAllText((Join-Path $projectRoot $file))} })
    $tree=Invoke-GitHub -Endpoint "repos/$repository/git/trees" -Method POST -Body @{base_tree=$baseCommit.tree.sha;tree=$entries}
    if ($tree.sha -ne $baseCommit.tree.sha) {
        $commit=Invoke-GitHub -Endpoint "repos/$repository/git/commits" -Method POST -Body @{message='docs: publish dual-agent plan, contracts and milestone tasks';tree=$tree.sha;parents=@($ref.object.sha)}
        Invoke-GitHub -Endpoint "repos/$repository/git/refs/heads/$defaultBranch" -Method PATCH -Body @{sha=$commit.sha;force=$false} | Out-Null
        Write-Output "Published planning files at $($commit.sha)"
    } else { Write-Output 'Planning tree is already up to date.' }
    if ($defaultBranch -ne 'main') {
        Invoke-GitHub -Endpoint "repos/$repository/branches/$defaultBranch/rename" -Method POST -Body @{new_name='main'} | Out-Null
    }
}

$permission=Invoke-GitHub -Endpoint "repos/$repository/collaborators/$($plan.collaborator)/permission"
$joined=$permission.permission -in @('write','maintain','admin')
if ($joined) { Write-Output 'Collaborator already joined with write permission.' }
else {
    $pending=@(Get-AllGitHub -Endpoint "repos/$repository/invitations") | Where-Object { $_.invitee.login -eq $plan.collaborator }
    if (-not $pending) {
        $invitation=Invoke-GitHub -Endpoint "repos/$repository/collaborators/$($plan.collaborator)" -Method PUT -Body @{permission='push'}
        Write-Output "Invitation sent: $($invitation.html_url)"
    } else { Write-Output 'Collaborator invitation is already pending.' }
}
$definitions=@(
    @{name='owner:attention';color='8250df';description='A / local gaze and training'},
    @{name='owner:scene';color='0969da';description='B / scene and game'},
    @{name='type:implementation';color='1a7f37';description='Individual delivery'},
    @{name='type:acceptance';color='bf8700';description='Joint acceptance'},
    @{name='blocked';color='cf222e';description='Waiting for dependency or decision'}
)
foreach ($milestone in $plan.milestones) { $definitions+=@{name="stage:$($milestone.id)";color='57606a';description=$milestone.title} }
$labels=@(Get-AllGitHub -Endpoint "repos/$repository/labels")
foreach ($definition in $definitions) {
    if (-not ($labels | Where-Object { $_.name -eq $definition.name })) { Invoke-GitHub -Endpoint "repos/$repository/labels" -Method POST -Body $definition | Out-Null }
}
$existingMilestones=@(Get-AllGitHub -Endpoint "repos/$repository/milestones?state=all")
$numbers=@{}
foreach ($spec in $plan.milestones) {
    $milestone=$existingMilestones | Where-Object { $_.title -eq $spec.title } | Select-Object -First 1
    if (-not $milestone) { $milestone=Invoke-GitHub -Endpoint "repos/$repository/milestones" -Method POST -Body @{title=$spec.title;description=$spec.description;due_on=$spec.due_on} }
    $numbers[$spec.id]=$milestone.number
    Write-Output "Milestone $($spec.id): $($milestone.html_url)"
}
$existingIssues=@(Get-AllGitHub -Endpoint "repos/$repository/issues?state=all")
foreach ($spec in $plan.issues) {
    $marker="<!-- focus-hiking:$($spec.stage):$($spec.role) -->"
    $issue=$existingIssues | Where-Object { -not $_.pull_request -and $_.body -and $_.body.Contains($marker) } | Select-Object -First 1
    $assignees=@($spec.assignees | Where-Object { $_ -ne $plan.collaborator -or $joined })
    if (-not $issue) { $issue=Invoke-GitHub -Endpoint "repos/$repository/issues" -Method POST -Body @{title=$spec.title;body=$spec.body;labels=@($spec.labels);assignees=$assignees;milestone=$numbers[$spec.stage]} }
    elseif ($joined -and $spec.role -eq 'B' -and -not ($issue.assignees | Where-Object { $_.login -eq $plan.collaborator })) { Invoke-GitHub -Endpoint "repos/$repository/issues/$($issue.number)/assignees" -Method POST -Body @{assignees=@($plan.collaborator)} | Out-Null }
    Write-Output "Issue $($spec.stage)-$($spec.role): $($issue.html_url)"
}
try {
    Invoke-GitHub -Endpoint "repos/$repository/branches/main/protection" -Method PUT -Body @{
        required_status_checks=@{strict=$true;contexts=@('docs')};enforce_admins=$true
        required_pull_request_reviews=@{dismiss_stale_reviews=$true;require_code_owner_reviews=$false;required_approving_review_count=1}
        restrictions=$null;allow_force_pushes=$false;allow_deletions=$false
    } | Out-Null
    Write-Output 'Configured main protection: docs check, one approval, stale dismissal, no force push/delete.'
} catch { Write-Warning "Main protection was not configured: $($_.Exception.Message)" }
Write-Output "Setup complete: https://github.com/$repository . Verify invitation acceptance and real stage progress."
