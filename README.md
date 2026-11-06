# Abdulrahman Saheed — developer portfolio

Local React + TypeScript + Vite implementation of the [approved Figma portfolio](https://www.figma.com/design/GBBM8b1souv2RrwAD3x4EQ): homepage, four case studies, responsive navigation, light/soft-dark themes and an internal printable résumé.

Use Node **22.22+** (tested 22.23.1) and npm. Exact versions are locked.

```sh
npm ci
npm run dev -- --host 127.0.0.1
```

```sh
npm run check
npm run pdf:generate
npm run test:browser
npm run test:visual
```

Browser/PDF scripts use installed Microsoft Edge. Browser/visual checks use built dist; build first. pdf:generate builds automatically and generates the download from website print CSS. npm run preview serves an existing build. No backend, secrets or environment variables are required. Fonts/runtime assets are local.

Vercel configuration is versioned in `vercel.json`: Vite preset, `npm run build`, output directory `dist`, and an SPA fallback for direct résumé/project URLs. Use the repository root as the Vercel Root Directory. Static assets and the generated PDF are served from the build output. The previously configured `build` output directory does not match this application.

- [Implementation report](docs/IMPLEMENTATION_REPORT.md)
- [Architecture and routes](docs/ARCHITECTURE.md)
- [Figma reference](docs/FIGMA_REFERENCE.md)
- [Content decisions](docs/CONTENT_DECISIONS.md)
- [Asset provenance](docs/ASSETS.md)
- [PDF workflow](docs/PDF_WORKFLOW.md)
- [Verification and dependencies](docs/VERIFICATION.md)
- [Checkpoints](docs/IMPLEMENTATION_PLAN.md)

Work only in C:\dev\my-current-portfolio; C:\dev\my-portfolio is separate. Original résumé documents and QA captures remain ignored. The download is a new website-generated PDF. The owner has authorized committing and pushing this repository; deployment requires separate approval. Local noindex remains until a future publication pass.
