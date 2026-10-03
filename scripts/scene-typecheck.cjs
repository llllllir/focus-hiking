// Check B's reachable TypeScript graph without hiding full-project failures.
const ts=require('typescript');
const config=ts.readConfigFile('tsconfig.json',ts.sys.readFile);
if(config.error)throw Error(ts.flattenDiagnosticMessageText(config.error.messageText,'\n'));
const parsed=ts.parseJsonConfigFileContent(config.config,ts.sys,'.');
const program=ts.createProgram(['src/scene/forest.ts','src/game/app.ts'],parsed.options);
const diagnostics=ts.getPreEmitDiagnostics(program);
if(diagnostics.length){console.error(ts.formatDiagnosticsWithColorAndContext(diagnostics,{getCanonicalFileName:f=>f,getCurrentDirectory:ts.sys.getCurrentDirectory,getNewLine:()=> '\n'}));process.exitCode=1;}
else console.log('Scene/game reachable TypeScript graph passed. This does not replace full-project typecheck.');
