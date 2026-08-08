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

### First-time setup

1. **Make sure you're pushing as your own GitHub account.** Check identity:
   ```
   git config --global user.name
   git config --global user.email
   ```
   If it shows someone else's name, set your own:
   ```
   git config --global user.name "Sachin Kumar"
   git config --global user.email "sachinnayak7017@gmail.com"
   ```

2. **Generate a Personal Access Token** (GitHub no longer accepts your account password over the command line):
   - GitHub → profile photo (top right) → **Settings**
   - Left sidebar, bottom → **Developer settings**
   - **Personal access tokens → Tokens (classic) → Generate new token (classic)**
   - Give it a name, set an expiry, tick the **repo** scope, click **Generate token**
   - Copy the token immediately (it's shown only once)

3. **Push the repo:**
   ```
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
   When prompted:
   - Username: your GitHub username
   - Password: paste the **token** (not your GitHub password)

4. **Turn on GitHub Pages:**
   - Go to the repo on GitHub → **Settings → Pages**
   - Under "Build and deployment", set Source to **Deploy from a branch**
   - Branch: `main`, folder: `/ (root)` → **Save**
   - Wait about a minute — the site publishes at `https://<username>.github.io/<repo-name>/`

### Updating the live site (every time after)

No separate "redeploy" step exists — pushing to `main` **is** the redeploy.

```
git add -A
git commit -m "describe what changed"
git push
```

GitHub Pages picks up the push automatically and rebuilds the live site (usually live within a minute — no build step runs, since this is a static site). Refresh the live URL to see your change.
