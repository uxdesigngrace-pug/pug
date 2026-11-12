# Grace Gwe — Portfolio

Source for **https://www.gracegwedesign.com/**. Static HTML, CSS and JavaScript, deployed through Vercel.

## Pages

`index.html` (home and ugu), `about.html`, `resume.html`, and seven `case-*.html` pages. Responsive visual case studies share `assets/case-system.css` and `assets/case-system.js` where applicable.

## ugu portfolio guide

- Ugu’s on-site fallback answers are topic-aware and link to relevant case studies, even without a paid AI API.
- `assets/ugu-knowledge.json` documents approved public facts and content boundaries for future server-side AI integration.
- The site attempts `/api/chat`; absent a configured secure backend, it uses the local answers. **Never put API keys in client JavaScript.**
- Test recruiter questions, keyboard navigation, and unknown-question behavior before adding a generative backend.

## Case-study storytelling

- Explain user problem → research evidence → decisions/trade-offs → annotated solution → validation status/outcome.
- Differentiate professional project engagements from ASU coursework, shipped product from prototype, and measured outcomes from proposed outcomes.
- Review client screenshot rights before adding new confidential assets.

## Deployment

GitHub is the source of truth. Connect the `main` branch to Vercel and set **Framework Preset: Other**; no build command required, output at project root. This repository is migrated from a Vercel Drop archive. Verify `/`, `/about`, all case pages, `/assets`, and the Ugu chat after deployment.

## Employer-centered case studies (November 2026)

All seven case studies now start with the same concise employer-facing story: challenge, audience, individual responsibility, research or other evidence, insight, decision, rationale, and verified result. The visual storyline uses shared `assets/employer-story.css`. Longer project evidence and original visual artifacts remain available below, with context-specific jump links.
