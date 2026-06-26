# Master Plan

Status: Canonical source of truth for the portfolio website  
Last updated: 2026-04-22  
Planning mode: Approved for specification only; implementation must preserve fidelity to this document unless an explicit revision is made here first.

## 1. Product Definition

### 1.1 Product Type
Personal portfolio website for a solo operator with:

- a polished corporate homepage
- a long-form writing/blog section
- a project gallery for selected personal projects
- a consulting booking flow connected to Calendly

### 1.2 Positioning Statement
Product Manager | NYU MBA (STEM) | AI, SQL, Blockchain | Ex-attorney building B2B and fintech products with user-centric, data-informed execution.

### 1.3 Primary Objectives

- establish professional credibility immediately
- communicate a clear cross-functional profile spanning product, legal, data, AI, and fintech
- create a durable publishing platform for many blog posts
- showcase a smaller set of high-signal projects
- convert qualified visitors into booked intro calls and consulting conversations
- remain extremely simple to maintain as a solo-owned site

### 1.4 Success Criteria

- a first-time visitor understands who the site owner is and what they do within 5-10 seconds
- visitors can reach projects, writing, and booking within one click from the homepage
- blog publishing requires only adding a new content file and assets
- the site runs without a database, CMS, or custom backend
- the booking flow supports one free consult event type at launch
- the visual system feels premium, credible, restrained, and business-ready rather than startup-generic or overly playful

## 2. Product Priorities

### 2.1 Ranked Priorities

1. clarity and credibility
2. ease of maintenance
3. performance and responsiveness
4. strong visual polish
5. low recurring cost

### 2.2 Non-Negotiable Constraints

- the site must be maintainable from a blank MacBook plus internet access
- all required installs, services, accounts, and setup steps must be documented
- the site must be mobile responsive
- the site must support many blog posts without needing a CMS at launch
- the site must support Calendly-based booking with one free consult event type at launch
- the implementation must avoid unnecessary complexity

## 3. Final Scope

### 3.1 In Scope for V1

- homepage
- about/experience page
- projects index page
- project detail pages
- blog index page
- blog post pages
- consulting/book page
- global navigation and footer
- SEO metadata, sitemap, RSS, and social preview support
- local content management via Markdown/MDX
- Calendly integration
- production deployment
- domain and DNS setup documentation

### 3.2 Explicitly Out of Scope for V1

- custom CMS
- user accounts or authentication
- comments on blog posts
- newsletter infrastructure
- custom payment flow
- database-backed search
- admin dashboard
- custom booking backend
- multilingual support
- dark mode
- JavaScript-heavy animation systems beyond basic CSS motion

## 4. Tech Stack Decision

### 4.1 Comparison: Earlier Recommendation vs Proposed Stack

Initial suggested direction:

- Next.js
- modern CSS approach
- local Markdown/MDX or lightweight CMS later
- Vercel
- Calendly

User-proposed stack:

- Next.js
- Tailwind CSS
- shadcn/ui
- Framer Motion

### 4.2 Critique of the Earlier Recommendation

The earlier recommendation was directionally correct but underspecified:

- `Next.js` was a strong framework choice.
- `modern CSS approach` was too vague for a source-of-truth plan. The styling system needs to be explicit.
- `Vercel` is operationally smooth, but Vercel documents the Hobby plan as aimed at personal, non-commercial use. Because this site promotes consulting, that creates a plan-selection ambiguity.
- `local MDX` remains the best choice for simplicity and low cost.

### 4.3 Critique of the Proposed Stack

#### `Next.js`
Keep it.

Why:

- official App Router docs position it as the current routing model for modern React features
- official MDX docs support local Markdown/MDX content cleanly
- official Vercel support for Next.js makes deployment straightforward once the site is ready

#### `Tailwind CSS`
Keep it.

Why:

- official docs emphasize utility-first styling and responsive breakpoint variants, which fit a responsive marketing site well
- it speeds implementation and keeps responsive behavior close to the markup
- it reduces custom CSS sprawl if token discipline is enforced

Risk:

- Tailwind can produce generic-looking UIs if used without a clear design system

Mitigation:

- this plan defines explicit typography, color, spacing, card, and motion rules so the site does not look like a commodity template

#### `shadcn/ui`
Do not make it a baseline dependency.

Why:

- official docs state that shadcn/ui is not a traditional component library; it gives you open component code that you then own
- that ownership is powerful, but it increases maintenance because copied component code becomes part of the repo forever
- this site does not require a large interactive application surface
- for a polished corporate personal brand site, heavy reliance on shadcn defaults risks making the experience feel too familiar and less bespoke

Decision:

- `shadcn/ui` is not part of the required baseline stack
- it may be used selectively later if a specific accessible primitive is needed and building it by hand is not worth it

#### `Framer Motion`
Do not make it a baseline dependency.

Why:

- the current official Motion docs note that standard CSS is the better fit for simple self-contained effects
- this site’s aesthetic should be restrained and executive, not animation-led
- adding a full animation library for simple fades, hover states, and small reveals increases dependency weight and maintenance

Decision:

- baseline motion will use CSS transitions and transforms
- Motion for React may be added later only if a specific interaction cannot be delivered cleanly with CSS alone

### 4.4 Final Stack Decision

Required baseline stack:

- `Next.js` with App Router
- `TypeScript`
- `Tailwind CSS`
- local `MDX` content for blog posts and project content
- standard production build suitable for localhost development first and Vercel deployment later

Not required in baseline:

- `shadcn/ui`
- `Framer Motion` / `motion`
- CMS
- database
- custom API

### 4.5 Why This Is the Best Fit

#### Cost-effective

- no CMS subscription
- no database cost
- no backend hosting requirement
- the site can be developed and fully tested locally before any account creation
- Vercel Hobby is sufficient for a personal portfolio site at launch
- Calendly Free is sufficient because launch uses one free consult event type

#### Responsive

- Tailwind’s responsive utilities and breakpoint system make mobile-first layout work fast and maintainable
- static content keeps runtime complexity low
- the site architecture does not depend on client-heavy widgets except the Calendly embed

#### Aesthetic

- the stack gives full design control without forcing a library look
- avoiding heavy default component kits keeps the visual identity bespoke
- restrained motion and strong typography support a more credible corporate presence

## 5. Hosting and Deployment Decision

### 5.1 Final Hosting Choice
Deploy the production site on Vercel after local development and testing are complete.

### 5.2 Why Vercel

- Vercel provides the most direct deployment path for a Next.js site
- preview deployments and production deployment are simple once accounts are created
- the user has explicitly chosen to keep Vercel
- the launch offering remains a personal portfolio with one free consult event

### 5.3 Account Creation Timing

All third-party accounts should be created only after:

- the website runs successfully on localhost
- core user flows are tested locally
- content and design are ready for deployment

This applies to:

- Vercel
- Calendly
- GitHub remote if needed
- domain and DNS services

### 5.4 Architecture Constraint

- the codebase must run locally without depending on live third-party account configuration
- the deployment target is Vercel, but deployment setup is deferred until the site is ready
- analytics and third-party integrations must remain optional and modular

## 6. Required Accounts and External Services

### 6.1 Required Accounts

- `GitHub` account for source control and remote repo
- `Vercel` account for deployment
- `Calendly` account for booking
- `Google` account for primary calendar connected to Calendly

### 6.2 Strongly Recommended Accounts

- domain registrar account
- Google Search Console account for indexing and sitemap submission
- LinkedIn account link for credibility and conversion

### 6.3 Required Third-Party Services

- Vercel for hosting
- Calendly for booking
- Google Calendar for scheduling sync

### 6.4 Services Explicitly Not Required at Launch

- headless CMS
- database host
- email service provider
- analytics SaaS
- payment processor

## 7. Cost Model

### 7.1 Expected Core Costs

- `GitHub Free`: $0 expected
- `Vercel Hobby`: $0 expected at launch
- `Calendly Free`: $0 expected at launch
- domain registration: variable by registrar and TLD

### 7.2 Important Pricing Notes

- as of 2026-04-21, Calendly pricing lists `Free` with `1 event type` and `Standard` with `unlimited event types`
- as of 2026-04-21, Vercel documents Hobby as intended for personal, non-commercial use
- as of 2026-04-21, the launch plan uses one Calendly event type on the Free tier

## 8. Local Machine Requirements

### 8.1 Assumed Starting Point

- one MacBook
- internet connection
- terminal access

### 8.2 Required One-Time Software Installs

1. Xcode Command Line Tools
2. Homebrew
3. Node.js LTS
4. Git if not already available through Command Line Tools

### 8.3 Optional But Helpful Local Software

- Visual Studio Code or another editor
- GitHub Desktop or GitHub CLI
- image optimization app such as ImageOptim

### 8.4 Version Policy

- use the current Node.js LTS line, not the Current release line
- as of 2026-04-21, nodejs.org lists `v24.14.1` as the latest LTS and `v25.9.0` as Current
- pin the project to Node 24 LTS major unless this document is revised

## 9. Local Setup Runbook

### 9.1 Required Install Sequence

```bash
xcode-select --install
```

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Preferred Node installation path:

- install Node 24 LTS via Homebrew or the official Node installer
- do not use the Current branch for this project

Fallback for restricted local machines:

- if administrator access is unavailable, a repo-local Node 24 LTS binary may be downloaded and used for localhost development only
- this fallback is acceptable for local build/test work but should not replace the documented system-level install as the long-term default

Homebrew path:

```bash
brew install node@24
```

Verify:

```bash
node -v
npm -v
git --version
```

### 9.2 Package Manager Decision

Use `npm`.

Why:

- it ships with Node
- it avoids an extra package-manager install
- it is simplest for a solo-maintained site

Do not require:

- `pnpm`
- `yarn`

## 10. Repository and Content Architecture

### 10.1 Repository Model

- single Next.js application repo
- no monorepo
- no separate content repo

### 10.2 Proposed Directory Structure

```text
/
  app/
    (marketing routes)
    blog/
    projects/
    consulting/
    about/
  components/
    layout/
    sections/
    ui/
  content/
    blog/
    projects/
  lib/
    content/
    seo/
    utils/
  public/
    images/
      headshot/
      projects/
      blog/
      og/
    favicon/
    resume/
  styles/
  scripts/
  masterplan.md
```

### 10.3 Content Storage Decision

Use local MDX files stored in-repo.

Why:

- lowest maintenance overhead
- no CMS subscription
- easy backup via Git
- ideal for a solo operator comfortable with text files

## 11. Information Architecture

### 11.1 Primary Navigation

- `Home`
- `About`
- `Projects`
- `Writing`
- `Consulting`
- `Book a Call`

### 11.2 Footer Navigation

- About
- Projects
- Writing
- Consulting
- Resume
- LinkedIn
- GitHub
- Email

### 11.3 Final Route Map

- `/`
- `/about`
- `/projects`
- `/projects/[slug]`
- `/blog`
- `/blog/[slug]`
- `/consulting`
- `/resume`
- `/404`
- `/rss.xml`
- `/sitemap.xml`
- `/robots.txt`

## 12. Page Specifications

### 12.1 Home Page

Purpose:

- make the positioning instantly legible
- create a high-trust first impression
- direct users into writing, projects, or consulting

Required sections:

- hero
- positioning statement
- short credibility strip
- compact focus-areas strip
- credential panel with headshot
- featured writing
- featured insight quote block
- featured projects
- consulting teaser
- short bio block
- CTA strip for booking
- footer

Hero requirements:

- name
- role summary
- 1-2 sentence value proposition
- primary CTA: `Book a Call`
- secondary CTA: `Read Writing` or `View Projects`
- skyline image may appear here only as a blurred, translucent atmospheric layer that never compromises text contrast

Credibility strip requirements:

- NYU MBA (STEM)
- ex-attorney
- B2B and fintech
- AI / SQL / Blockchain

### 12.2 About Page

Purpose:

- provide a fuller narrative without crowding the homepage

Required sections:

- professional headshot
- expanded biography
- operating style and philosophy
- selected experience timeline
- skills/expertise areas
- resume download CTA
- consulting CTA
- skyline image may be reused here as restrained background atmosphere only

### 12.3 Projects Index

Purpose:

- display a curated set of personal projects

Required format:

- card-based gallery
- visual thumbnail
- title
- one-line summary
- domain or category label
- stack tags
- outcome/status badge

V1 behavior:

- no complex filtering required unless project count grows past 8
- grid must collapse cleanly from desktop to mobile

### 12.4 Project Detail Page

Required sections:

- project summary
- role/context
- problem/opportunity
- approach
- outcome
- tools/stack
- screenshots/media
- external links

Optional sections:

- lessons learned
- future roadmap

### 12.5 Blog Index

Purpose:

- support many posts over time

Required features:

- reverse chronological list
- category/tag display
- featured post area
- pagination or archive grouping
- search not required for V1

Decision:

- use pagination for scalability and performance

### 12.6 Blog Post Page

Required elements:

- title
- publish date
- estimated reading time
- tags
- author attribution
- reading progress indicator
- hero image optional
- social metadata
- previous/next article links

### 12.7 Consulting Page

Purpose:

- explain consulting offer and convert visitors into bookings

Required sections:

- consulting overview
- who this is for
- session types
- what to expect
- FAQs
- Calendly embed or booking link

Booking model decision:

- use a direct Calendly embed or booking link for one free consult event
- keep future consulting session types as inactive content stubs only
- launch must not depend on multiple active Calendly event types

### 12.8 404 Page

Requirements:

- clean brand-aligned layout
- link back to homepage
- links to Projects and Writing

## 13. Consulting Booking Specification

### 13.1 Required Event Types

At launch:

- Free Consult

Future stubs only:

- Product Strategy Session
- AI / Data / SQL Advisory Session
- Fractional Product Advisory
- Fintech / Regulated Product Consultation

### 13.2 Booking Rules

- all scheduling handled by Calendly
- no custom booking backend
- Google Calendar is the source calendar
- timezone handling delegated to Calendly
- the launch event type must have a short description and duration

### 13.3 Calendly Plan Requirement

- launch assumes Calendly Free because only one active event type is required
- future consulting expansion can upgrade Calendly later without requiring a website rewrite

## 14. Content Model Specifications

### 14.1 Blog Post Fields

Each blog post must support:

- `title`
- `slug`
- `date`
- `excerpt`
- `tags`
- `coverImage` optional
- `featured` boolean
- `seoTitle` optional
- `seoDescription` optional
- `canonicalUrl` optional
- body content in MDX

### 14.2 Project Fields

Each project entry must support:

- `title`
- `slug`
- `summary`
- `status`
- `category`
- `date`
- `stack`
- `thumbnail`
- `gallery`
- `role`
- `problem`
- `approach`
- `outcome`
- `repoUrl` optional
- `liveUrl` optional
- body content in MDX

### 14.3 Site Metadata Fields

- site title
- site description
- site URL
- author name
- author bio
- social handles
- default OG image

## 15. Design System

### 15.1 Visual Direction

Tone:

- polished
- corporate
- premium
- calm
- credible
- modern
- teal-led rather than brass-led

Avoid:

- playful startup aesthetics
- neon accents
- over-animation
- generic dashboard-like cards everywhere
- purple-heavy palettes
- default UI-library look

### 15.2 Design Principles

- high whitespace
- restrained color use
- strong typographic hierarchy
- confident editorial rhythm for the writing experience
- subtle visual texture rather than loud decoration
- motion used only to support clarity and perceived polish

### 15.3 Color System

Recommended palette:

- primary ink: deep navy/slate
- page background: warm off-white
- surfaces: white and very light neutral tones
- primary accent: restrained teal blue
- secondary accent: muted brass used only sparingly
- border: cool light gray
- success/status: muted green

Example direction, not final hex lock:

- background: `#F6F3EE`
- surface: `#FFFFFF`
- primary text: `#0F172A`
- secondary text: `#475569`
- border: `#D7DEE7`
- primary accent: `#0F8B8D`
- secondary accent: `#B08A3E`

### 15.4 Typography

Requirements:

- no default system-only stack as the primary brand expression
- use one sans-serif for interface and headings
- use one serif or refined secondary face for editorial warmth if needed

Recommended pairing:

- UI/headings: `Manrope`
- editorial accent or long-form emphasis: `Newsreader`

Implementation guidance:

- prefer bundled local or self-hosted fonts; do not depend on live third-party font fetching for local builds
- maintain generous line height for blog content

### 15.5 Layout and Spacing

- desktop content width should feel editorial, not overly stretched
- use generous vertical spacing between major homepage sections
- cards should breathe; avoid cramped information density
- spacing scale must be tokenized and reused

### 15.6 Corners, Borders, and Shadows

- rounded corners should be subtle to moderate
- borders preferred over heavy shadow use
- shadows should be soft and shallow

### 15.7 Motion Rules

Baseline motion only:

- fade and slight translate on section reveal
- subtle hover lift on cards
- restrained button and link transitions
- optional CSS-only progress indicator on blog posts

Do not use:

- parallax-heavy hero effects
- constant floating elements
- exaggerated spring animations
- scroll-jacking
- JavaScript animation libraries unless a future revision explicitly approves them

## 16. Responsive Design Requirements

### 16.1 Device Strategy

- mobile-first implementation
- tested at common phone, tablet, laptop, and desktop widths

### 16.2 Required Responsive Behaviors

- navigation must remain clean on small screens
- hero copy must wrap elegantly without feeling oversized
- project cards must stack to single column on narrow screens
- blog reading width must remain comfortable on both mobile and desktop
- Calendly embed must not overflow the viewport

### 16.3 Content Prioritization on Mobile

- positioning and CTA must appear early
- avoid pushing booking CTA too far below the fold
- featured writing and featured projects should remain visible without endless scrolling

## 17. Asset Inventory

### 17.1 Required Assets Before Launch

- professional headshot from `assets/638346309031383266.jpg`
- resume PDF from `assets/Chauhan_Abhyudai_Apr26.pdf`
- favicon set generated from the multicolored Statue of Liberty image in `assets/`
- default OG/social share image
- at least 3 project thumbnails if 3 projects launch
- blog cover images only if a visual editorial style is chosen for the blog index
- skyline photo from `assets/` for blurred, translucent atmospheric background treatments

### 17.2 Strongly Recommended Assets

- text-based wordmark or typographic lockup
- portrait alternative crop for mobile/social
- reusable OG template for blog posts
- a square favicon-safe crop of the Statue of Liberty source image
- a wide, web-optimized skyline export for background use

### 17.3 Asset Specifications

- project thumbnails should be landscape
- OG images should be social-sharing friendly
- all images must be compressed before commit
- alt text must be written for meaningful images
- the headshot must be cropped for a clean professional portrait presentation on the About page and optionally in the homepage credential panel
- the skyline image must be blurred and reduced in opacity before use as a background layer
- the Statue of Liberty favicon source must be cropped to remain legible at very small sizes

### 17.4 Asset Mapping

- headshot: About page primary portrait and optional homepage credential panel
- skyline image: hero, About, and footer atmospheric background treatment only
- Statue of Liberty image: favicon source only
- resume PDF: About page and resume CTA/download target

### 17.5 Asset Processing Preflight

- before implementation, confirm which of the two `.HEIC` files in `assets/` is the skyline image and which is the Statue of Liberty image
- export both HEIC assets into web-friendly formats before integrating them into the build
- preserve the original files in `assets/` as source material and use optimized derivatives in the app

## 18. SEO and Discoverability

### 18.1 Required SEO Features

- unique title and meta description per route
- canonical URLs
- sitemap
- robots.txt
- Open Graph metadata
- Twitter/X card metadata
- RSS feed for writing

### 18.2 Structured Data

Required schema:

- `Person`
- `WebSite`
- `Article` on blog posts

Optional later:

- `BreadcrumbList`
- `CreativeWork` for projects

### 18.3 Content SEO Strategy

- writing is the main long-term organic surface
- projects support credibility more than search volume
- consulting page targets conversion, not high-volume SEO

## 19. Accessibility Requirements

The site must meet a practical WCAG 2.2 AA standard for core flows.

Required:

- visible keyboard focus states
- semantic heading hierarchy
- sufficient contrast
- alt text for meaningful images
- labeled navigation and buttons
- skip link
- reduced-motion respect
- no critical interaction that depends only on hover

## 20. Performance Requirements

### 20.1 Performance Goals

- fast initial load on mobile
- small JavaScript footprint
- content-first rendering
- minimal client-side hydration

### 20.2 Implementation Rules

- prefer Server Components where possible during build/static generation
- avoid unnecessary client components
- do not ship heavy animation or component libraries unless clearly justified
- optimize and compress images before commit
- self-host fonts to reduce layout shift and external dependencies

## 21. Security and Privacy

### 21.1 Security Approach

- no secrets committed to the repo
- no custom auth surface
- minimal third-party scripts
- lock dependency count as low as practical

### 21.2 Privacy Approach

- avoid invasive tracking
- if analytics are added, prefer lightweight, privacy-conscious options
- do not add cookie-banner-triggering marketing stacks unless there is a clear business reason

## 22. Analytics Decision

### 22.1 Launch Decision

Analytics are optional for launch and not required to operate the product.

If analytics are added post-launch, they should remain lightweight and low-maintenance.

### 22.2 Modular Analytics Requirement

- analytics must be addable later through isolated modules only
- the deployed code must not require structural rewrites to enable analytics
- analytics integration points must be wrapped in a dedicated helper, provider, or component boundary
- if analytics are not installed, the site should build and behave exactly the same

### 22.3 Recommended Order of Preference

1. no analytics at launch
2. Vercel Analytics or similar added later through a dedicated integration module
3. GA4 only if explicit marketing measurement needs emerge

## 23. Environment Variables and Secrets

### 23.1 Baseline Expectation

The site should require few or no secrets at launch.

### 23.2 Likely Environment Variables

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CALENDLY_URL`

Optional later:

- analytics IDs
- search console verification values if implemented via env

### 23.3 Secret Handling Policy

- all secrets in hosting provider environment settings only
- never committed to Git
- document any new env var here before implementation

## 24. Build and Release Workflow

### 24.1 Source Control

- Git with GitHub remote
- `main` branch is production source
- feature branches for non-trivial work

### 24.2 Deployment Flow

- push to GitHub
- Vercel preview deployments build previews on branches/PRs
- merge to `main`
- Vercel deploys production build

### 24.3 Build Requirements

- successful install
- successful lint
- successful type check
- successful production build
- successful local development startup

## 25. Testing and QA Strategy

### 25.1 Required Automated Checks

- lint
- type check
- production build

### 25.2 Required Manual QA

- homepage across mobile and desktop
- blog index and blog post rendering
- project cards and detail pages
- Calendly booking page/embed behavior
- broken-link scan
- resume download
- favicon legibility at browser-tab sizes
- skyline background readability against all overlaid text
- headshot crop quality across desktop and mobile
- metadata/social preview spot checks

### 25.3 Nice-to-Have Later

- Playwright smoke tests for main routes

## 26. Launch Content Requirements

### 26.1 Minimum Launch Content

- homepage copy finalized
- full About page copy
- at least 3 high-quality blog posts
- 2-4 polished project entries
- consulting page copy with session definitions
- resume PDF
- headshot
- finalized skyline image export
- finalized favicon crop from Statue of Liberty image

### 26.2 Writing Strategy

Because the blog is a major pillar:

- the writing experience must be first-class
- article layout must support readability for long posts
- tags should cluster content around AI, product, fintech, data, and execution themes

## 27. Copy and Brand Voice

Voice requirements:

- credible
- concise
- intelligent
- business-ready
- warm but not casual
- specific rather than hype-driven

Avoid:

- jargon overload
- exaggerated self-promotion
- startup cliché phrases

## 28. Domain and DNS

### 28.1 Domain Strategy

- use a personal-name domain if available
- fallback is a professional brandable domain tied to the site owner

### 28.2 DNS Plan

- if using a custom domain on Vercel, DNS should be configured according to Vercel domain setup guidance after local testing is complete

### 28.3 SSL

- SSL should be handled by the hosting platform automatically
- no manual certificate management expected

## 29. Operational Maintenance Model

### 29.1 Ongoing Tasks

- publish blog posts
- add/update project entries
- refresh resume and bio periodically
- maintain the active Calendly free consult event and any future inactive stubs
- update dependency versions on a sane cadence
- review broken links and preview deploys before merges

### 29.2 Maintenance Philosophy

- prefer infrequent, deliberate updates over constant tooling churn
- do not add infrastructure unless it removes significant pain

## 30. Future Enhancements

These are explicitly not launch blockers:

- newsletter signup
- site search
- speaking page
- testimonials
- downloadable case studies
- lightweight CMS overlay
- richer analytics

### 30.1 Approved Low-Complexity Distinguishers

These are approved for the next implementation pass because they add personality without materially increasing system complexity:

- compact focus-areas strip on the homepage
- stronger credential panel near the homepage hero, including the headshot
- featured insight quote block on the homepage
- blog reading progress indicator implemented with basic CSS and minimal logic only

## 31. Final Decisions Summary

Locked decisions:

- website type: personal portfolio with writing, projects, and consulting booking
- visual style: polished and corporate
- color direction: teal-led accent system with brass as a minor secondary accent
- booking: simple Calendly embed/link
- booking types: one active free consult event at launch with future consulting stubs preserved for later
- content strategy: many blog posts and a few projects
- maintenance preference: extremely simple
- framework: Next.js App Router with TypeScript
- styling: Tailwind CSS
- content system: local MDX
- hosting: local development first, then Vercel deployment
- package manager: npm
- baseline dependencies excluded: shadcn/ui and Framer Motion
- dark mode excluded from V1
- animation beyond basic CSS excluded from V1
- required asset usage: headshot, skyline image, Statue of Liberty favicon source, and resume PDF from `assets/`

## 32. Sources Used for Version-Sensitive Decisions

- Next.js App Router docs: https://nextjs.org/docs/app
- Next.js MDX guide: https://nextjs.org/docs/pages/guides/mdx
- Tailwind utility-first docs: https://tailwindcss.com/docs/utility-first
- Tailwind responsive design docs: https://tailwindcss.com/docs/breakpoints
- shadcn/ui introduction: https://ui.shadcn.com/docs
- Motion for React docs: https://motion.dev/docs/react
- Vercel pricing: https://vercel.com/pricing
- Calendly pricing: https://calendly.com/pricing
- Calendly embed overview: https://calendly.com/help/embed-options-overview
- Calendly event types overview: https://calendly.com/help/event-types-overview
- Node.js download and releases pages: https://nodejs.org/en/download/current and https://nodejs.org/en/about/previous-releases
