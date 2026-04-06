# georgesono21.github.io

Static portfolio site for GitHub Pages.

## Stack

- Plain `index.html`, `styles.css`, and `app.js`
- Vendored `@chenglou/pretext@0.0.4` browser module in `vendor/pretext`
- No build step required

## Local Preview

Run a simple static server from the repo root:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## GitHub Pages

This repository is already named `georgesono21.github.io`, so GitHub Pages can publish it directly from the root of the default branch.

1. Push the contents of this repo to your default branch.
2. In GitHub, open `Settings` -> `Pages`.
3. Set the source to `Deploy from a branch`.
4. Choose your default branch and the `/ (root)` folder.
5. Save. GitHub Pages will serve the site without any build pipeline.
