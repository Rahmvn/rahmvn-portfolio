# Approved design inspection

Inspected read-only through Figma MCP on **2026-11-05**: [approved file](https://www.figma.com/design/GBBM8b1souv2RrwAD3x4EQ). No nodes changed. Foundations were retrieved with high-fidelity `get_design_context` and an inline screenshot. Metadata/Plugin API reads covered page structure, variables, navigation/résumé contracts and prototype entry points. Downloaded desktop/mobile homepage screenshots were visually inspected and retained only in ignored QA storage.

## Reference map

| Page | ID | Useful frames |
| --- | --- | --- |
| Overview | `98:46` | Handoff `100:2` |
| Foundations | `98:47` | Palette/type/motion `101:2`; navigation/résumé `136:2` |
| Shared components | `14:2` | Navigation `14:23`; card `14:34`; theme `21:48`; mobile tab `30:93`; action `39:52`; media `39:65`; technology `50:78`, `75:46` |
| Homepage | `31:2` | Desktop `15:2`, `102:766`; mobile full `31:3`, `102:847`; viewport `31:71`, `102:915` |
| PromotionSure | `42:2` | Desktop `42:3`, `107:180`; mobile `45:32`, `107:301` |
| Alabarin | `56:177` | Desktop `56:2`, `110:198`; mobile `56:61`, `110: 352` |
| Al-Muflihoon | `69:294` | Desktop `69:180`, `114:174`; mobile `69:239`, `114:292` |
| Pillars of Pension | `71:349` | Desktop `71:235`, `114:711`; mobile `71:294`, `114:830` |
| Prototypes | `85:46` | Desktop entrance `87:361`; mobile motion `87:541` |
| Résumé / Website + Print | `140:2` | Desktop `146:2`, `146:153`; mobile `146:304`, `146:448`; A4 `155:2`; handoff `152:88` |
| Archive | `98:48` | Excluded |

Published design-system search returned no matches for inspected navigation/theme/background queries. Local components and variables exist and were inspected directly. No library dependency was installed. Fetch full design context and screenshots for each actual screen before implementation; metadata is not a fidelity specification. Case-study/résumé visual comparison and exhaustive prototype traversal remain deferred.

## Exact token provenance

`Portfolio / Colors`, collection `14:3`, modes `14:0` (Light), `21:0` (Dark, called Soft Dark in specimens):

| Figma | CSS | Light | Soft dark |
| --- | --- | --- | --- |
| background | `--color-background` | `#F8F8F6` | `#141917` |
| ink | `--color-ink` | `#202524` | `#EDF0ED` |
| muted | `--color-muted` | `#656D69` | `#B7C1BC` |
| accent | `--color-accent` | `#46565E` | `#C6CFD3` |
| surface | `--color-surface` | `#EEF1EF` | `#28312C` |
| border | `--color-border` | `#E0E5DF` | `#3E4842` |
| white | `--color-raised` | `#FFFFFF` | `#202724` |

Spacing collection `14:11`: **8, 12, 16, 24, 32px**, mapped to rem. Geist specimen: display 64px, heading 28–32px, body 16–18px, label 12–14px. Actual component sizes must still be inspected; the mobile homepage heading does not use the 64px foundation specimen. Radius 8/16px is observed in foundation specimens.

Motion `101:66`–`101:75`: entrance **320ms ease-out**, card hover **180ms** subtle image zoom, action feedback **160–180ms** arrow/colour, theme **220ms ease-in-out**, reduced motion removes decorative transitions. Exact hover scale/entrance distance was not established and must not be invented as approved.

## Layout and behavior findings

- Homepage desktop 1200×1564: header x70/y48, width1060; two-column projects; About/Contact share a row.
- Mobile width390: 24px content gutters, one-column projects and stacked About/Contact. Its 390×844 viewport has pinned bottom tabs; résumé/theme remain at the top.
- Themes preserve layout. Selected dark desktop navigation uses a brighter label; mobile selection uses a soft surface pill. Only one homepage section is selected at a time. Case-study links return to the appropriate homepage section.
- Case studies contain return/next actions, metadata, technology icons and authentic screenshot slots. The file explicitly calls for real development-time captures.
- `/resume` is an internal page. `152:88` requires clean A4 printing, selectable text, working links and one-page verification. The 794×1123 design approximates A4 at 96dpi; use physical dimensions in actual print output.
- Owner clarification supersedes the old reviewed-asset wording: approved revised facts + website visuals + a newly generated PDF from website print CSS.

The preceding checkpoint findings are historical. Full implementation inspection and exported assets are recorded below. Temporary Figma URLs are never runtime sources.

## Full implementation inspection — 2026-11-05

Read-only Figma MCP inspection succeeded. Full design contexts/code and inline screenshots were retrieved for all desktop/mobile light page frames, desktop dark homepage/Alabarin, theme variants, mobile tabs, action/card hover variants and the system diagram. Shared component definitions, navigation destinations and prototype reactions were inspected. No Figma nodes were changed and no alternative design was created.

Downloaded **27 native reference PNGs** cover all six pages at desktop/mobile sizes in both themes, the two mobile homepage viewport/navigation states and the A4 print frame. Contexts and references are retained in ignored `.local/design/` and `.local/figma/`, with reference metadata in `.local/figma-references.json`. They are QA references, never product imagery.

Browser comparisons use six routes ×two widths ×two themes = 24 full-page renders plus 24 viewport renders. Full mobile references omit the pinned overlay, so the visual script hides only that overlay for full-page comparison and separately captures its real viewport appearance. Normal application behavior is unaffected.

Actual page measurements replaced the generic foundation specimen sizes: home heading59px desktop/43px mobile; case headings62px/43px; résumé55px/39px; print34px. Card/media/diagram geometry and mobile technology rows follow their own contexts. Alabarin uses four badges per mobile row; the other stacks use three. Approved mobile copy is retained separately where Figma supplies a concise version.

Engineering deviations are limited to accessibility contrast/focus, the 850px layout breakpoint, real verified logo replacements, genuine public captures filling empty slots, factual corrections and normal browser typography differences. Exact entrance displacement/hover zoom scale was not established; the implementation uses a 320ms fade and 180ms surface feedback rather than inventing those measurements. See CONTENT_DECISIONS.md and IMPLEMENTATION_REPORT.md.
