import { copyFile } from 'node:fs/promises'

// GitHub Pages serves this file for unknown paths, allowing the SPA to render
// a matching project, service, or content route after a direct visit.
await copyFile('dist/index.html', 'dist/404.html')
