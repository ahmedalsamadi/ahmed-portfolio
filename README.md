# Personal Portfolio Website

A professional, modern, and responsive personal portfolio website built with HTML5, CSS3, and JavaScript.

## Features

- Space-themed animated background with interactive stars
- Smooth scrolling and section reveal animations
- Responsive layout for desktop, tablet, and mobile
- Accessible navigation, form labels, and keyboard focus styles
- Dedicated sections for About, Skills, Projects, Education, and Contact
- Placeholder content ready for customization and deployment

## Project Structure

```text
my porfolio/
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── profile.png
└── README.md
```

## Customize Content

Update these values in `index.html`:

- Replace `Your Name` and profile text in About/Hero sections
- Add your real project titles, descriptions, and links
- Update education details and achievements
- Add your real email, LinkedIn, and GitHub links

## Run Locally

This is a static website, so you can run it directly:

1. Open `index.html` in your browser.

For better local development, use a simple static server:

- Python:
  - `python -m http.server 5500`
- Node (if installed):
  - `npx serve`

Then open the shown localhost URL.

## Deployment Options

### GitHub Pages

1. Create a new GitHub repository.
2. Upload all files.
3. In repository settings, enable GitHub Pages from the main branch root.
4. Your site will be available at:
   - `https://your-username.github.io/repository-name/`

### Netlify

1. Create a Netlify account.
2. Drag and drop the project folder in Netlify Deploy.
3. Netlify provides a live URL instantly.

### Vercel

1. Create/import the repository in Vercel.
2. Keep framework as "Other" (static).
3. Deploy and use the generated URL.

## Accessibility and Performance Notes

- Semantic HTML landmarks (`header`, `main`, `section`, `footer`)
- Skip link for keyboard/screen-reader users
- High contrast text and visible focus styles
- Motion-reduction support via `prefers-reduced-motion`
- Lightweight, dependency-free static setup for fast loading
