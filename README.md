# QA Engineer Portfolio (Next.js + TypeScript + Tailwind)

This is a single-page portfolio website for a **QA Engineer / Test Engineer / QA Analyst** built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

It highlights:

- About / hero section with a profile image
- Skills (core QA skills, tools, and ways of working)
- Experience timeline
- Selected QA projects
- Photography gallery with 6 images
- Contact section and social links

## Getting started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000` in your browser.

## Customizing your information

All content for the page lives in `src/app/page.tsx`.

Update the following:

- **Name** and **title** text in the hero/about section
- **Experience** entries under the `experiences` array
- **Projects** under the `projects` array
- **Contact information** (email, location, LinkedIn, GitHub, photography link)

## Adding your photos

1. Create a folder: `public/photos`
2. Add 6 photos, for example:

   - `public/photos/photo1.jpg`
   - `public/photos/photo2.jpg`
   - `public/photos/photo3.jpg`
   - `public/photos/photo4.jpg`
   - `public/photos/photo5.jpg`
   - `public/photos/photo6.jpg`

   Or change the paths in the `photos` array in `src/app/page.tsx`.

3. Add your profile picture:

   - Place a file at `public/profile.jpg`
   - Or change the `src` of the main `Image` component in the hero section.

## Tech stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS

