/** Works at localhost / and at a GitHub Pages repository subdirectory. */
export function sitePath(path = '') { return `${import.meta.env?.BASE_URL ?? '/'}${path.replace(/^\/+/, '')}`; }
