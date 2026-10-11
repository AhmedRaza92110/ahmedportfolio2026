# Ahmed Raza Qadri — Portfolio Website

A bright, responsive, American-style professional portfolio built with Next.js App Router, React, TypeScript, and Lucide icons.

## Features
- Responsive hero, social proof, and professional introduction
- Mobile app, full-stack, and DevOps project portfolio with the provided URLs
- Searchable and filterable project cards
- DevOps delivery-pipeline illustration and technology stack
- Instagram, LinkedIn, and GitHub links
- AWS DOP-C02 and Azure AZ-104 certification learning tracks
- Mobile navigation, reduced-motion support, and SEO metadata

## Run locally

Requirements: Node.js 18.17+ (Node 20 LTS recommended) and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Before publishing
- Confirm all public project URLs are accessible and showcase only projects you are authorized to represent.
- Update the certification section to “Certified” only after earning the relevant credential. The current wording intentionally presents DOP-C02 and AZ-104 as certification tracks rather than claiming credentials that have not been confirmed.
- Confirm follower counts are current before publishing.
- Add a preferred contact email if you want a direct contact option.

## Customize
- Project content and URLs: `app/page.tsx` (`projects` array)
- Social links: constants near the top of `app/page.tsx`
- Design system and responsive styles: `app/globals.css`
