# Sachin Kumar — Portfolio

Plain HTML/CSS/JS personal portfolio. No Node, no npm, no build step. React and Babel are loaded from a CDN in the browser.

## Files

```
index.html      page shell, loads React/Babel from CDN and app.jsx
data.js         all content — edit this to update the site
app.jsx         all React components (JSX, compiled in-browser by Babel)
styles.css      styling and animations
robots.txt      SEO
resources/      resume PDF, profile photo, project screenshots, certificates
```

## Editing content

Open `data.js` in any text editor and change the values. Save, refresh the browser — no build step.

## Adding files

Put files in the matching `resources/` subfolder, then reference the path (relative to the site root) in `data.js`:

- `resources/resume/` — your resume PDF (`profile.resumePath`)
- `resources/images/` — your profile photo (`profile.photoPath`) and other images
- `resources/projects/` — project screenshots (`project.image`)
- `resources/certificates/` — certificates linked to a project (`project.certificatePath`)
- `resources/notes/` — student resource files (short notes, PDFs, resume templates, etc.)

Project demo videos and resource videos use a normal YouTube link (`project.videoUrl` / `resource.videoUrl`) — no file upload needed.

### Student Resources section

Edit the `resources` array in `data.js`. Each entry needs a `title`, `category` (e.g. "DSA", "Java", "Spring Boot"), and a `type` — this is free text, so use whatever label fits ("Short Note", "Video", "PDF", "Resume Template", "Other", ...). Set `videoUrl` for a video entry, or `filePath` (pointing into `resources/notes/`) for anything downloadable.

## Running locally

Any static file server works, e.g.:

```
npx serve .
```

Or just open `index.html` directly in a browser (some browsers restrict local `fetch`, but this site doesn't use any).

## Deployment (GitHub Pages, free)

1. Push this repo to GitHub.
2. Go to the repo's **Settings → Pages**.
3. Under "Build and deployment", set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Save. The site publishes at `https://<username>.github.io/<repo-name>/`.

To update the live site: edit `data.js` (and/or add files to `resources/`), commit, push. GitHub Pages redeploys automatically — no build step runs.
