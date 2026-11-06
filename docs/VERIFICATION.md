# Milestone 1 verification

Date: 2026-11-05. Local application foundations only.

## Environment and boundaries

- Workspace initially empty. Git initialized on `main`; no commit, remote, push or deployment.
- Node 22.23.1, npm 10.9.8, Git 2.51.0.windows.1.
- Scaffolded with stable `create-vite` 9.3.4 React/TypeScript template, retaining lightweight Oxlint/TypeScript and enabling strict checks.
- Registry metadata checked for stable dependencies and Node compatibility. Official [Vite setup](https://vite.dev/guide/) and [React Router declarative setup](https://reactrouter.com/start/declarative/installation) consulted.
- Figma MCP access succeeded; inspected scope in `FIGMA_REFERENCE.md`.
- Other project source checks were read-only. No command targeted `C:\dev\my-portfolio`.
- Named revised PDF absent; similarly named DOCX preserved and ignored. Download unavailable.

Browser acceptance concerns the checkpoint only. No full page fidelity, résumé factual approval, print/PDF acceptance, production-project behavior, physical-device reliability or hosted deployment is claimed. Linting is not a complete accessibility audit.

## Completed checks

| Check | Result |
| --- | --- |
| `npm install` | Passed; generated exact dependency lockfile |
| `npm ci` | Passed; 35 packages installed, 36 audited, 0 reported vulnerabilities at check time |
| `npm run check` | Passed: Oxlint with warnings denied, strict `tsc -b`, Vite production build |
| `npm run test:browser` | **7 passed**, 27.9s, installed Microsoft Edge **156.0.4314.58**, 2 workers, production preview |
| Dev startup | Vite started at loopback port4318; HTTP200 and expected module entry confirmed |
| Screenshot review | Mobile light 390px and desktop soft-dark 1200px checkpoint captures visually inspected |
| Runtime asset inspection | No temporary Figma URLs, private project links, reference résumé files or invented images in application sources/build output; font OFL notice included |
| Git boundary | `main`, no commits/remotes/staged files; 32 untracked project files; build/dependencies/QA/source résumé ignored |

The browser tests cover six direct routes, updated titles/current links, route focus, theme persistence across routes/reload/history, system preference, invalid/blocked storage, cross-tab changes, keyboard skip navigation, theme keyboard activation, visible focus, reduced motion, locally loaded Geist, unknown routes and absence of premature PDF downloads. Wrapping checks cover **6 routes × 4 widths (320/390/768/1200px) × 2 themes**. No final-run page/console errors occurred in the direct-route smoke test.

Initial verification caught an import path unsupported by the installed font package, missing browser DOM types in test type checking, an implicit missing favicon request and a test expecting `0ms` rather than equivalent normalized `0s`. These were corrected; the final complete check/browser run passed. Checkpoint screenshots are in ignored `test-results/`; they are not Figma fidelity acceptance artifacts. Preview is managed by Playwright, and the temporary dev server is stopped at teardown.

## Installed direct dependencies

All versions are exact and locked. Node requirement is `>=22.22.0` (React Router's current engine minimum); `.node-version` selects the tested 22.23.1 runtime.

| Package | Version | Purpose |
| --- | --- | --- |
| react | 19.3.1 | UI |
| react-dom | 19.3.1 | Browser rendering |
| react-router | 8.5.1 | Declarative client routes |
| @fontsource-variable/geist | 5.3.0 | Self-hosted variable fonts |
| vite | 8.3.6 | Dev server and production bundling |
| @vitejs/plugin-react | 6.2.1 | React integration |
| typescript | 7.0.2 | Strict type checking |
| oxlint | 1.91.0 | Linting |
| @playwright/test | 1.64.1 | Browser checks |
| @types/node | 22.20.5 | Node types |
| @types/react | 19.3.0 | React types |
| @types/react-dom | 19.3.0 | DOM renderer types |

## Created project files

- Root: `README.md`, `package.json`, `package-lock.json`, `index.html`, `vite.config.ts`, `playwright.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `.gitignore`, `.gitattributes`, `.editorconfig`, `.npmrc`, `.node-version`, `.oxlintrc.json`.
- `src/`: `main.tsx`; `app/App.tsx`, `app/RouteEffects.tsx`; `components/ThemeToggle.tsx`; `content/projects.ts`; `pages/CheckpointPage.tsx`; `styles/tokens.css`, `styles/global.css`; `theme/useTheme.ts`.
- `public/`: `theme-init.js`, `OFL-Geist.txt`.
- `tests/`: `foundation.spec.ts`.
- `docs/`: this verification record, `ARCHITECTURE.md`, `FIGMA_REFERENCE.md`, `CONTENT_DECISIONS.md`, `IMPLEMENTATION_PLAN.md`.
- Local generated state: `.git/`, `node_modules/`, `dist/`, `.local/figma/`, `test-results/`. Build, dependencies, source references and QA captures are not staged or published. The owner-provided DOCX is not an agent-created file.

---

# Full portfolio verification — 2026-11-05

This section supersedes the checkpoint's deferred-page/download statements while preserving its history. The owner's complete-portfolio instruction authorized all six pages and integrated local verification.

## Completed implementation checks

| Check | Result |
| --- | --- |
| `npm run check` | Passed: zero lint warnings, strict types and production build |
| `npm run test:browser` | 18 tests passed against production preview in installed Edge; final run includes native PDF download and Print-action checks |
| Responsive coverage | 6 routes ×9 widths (320/375/390/768/849/850/1024/1200/1440px) ×2 themes = 108 overflow checks passed |
| axe | 6 routes ×2 widths ×2 themes = 24 WCAG2/2.1/2.2 A/AA scans, no reported violations |
| Visual capture | 24 full-page plus 24 viewport images at 390/1200px, light/dark; zero measured overflow and zero page/console errors |
| PDF generation | New one-page website-generated A4 PDF; 229,977 bytes; same bytes in public/ and dist/ |
| Independent PDF inspection | Required factual text and naira glyph extract correctly; 8 URI annotations; tagged structure; 16 self-contained Unicode-mapped font resources; actual PDFium rendering inspected against A4 reference |
| External destinations | Eight anonymous public website/GitHub HTTP200 identity checks; X explicitly supplied by owner. PromotionSure later timed out in Edge screenshot capture, recorded separately |
| Assets | 44 local audited assets, with dimensions/source/checksums; 4 genuine WebP captures; no broken runtime images or placeholder hyperlinks |
| `npm audit --audit-level=high` | 0 reported vulnerabilities at check time |
| Runtime privacy/source scan | No temporary Figma asset URLs, service-role markers or private-key markers found in src/public/dist. Source résumé remains ignored and outside runtime content |

Browser checks cover direct routes/titles, one h1 per page, locally served fonts, accurate route/section current states, direct/repeated anchors, manual scrolling, cross-route returns, history restoration, keyboard skip/focus/theme/mobile activation, normal and reduced motion, system/explicit/blocked-storage/cross-tab themes, native download completion and print controls. Theme switching is tested in place so Playwright's automatic scrolling of an off-screen header is not misreported as a theme reset.

The new development-only dependency is `@axe-core/playwright` **4.14.0**. All other exact versions remain as recorded above. No new runtime package was added. Python pypdf/PDFium/Pillow were used only in ignored local QA tooling; they are not application dependencies.

## Visual findings

Figma MCP access succeeded and 27 real reference PNGs were retained. Header/hero/grid/media/section proportions were compared with browser images, not compilation alone. Desktop heights: home 1564px, PromotionSure 2078px, Alabarin 2128px, school 2078px, Pillars 2102px and résumé 2162px. Figma heights respectively 1564/2078/2127/2078/2103/2171px.

Mobile heights: home 2516px, PromotionSure 2500px, Alabarin 2808px, school 2550px, Pillars 2572px and résumé 2888px. Figma respectively 2517/2498/2807/2548/2544/2817px. These are geometry observations, not a pixel-equality score. Pillars' concise factual wording changes its mobile text flow. The résumé deliberately reserves 128px plus safe area beneath the footer, versus 52px in the full Figma artboard, to clear the shared fixed 78px navigation; this accounts for 76px of extra height, with small text-flow differences offsetting the total to 71px. No content is clipped to force a fixed artboard height.

Genuine school/Pillars imagery replaces their empty screenshot slots, and verified brand marks replace selected simplified badges. Small labels use accessible muted colours. Browser/font rasterization, corrected copy/skill classification, minor line wrapping and PDF vertical spacing differ from Figma. The preserved visual hierarchy, layouts, tokens, original navigation/contact/toggle iconography and responsive compositions remain consistent.

Visual review caught and fixed mobile technology-heading flex height, Alabarin's four-column badge layout, missing mobile copy variants, blank CSS3 shield treatment, unsafe narrow contact widths, résumé slash wrapping, and mobile tab spacing. Behavior checks also caught section selection at the clamped bottom, repeated destinations and a font-reflow race after normal smooth scrolling. Disposed font-readiness callbacks are ignored, and a visible requested destination keeps selection when its start cannot reach the marker. The focused normal-motion navigation check then passed 10 repeated runs; a viewport-reflow assertion also guards that behavior.

## Evidence and acceptance limits

- `.local/figma/`, `.local/design/`: original design references/contexts; never runtime imagery.
- `.local/qa/`: browser full-page/viewport images, side-by-side comparisons and visual-results.json.
- `.local/project-captures/`: public capture originals and source receipts. No credentials/private product state.
- `.local/pdf/`: generation/source hashes, independent verification, extracted text and actual rendered A4 image.
- `test-results/`: browser results; generated files remain ignored.
- `docs/ASSET_MANIFEST.json`: reviewable runtime asset provenance/checksums.

This verifies a local Edge application, not hosted deployment, physical-device/Safari/Firefox acceptance, a physical printer or a complete manual screen-reader audit. PromotionSure and sanitized Alabarin product imagery remain missing, with their approved placeholders intact. The absent old résumé PDF was not inspected; the available revised DOCX supplies facts, and the new downloadable PDF was verified independently. No other project was modified, no shared service was reset and no commit/push/deployment occurred.

Final full-suite result: **18 passed in 1.5min** after the normal-motion/reflow fix and native download/Print checks. The focused navigation stress run passed 10/10. All owned preview ports 4317/4319/4320 were confirmed closed. Final Git: main, 104 untracked project files, no staged files, commits or remotes.

## Alabarin asset completion — 2026-11-06

The owner directed a broader local-computer search for existing Alabarin imagery. Read-only inspection found the recording/film archive and suitable genuine Android/Viewer frames. Three 1920×1080 sources were selected after visual/provenance/privacy review: an existing walkthrough cover, the Android limited-connectivity state and the Trusted Viewer historical-status view. They now fill the homepage card and both supporting slots; the approved system diagram remains the hero. No new device/cloud operation, fabricated UI or source-archive modification occurred.

Media metadata now distinguishes the cover from two independent supporting images, carrying intrinsic dimensions and optional contain fitting. This supports landscape Alabarin recordings alongside the existing portrait school/Pillars detail captures without changing their slot geometry. The two Alabarin captions now describe only the behavior actually pictured. ASSETS.md and CONTENT_DECISIONS.md record the selection and evidence.

Verification after integration:

- `npm run check`: passed lint, strict types and production build.
- `npm run test:browser`: **18 passed in 2.0min**, including all 108 route/width/theme overflow checks and 24 axe scans; no reported violations.
- `npm run test:visual`: 24 full-page plus 24 viewport captures, zero overflow and zero browser errors. Homepage/Alabarin screenshots were visually reviewed at390/1200px in both themes. The complete supporting views remain visible, and the cover is readable at card size.
- Runtime asset manifest: **47 files**, all hashes verified. The three selected original PNG hashes are unchanged. The current generated PDF remains synchronized with its unchanged résumé/print sources and is identical in public/ and dist/.
- Git: main, **107 untracked project files**, no staged changes, commits, pushes, remotes or deployment. All owned verification preview ports are closed.

Selection preview: `.local/alabarin-assets/selected-images.jpg`. Updated browser screenshots and the eight relevant Figma/browser comparisons are in `.local/qa/`. Historical screenshot-gap statements above describe the earlier checkpoint and are superseded for Alabarin.

PromotionSure's public site loaded with HTTP200 in a diagnostic Edge instance with HTTP/2/QUIC disabled. The owner explicitly chose to finish Alabarin and log in later; no authenticated screenshots were taken. The temporary capture window is closed, the app remains unchanged and its portfolio placeholders remain pending that later session. No credentials are part of runtime assets.

## PromotionSure Practice completion — 2026-11-06

The later session occurred when the owner confirmed they had signed in through their normal Chrome browser and instructed “use the practice page.” Real Practice views were captured from that existing session. The desktop capture is 1920×948; the narrow composition is 750×878 physical pixels. No exact390px source-device claim is made. Runtime assets contain the actual unanswered Practice interface; account settings, account score panels, browser chrome, desktop/taskbar and credentials are excluded. No answers or results were submitted by the capture workflow, and the browser was returned to desktop size.

The two genuine captures now fill PromotionSure's homepage card, hero and supporting slots. Its captions describe timed practice, progress/question navigation and narrow-screen controls. Contain fitting preserves the complete question interface in case-study frames, correcting mobile image cropping found during screenshot review. All four projects now have actual imagery in their intended slots.

Verification after capture integration: `npm run check` passed; the complete browser suite passed **18 tests in 1.2min**, including 108 overflow checks and 24 axe scans; visual capture produced 24 full-page plus 24 viewport renders with zero overflow and browser errors. The final fit-only adjustment was followed by another build/lint/type check, the focused asset/link browser check and refreshed visual captures. All 49 runtime asset hashes and the two original Practice PNG hashes were verified. The generated résumé PDF remains synchronized with its unchanged print sources.

Current Git: main, 109 untracked project files, no staged changes, commits, remotes, pushes or deployment. Earlier image-gap/deferred-login statements are historical and superseded by this completion record. The owner's ordinary browser session remains under their control; verification preview servers and the separate temporary capture session are closed.

## Final image refinement — 2026-11-06

This record supersedes the earlier image selections and counts. Following the owner's feedback, Alabarin's case-study video frames were replaced by sharp native Android Traveller Start Journey and original authenticated Viewer screenshots. The existing video cover remains on the homepage only, as explicitly requested. PromotionSure's homepage now uses its real public landing page; the case study retains the owner-requested Practice views. Browser scrollbars/window edges are excluded, with no retouching of product UI or data. ASSETS.md and CONTENT_DECISIONS.md record exact sources, crops, captions and evidence limits.

An optional project thumbnail separates homepage imagery from case-study media. Cards respect contain fitting. Visual review caught a clipped Alabarin title on mobile; contain fitting now preserves the entire cover. Neutral letterboxing deliberately preserves the original image proportions within the approved media-slot dimensions. Page geometry remains unchanged from the preceding verified renders.

Verification:

- `npm run check`: passed after the final fit adjustment; zero lint warnings, strict types and production build.
- Complete browser suite after image replacement: **18 passed in 1.2min**, covering navigation, themes, motion, history/focus, PDF actions, 108 responsive overflow checks and 24 axe scans. The subsequent fit-only adjustment passed both focused responsive and asset/link tests: **2 passed in 37.8s**.
- Final `npm run test:visual`: **24 full-page plus 24 viewport captures**, no horizontal overflow or page/console errors. Every visible image decoded successfully. The capture script now eagerly decodes offscreen lazy images before screenshots, preventing false blank media in full-page QA captures; production lazy loading is unchanged.
- Homepage, Alabarin and PromotionSure media visually reviewed at **390/1200px in both themes**. Covers are distinct from case screenshots, the native Android controls remain legible, all selected source content fits, and browser scrollbars/window edges are absent. Refreshed Figma/browser comparisons preserve the established layout and intentional screenshot-slot replacements.
- All **50 runtime asset** hashes, sizes and raster dimensions match the manifest. All **six refined image outputs** decode to the exact original RGB pixels inside their documented crops, or the whole original cover. Original source hashes remain unchanged. No source archive was modified.
- Résumé/print source checksum is unchanged; generated PDF hashes still match the generation receipt and each other in `public/` and `dist/`. No regeneration was needed for this image-only work.
- Git remains on unborn `main`: **110 untracked project files**, no staged files, commits or remotes. No commit, push or deployment occurred. Verification ports 4317/4320 are closed after the checks; the pre-existing Vite development server and owner's ordinary Chrome browser remain under their control.

Current local review artifacts: `.local/qa/final-image-review.png`, refreshed `*-comparison.png`, `visual-results.json`, `final-asset-verification.json`, and `.local/alabarin-assets/final-selection.json`. Earlier selection records remain historical. No project imagery is missing. Other-browser/physical-device and hosted-publication acceptance remain outside these local checks.
