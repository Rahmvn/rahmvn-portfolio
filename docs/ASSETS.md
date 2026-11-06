# Asset provenance

`ASSET_MANIFEST.json` records source identity, intrinsic dimensions, byte size and SHA-256 for **50 local assets**: 35 Figma exports, 5 Simple Icons marks and 10 project images. Of these, 48 are used by the application; the two native Alabarin screenshots are retained reviewed sources, marked `runtime: false`, and excluded from the production bundle. The owner-selected Alabarin video is externally hosted and loads only after activation. Original SVG geometry was retained; no temporary Figma URL is a runtime source.

## Shared vectors

- Contact artwork: Figma frames15:2 /102:766, 24px, distinct light/dark exports.
- Mobile tabs:31:101 /102:945,20px; active pill geometry comes from the original tab component30:93.
- Theme toggle:21:46,70×38px; accessible hit area44px high.
- Technology marks: case-study contexts42:3,56:2,69:180 and71:235,26px or28px inside44px badges. Room retains its approved database symbol. React, JavaScript, Vite, PostgreSQL and CSS3 use authentic monochrome [Simple Icons](https://github.com/simple-icons/simple-icons) vectors instead of simplified design representations. The CC0 notice is in public/CC0-Simple-Icons.txt; brand identities remain their owners'.
- Alabarin connectors: desktop1060×470 and mobile342×508 exports. The surrounding diagram is semantic HTML in distinct approved compositions.
- Screenshot placeholder icon:42:3,28px. Placeholder text/surfaces preserve the designed treatment where captures are unavailable.
- Geist: exact Fontsource package, self-hosted; OFL notice retained in public/OFL-Geist.txt.

## Reviewed public captures — 2026-11-05

Captured with installed headless Edge, unauthenticated and without form submission. Screenshots contain the real public pages, with no product content fabricated or replaced. Originals and HTTP/title/URL/timestamp receipts stay in ignored `.local/project-captures/`. WebP copies retain original viewport dimensions, quality88; CSS only fits them inside the approved media boxes.

| Runtime file | Public source | Viewport | Placement |
| --- | --- | --- | --- |
| al-muflihoon-1440.webp | https://almuflihoon.com.ng/ |1440×960 | Homepage card; case hero and first supporting view |
| al-muflihoon-admissions-390.webp | https://almuflihoon.com.ng/admissions |390×844 | Second supporting view, contained portrait |
| pillars-of-pension-1440.webp | https://pillars-of-pension-website.vercel.app/ |1440×960 | Homepage card; case hero and first supporting view |
| pillars-of-pension-author-390.webp | https://pillars-of-pension-website.vercel.app/author.html |390×844 | Second supporting view, contained portrait |

No image filter changes product colours between portfolio themes. Covers use top-aligned cropping; portrait supporting captures preserve the full viewport within the neutral frame. No device mockup or unrelated stock imagery was added. These images intentionally fill Figma's empty development-time screenshot slots; the container geometry stays intact.

## Alabarin local archive selection — refined 2026-11-06

**Current placement:** the owner subsequently replaced both native case-study screenshots with the YouTube demonstration below. The screenshot provenance is retained here as history; the original local files remain unchanged and the two WebP source assets are not imported into the application. The existing cover still supplies the homepage thumbnail and click-to-load video poster.

Following the owner's direction, the local Alabarin recovery, film-production and Android artifact folders were inspected read-only. A scoped file inventory found 10,388 image files, including repeated extracted frames, browser fixtures and older UI states. After the owner requested sharper direct screenshots and the Android Traveller UI, the case-study video frames were replaced with original native screenshots. The existing video cover remains on the homepage at the owner's explicit later request. The source archives were left unchanged.

| Runtime file | Existing source | Placement / reason |
| --- | --- | --- |
| alabarin-cover.webp | Alabarin-YouTube-Thumbnail.png, 1920×1080 | Homepage only: existing video cover retained by explicit owner preference |
| alabarin-android-start.webp | live-start-final.png, 720×1640; crop [24,80,696,560] → 672×480 | First supporting slot: direct Android Traveller Start Journey destination and expected-arrival controls |
| alabarin-trusted-viewer.webp | viewer-original.png, 1920×948; crop [620,271,1834,825] → 1214×554 | Second supporting slot: original authenticated Viewer screenshot, showing historical Journey status and update time |

All three outputs use lossless WebP; decoded RGB pixels equal the original image or documented source crop. No upscaling, sharpening, UI recreation, text editing or generated imagery was used. The two supporting images use contain fitting so the complete selected crops remain visible on mobile and desktop. Cropping excludes phone status/account areas, browser edges, precise-coordinate regions and the desktop watermark without editing the pictured product state. Existing school/Pillars rendering remains the same.

The native Android image predates the film. Although the selected Viewer PNG is retained in a video experiment folder, its source manifest maps it to the original product-acceptance screenshot and the original SHA-256 matches. It is not an extracted video frame. These are historical screenshots, not a new hosted acceptance run; their status text does not imply a current Journey, guaranteed safety or native Alexa integration. The existing diagram remains the case-study hero. Selection records, original local paths/hashes and review contact sheets are retained only in ignored `.local/alabarin-assets/`; public provenance includes source asset names/hashes without private operational files.

Older synthetic browser captures, account/invitation screens and raw evidence/coordinate views were excluded from the selection. The supporting captions were made specific to the actual pictures; see CONTENT_DECISIONS.md.

## PromotionSure homepage and Practice captures — 2026-11-06

The owner signed in through their existing Rahmvnx Chrome browser and explicitly requested the Practice page. The active Practice interface was captured from that existing session, rather than copying login state into another profile. After reviewing the homepage card, the owner requested a more suitable cover and logged out to show the public landing page. An anonymous Edge context captured that public page with HTTP200; its scrollbars were hidden only in the disposable capture context. Only product content was promoted to runtime assets; browser tabs, address bar, desktop/taskbar, account settings and payment screens are excluded.

| Runtime file | Captured view | Intrinsic pixels | Placement |
| --- | --- | --- | --- |
| promotionsure-home.webp | Public landing-page brand, exam introduction and product preview |1220×660 | Homepage card only, contained fitting |
| promotionsure-practice-desktop.webp | Actual timed Public Service Rules practice question, answer options, progress, question map and review control |1895×947 | Case hero and first supporting slot, contained fitting |
| promotionsure-practice-narrow.webp | Same Practice interface in its narrow responsive composition, including Previous/Next controls |748×877 | Second supporting slot, contained fitting |

The desktop display used 144DPI. Chrome's minimum normal-window size constrained the narrow capture; it is recorded as a narrow view, not claimed to be a 390px device screenshot. Portfolio rendering itself is separately tested at 390px and narrower. The original PNGs and capture receipts remain in ignored `.local/promotion-session-captures/` and `.local/promotion-home-cover/`. Lossless outputs exactly preserve the source RGB pixels within these crop rectangles: landing [110,0,1330,660], desktop Practice [1,1,1896,948], narrow Practice [1,1,749,878]. Browser scrollbars and window edges are excluded. The pictured Practice state is the unanswered first question; the capture workflow did not select answers, submit results, change paid access or expose account credentials. The owner's browser was restored to desktop size and remains under their control.

These images establish the public landing page and real Practice interface at capture time; they do not establish payment, reliability or production acceptance beyond those views. Homepage imagery and case-study imagery are independently selected. No account score was modified or fabricated for presentation.

## Capture completion

- **PromotionSure:** the homepage uses the public landing page; case-study slots retain the owner-requested Practice captures. Earlier Edge timeouts were resolved for the public capture by disabling HTTP/2 and QUIC in that capture context. The separate temporary capture browser was closed; no credentials were requested through chat or copied to runtime assets.
- **Alabarin:** the homepage retains the existing cover; the case study uses the owner-selected YouTube demonstration instead of both screenshots. The cover is also the local player poster. No fresh device, cloud or authenticated Viewer operation was needed.
- **School and Pillars:** existing genuine public screenshots remain in place. No project image slots currently require placeholder imagery.

`node scripts/capture-projects.mjs` reproduces public capture attempts into ignored QA storage. `--details` limits it to admissions/author pages. Review before promoting an output to runtime assets, update the manifest and rerun browser/visual checks. An unsuccessful capture never becomes runtime imagery.

## Alabarin demonstration video — 2026-11-06

The owner supplied [YouTube video dqTgYIgv4a8](https://www.youtube.com/watch?v=dqTgYIgv4a8) and explicitly requested it instead of the two case-study pictures. YouTube oEmbed returned HTTP200 with the title “Alabarin | Journey Continuity When Communication Fails”; the privacy-enhanced embed endpoint also returned HTTP200. The existing local cover is reused as the poster, with no external thumbnail request or additional imagery. The source URL's share-tracking parameter is omitted from the canonical watch link.

The embedded video is the sole supporting demonstration; the semantic system diagram remains the case-study hero. Player controls, fullscreen/inline playback and caption preference are enabled. Playback is requested only after a deliberate Play activation. A permanent “Watch on YouTube” link provides an alternative if embedding is unavailable. Video content remains historical demonstration evidence; adding it does not strengthen the qualified engineering/reliability claims.
