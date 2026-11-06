# Content evidence and decisions

Figma governs presentation. Facts require source evidence or attributed owner confirmation. The initial Milestone 1 findings below are historical; the full-implementation decisions and resolved gates follow them.

## Verification rules

1. Inspect actual manifests, entry points, configurations, migrations and relevant implementations before adding technologies. A dependency does not prove a shipped feature. Record filenames/symbols/date without copying private source.
2. Distinguish programming languages, markup/styling, frameworks, databases, hosting, tools and protocols where useful, within existing design rows. Do not add sections or lengthy technical explanations.
3. Separate **source inspected**, **local runtime verified**, **current public response**, **retained evidence**, **owner supplied**, **unverified**. HTTP 200 does not prove product acceptance. Code existence does not prove deployment, reliability or sole authorship.
4. Metrics, commercial engagement, dates, employment and ownership need owner provenance. Preserve qualifications and dates; never turn a bounded test into a universal reliability claim.
5. Check destination identity and current access before enabling public links. Do not expose private repository URLs, internal services, credentials, customer data or raw evidence. Inaccessibility remains uncertain, not proof of deletion.
6. Use real project captures with permission/privacy review and intrinsic dimensions. No fabricated product screens or Figma screenshots as implementation imagery.
7. Use the previously approved revised résumé as factual authority and Figma as website visual authority. Generate a new PDF from website print CSS and verify it before enabling Download. Never substitute the rejected redesign or permanently use the old reference PDF as the final download.
8. Omit unsupported additions and record gaps. Other source projects remain read-only.

## Decision ledger

| ID / status | Original wording | Corrected wording or behavior | Evidence |
| --- | --- | --- | --- |
| CD-001 — recorded for later résumé implementation | Languages: “JavaScript, TypeScript, SQL, HTML, CSS, Kotlin”; Frontend: “React, React Router, Vite, responsive and accessible interfaces” | Languages: “JavaScript, TypeScript, SQL, Kotlin”. Keep the Frontend row and include “HTML (markup), CSS (styling)” alongside its existing items; verify concise fit before finalizing. | Figma `146:136`, `146:139`, `155:98`, `155:101`; inspected PromotionSure `.jsx`/`.js` entry filenames/manifest, school HTML/CSS/JS entry links, Alabarin Trusted Viewer TypeScript manifest, Android Kotlin Gradle definitions. HTML is markup and CSS is styling; grouping them as programming languages is imprecise. |
| CD-002 — owner clarification; deferred download | `136:18`: “Download PDF uses the reviewed PDF asset after implementation.” | Revised document supplies facts. Build Figma website résumé, then generate and verify a new selectable-text PDF from its print CSS. | Owner instruction, 2026-11-05; Figma `152:93` also requires correspondence with website A4 print layout. |
| CD-003 — implemented, internal naming | Colour variable “white” has dark value `#202724`. | Name it `--color-raised`, preserving exact colours. | Direct read of Figma variable `14:10`. No visual change. |

## Initial source checks — 2026-11-05

Bounded local inspection, not fresh product acceptance; no project sources copied or changed.

| Project | Actual files inspected | Supported now | Remaining verification |
| --- | --- | --- | --- |
| PromotionSure | Local engineering `package.json`, source filename inventory | React, JavaScript/JSX, React Router, Vite, Supabase client declaration. Figma's JavaScript label is supported; no basis to replace it with TypeScript for this frontend. | Specific payment/auth/database features, public showcase identity, metrics/dates. |
| Alabarin | Trusted Viewer `package.json`; Android `app/build.gradle.kts`, `gradle/libs.versions.toml` | React, TypeScript, Kotlin/Compose, Room, WorkManager declarations | Scoped MCP/AWS implementation and retained evidence before cloud/recovery claims. No handset, hosted or paid-provider test ran. |
| Al-Muflihoon | `index.html`, `contact.html` | HTML, linked CSS/JS, Formspree integration | Netlify/domain identity, actual delivery behavior, client facts and media permissions. Form action is not proof of receipt. |
| Pillars of Pension | `scripts/build-static.cjs`, `vercel.json` | Dependency-free static packaging and Vercel configuration | Runtime page stack, live route identity, screenshot provenance. Config is not deployment proof. |

## Historical Milestone 1 gates

- Exact requested `Abdulrahman_Saheed_CV_Revised.pdf` was absent. A similarly named `.docx` exists, preserved and unmodified; it is not assumed to be a verified equivalent. Both exact source-reference filenames are ignored and outside runtime assets. Recheck file/provenance during the résumé milestone.
- Figma contacts, dates, metrics and internship details are design text, not a verified factual dataset.
- No public project links, production outcomes or business metrics were freshly verified for publication.
- No rejected redesigned résumé was imported. No final PDF was generated.

## Full implementation — 2026-11-05

The available owner-supplied `Abdulrahman_Saheed_CV_Revised.docx` was read locally as OOXML text and reconciled with Figma `146:2`, `146:304` and `155:2`. It contains the revised profile, contacts, four experience entries, dates, qualified metrics, education and skills. This is the revised factual document available in the workspace, not an assertion that the absent PDF was inspected. The source remains unchanged, ignored and outside runtime assets. No rejected redesign was used. The new downloadable PDF is generated from `/resume` and its print CSS.

| ID / status | Original wording / treatment | Implemented correction | Supporting evidence |
| --- | --- | --- | --- |
| CD-001 — implemented | Languages included HTML and CSS | Languages: JavaScript, TypeScript, SQL, Kotlin; existing Frontend row includes HTML (markup), CSS (styling) | Revised DOCX and Figma skill rows; actual HTML/CSS/JS entry points, React/TypeScript and Kotlin sources inspected. No skills section added. |
| CD-002 — implemented | Use reviewed PDF asset | Newly generated one-page A4 PDF from the website print CSS | Owner instruction; Figma print handoff; generation and PDF checks in VERIFICATION.md. |
| CD-004 — implemented | Alabarin desktop: “revoking MCP access”; mobile: “MCP revocation” | “revoking the MCP session”; “MCP session revocation” | Retained `JourneyContinuity/docs/ALABARIN_VIEWER_MCP_LIVE_ACCEPTANCE.md`, selected/status acceptance paragraph and following revocation paragraph: 13 shared fields matched; local MCP revoke204, subsequent discovery401. Real relationship revocation was explicitly not exercised. No fresh hosted run was performed here. |
| CD-005 — implemented | Pillars: “I designed and implemented…” | “I implemented … from the approved Figma design…” | `book-launch-site/index.html`, `scripts/build-static.cjs`, `vercel.json` and retained `qa/DEPLOYMENT-REPORT.md` support implementation/publication; source evidence does not independently establish original design authorship. |
| CD-006 — implemented | Pillars introduction: “upcoming launch” | “the launch” | Date-sensitive language is unnecessary; verified public homepage supplies event details. No event status or new date is invented. |
| CD-007 — implemented | X contact without a verified destination | `https://x.com/RahmvnDev` | Owner explicitly supplied `@RahmvnDev` in this implementation conversation. Identity is owner-supplied; no account ownership inference from a third party. |
| CD-008 — implemented | Simplified React/JS/Vite/PostgreSQL badges; CSS3 shield plus separate text3 | Genuine monochrome Simple Icons marks, retaining existing badge dimensions/labels | Primary `simple-icons/simple-icons` repository; React/JavaScript/Vite/PostgreSQL from develop, CSS3 from13.0.0. Figma component50:78 explicitly permits verified official mark replacement. Original contact/tab/theme vectors retained. |
| CD-009 — implemented | Very light small technology/scope/diagram labels | Established muted token in both themes | WCAG AA axe scans and contrast requirements. Hierarchy, typography and positions preserved. |
| CD-010 — implemented | Empty school/Pillars screenshot slots | Genuine captures of their public homepage and mobile admissions/author pages | Headless Edge screenshots, public HTTP200/title/URL recorded in local capture manifests. Optimized copies only; no fabricated product imagery. Source URLs, dimensions and checksums in ASSETS.md. |

The approved responsive case-study copy is retained: mobile Alabarin/school/Pillars paragraphs are shorter versions supplied by Figma, rather than desktop text forced into the mobile layout. Résumé role punctuation follows the screen design (middle dot); factual meaning and qualified claims match the revised DOCX.

## Evidence classes and current limits

- **Source inspected:** PromotionSure engineering `package.json`, JSX/JavaScript frontend and Paystack function implementation; Supabase/PostgreSQL schema/RLS evidence; school `index.html`, `contact.html`, linked `style.css`/`scripts.js` and Formspree action; Alabarin Android Gradle definitions, Trusted Viewer and MCP manifests; Pillars runtime HTML/CSS/JS and build/hosting configuration. Existing designed stack labels are supported. These are selective code checks, not fresh production acceptance.
- **Owner supplied:** revised résumé's contact details, dates, paid engagement, sole-developer wording, internship/education, and explicitly qualified historical commercial metrics. “Reported”, “approximately September 2026” and “one bounded recovery” remain intact. No new achievements, percentages or reliability claims were added.
- **Retained evidence:** Alabarin cross-client acceptance and 895-observation bounded recovery; Pillars publication/accessibility/local mobile-performance reports. No device, database, authentication, email, paid-provider or shared-service operation was repeated for this portfolio.
- **Public response:** eight linked website/GitHub destinations returned HTTP200 with the expected destination identity during anonymous checks (`.local/link-checks.json`). This establishes accessible destinations at check time only. Edge public screenshot capture later timed out for PromotionSure at both widths, so browser availability remains an environmental/current-access uncertainty despite the earlier HTTP response.
- **Capture status:** all four projects now have actual imagery. PromotionSure uses its public landing page on the homepage and owner-authorized Practice captures inside the case study. Alabarin uses its existing video cover on the homepage by explicit owner preference and direct native Android/Viewer screenshots in its case study; its approved diagram remains the hero. The final image-refinement record below supersedes the initial video-frame selections. No private source or unrelated stock media was substituted.
- **Résumé provenance limit:** the specifically named old PDF is still absent. The available revised DOCX supplies facts and is not distributed. The new website-generated PDF is verified separately and enabled for download.

## Alabarin image follow-up — completed 2026-11-06

| Original wording / treatment | Updated wording / treatment | Evidence |
| --- | --- | --- |
| Blank Alabarin homepage card and two case-study media placeholders | Existing Alabarin walkthrough cover; recorded Android limited-connectivity screen; recorded Trusted Viewer Journey-status screen | Read-only local archive inspection; actual selected PNGs visually reviewed; film source provenance/timeline and current film README/QC inspected. Source names and hashes are in ASSET_MANIFEST.json; original local paths remain ignored QA metadata. These are retained product recordings, not fresh acceptance or synthetic HTTP fixtures. |
| “Android Journey observations and offline recovery” | “Android Journey monitoring during limited connectivity” | Selected Android image displays monitoring plus a limited-connectivity warning; a still does not demonstrate completed offline recovery. |
| “Authorized historical status through Viewer and MCP” | “Authorized historical Journey status in the Trusted Viewer” | Selected supporting image shows the actual Viewer, not an MCP interaction. MCP remains represented by the system diagram and evidenced case-study text. |

The earlier statement that suitable Alabarin captures had not been supplied in the portfolio workspace is superseded by this broader local-computer search. The original archive was preserved. No face/name replacement, UI re-creation, location editing or newly invented state was used.

## PromotionSure image follow-up — 2026-11-06

| Original wording / treatment | Updated wording / treatment | Evidence |
| --- | --- | --- |
| Empty homepage/case-study screenshot slots | Genuine desktop and narrow Practice views, without account settings or personal score panels | Owner signed in through their existing Rahmvnx Chrome browser and instructed “use the practice page.” Native content-area captures and original hashes are recorded locally and in ASSET_MANIFEST.json. No login state was copied or product UI retouched. |
| “A closer look at the product experience” | “Timed practice with progress and question navigation” | Desktop capture visibly shows a timed question, answer choices, 0/20 progress and question-map controls. This describes the pictured interface, not a completed-exam outcome. |
| “Interface details across screen sizes” | “Practice controls on a narrow screen” | Narrow capture shows the same real Practice interface with Previous/Next controls. Its intrinsic 750×878 pixels are recorded; no exact 390px-source/device claim is made. |

The original image gap is resolved. The temporary decision to defer login was superseded when the owner confirmed they had signed in. No answers, results, paid access or account scores were edited for portfolio presentation. Other PromotionSure source content remains unchanged.

## Final image refinement — 2026-11-06

These owner-directed changes supersede the initial image selections above while preserving their history. They change imagery and concise captions inside the approved slots, not the page structure.

| Original wording / treatment | Updated wording / treatment | Evidence |
| --- | --- | --- |
| Alabarin case-study screenshots extracted from the film; caption “Android Journey monitoring during limited connectivity” | Direct native Android Start Journey screenshot; “Android Traveller: destination and arrival setup” | Owner requested actual sharp screenshots and specifically Android Traveller UI. Original `live-start-final.png` is a native 720×1640 Android capture predating the film; the selected crop visibly contains destination and expected-arrival controls. Lossless output exactly matches source pixels. |
| Recorded Viewer frame; caption “Authorized historical Journey status in the Trusted Viewer” | Original authenticated Viewer screenshot; “Trusted Viewer: historical Journey status” | `viewer-original.png` matches the original product-acceptance screenshot SHA-256 recorded in its source manifest. The crop shows status and historical update time, without precise coordinates, credentials, browser edges or watermark. It is not an extracted video frame or a new acceptance run. |
| Temporarily using a native Android crop for Alabarin's homepage cover | Retain the existing Alabarin video cover on the homepage only | Owner explicitly requested the video image for Alabarin's homepage main picture. Existing `Alabarin-YouTube-Thumbnail.png` is converted losslessly; native case-study screenshots remain separate. |
| PromotionSure Practice view on the homepage card | Real public landing-page screenshot on the homepage; Practice views remain inside the case study | Owner rejected Practice as the main homepage image and logged out to show the landing page. Anonymous capture of `https://promotionsure.com.ng/` returned HTTP200 and shows the actual brand, exam introduction and public product preview. |
| Practice screenshots included peripheral browser scrollbar/window pixels; original dimensions 1920×948 and 750×878 | Crop only those edges, yielding 1895×947 and 748×877; use lossless WebP | Owner requested screenshots without the scrolling line. Manifest crop rectangles, original hashes and exact decoded RGB comparisons establish that no product UI, question text, answers or scores were edited. Public landing-page capture also excludes scrollbars. |

All selected screenshots remain historical/capture-time visual evidence. The homepage video cover is an explicit editorial exception, not evidence that the case-study images were extracted from video. Full provenance and intrinsic dimensions are recorded in ASSETS.md and ASSET_MANIFEST.json; original local paths and raw captures remain ignored.

## Portfolio domain and About copy — 2026-11-06

| Original wording / treatment | Updated wording / treatment | Evidence |
| --- | --- | --- |
| Résumé contact line had location, email, phone and GitHub, with no portfolio destination | Add “Portfolio” beside GitHub on screen; print the readable `rahmvn-portfolio.vercel.app` domain with a clickable HTTPS destination in the regenerated PDF | Owner supplied this exact domain and requested its addition. Anonymous HTTP200 response returned the expected portfolio HTML/title. Source reference documents remain unchanged. |
| No canonical/share URL and no live-site link in README | Use the owner-confirmed origin for canonical/Open Graph URLs and README; update route metadata when navigating | Existing live domain, verified above. This adds no public claims or new visible content section. Static SPA HTML initially describes the homepage; client navigation updates route metadata. Existing noindex remains unchanged. |
| “I enjoy solving practical problems through software, from understanding requirements and making technical decisions to building, testing and maintaining the finished product.” | “I enjoy solving practical problems through software and understanding how the pieces fit together. My work has taken me from client websites and a commercial exam platform to Android systems that handle interruptions and uncertain information. I’m usually involved from requirements and technical decisions through implementation, testing and maintenance.” | Owner asked whether About was too small and clarified that it should describe the person/work without location framing, student status, availability advertising or filler. The existing revised résumé and verified project records support the client website, exam platform, Android interruption-handling and independent delivery/maintenance references. Existing section structure and styles are retained. |
