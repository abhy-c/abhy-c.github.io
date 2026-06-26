# Stitch Handoff Pack

This folder packages the current site into a format that is easier to use inside Google Stitch.

## What Stitch Should Receive

Do not drag the entire Finder folder into Stitch and hope it reconstructs the project correctly. Treat Stitch as a design and context workspace, not as a full Next.js repo importer.

Use this handoff pack instead:

1. Upload screenshots of the current site.
2. Paste the prompts from [stitch-prompts.md](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/docs/stitch-handoff/stitch-prompts.md).
3. Give Stitch the root [DESIGN.md](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/DESIGN.md).
4. Paste or upload the source files listed below as context.

## Best Files To Share From This Repo

Highest value context:

- [lib/site-config.ts](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/lib/site-config.ts)
- [app/page.tsx](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/app/page.tsx)
- [app/about/page.tsx](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/app/about/page.tsx)
- [app/projects/page.tsx](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/app/projects/page.tsx)
- [app/blog/page.tsx](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/app/blog/page.tsx)
- [app/consulting/page.tsx](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/app/consulting/page.tsx)
- [app/globals.css](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/app/globals.css)
- [masterplan.md](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/masterplan.md)

Useful supporting content:

- [content/projects/policypath.mdx](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/content/projects/policypath.mdx)
- [content/projects/querybrief.mdx](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/content/projects/querybrief.mdx)
- [content/projects/signalboard.mdx](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/content/projects/signalboard.mdx)
- [content/blog/designing-ai-features-that-earn-trust.mdx](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/content/blog/designing-ai-features-that-earn-trust.mdx)
- [content/blog/what-legal-reasoning-adds-to-product-strategy.mdx](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/content/blog/what-legal-reasoning-adds-to-product-strategy.mdx)
- [content/blog/when-sql-becomes-a-product-skill.mdx](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/content/blog/when-sql-becomes-a-product-skill.mdx)

Visual assets worth sharing:

- [public/images/headshot/abhyudai-portrait.jpg](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/public/images/headshot/abhyudai-portrait.jpg)
- [public/images/backgrounds/nyc-skyline.jpg](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/public/images/backgrounds/nyc-skyline.jpg)
- [public/images/favicon/statue-of-liberty.png](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/public/images/favicon/statue-of-liberty.png)

## Do Not Upload

- `node_modules/`
- `.next/`
- `package-lock.json`
- machine-specific files such as `.DS_Store`
- unrelated scaffolding or generated artifacts

## Suggested Workflow In Stitch

1. Create a new Stitch project for the portfolio redesign or refinement.
2. Paste the brief prompt from [stitch-prompts.md](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/docs/stitch-handoff/stitch-prompts.md).
3. Add `DESIGN.md` as persistent design context.
4. Upload screenshots of the current homepage, about page, writing page, projects page, and consulting page.
5. Add the key source files so Stitch can see the information architecture and copy, not just the visuals.
6. Ask Stitch for screen variants one page at a time: homepage first, then About, Projects, Writing, and Consulting.
7. Export the design result back into code or mockups after the structure feels right.

## What Good Stitch Output Looks Like

- stronger hierarchy than the current site without changing the core positioning
- more confident composition, spacing, and polish
- the same professional tone and restrained palette
- no shift into generic AI startup aesthetics
- no removal of writing, projects, or consulting conversion paths

## Fast Start

If you only want the minimum viable handoff, give Stitch these four things:

1. screenshots
2. [DESIGN.md](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/DESIGN.md)
3. [lib/site-config.ts](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/lib/site-config.ts)
4. the homepage prompt from [stitch-prompts.md](/Users/abhyudaichauhan/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/Personal/python/code%20experiments/Vibecode%20website%20w%20NG/docs/stitch-handoff/stitch-prompts.md)
