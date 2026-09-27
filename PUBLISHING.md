# Publishing Masum Galaxy to the VS Code Marketplace

This repository is prepared for the Visual Studio Code Marketplace. The only steps that still require the publisher account owner are creating/confirming the Marketplace publisher and authorizing the repository for trusted publishing.

## 1. Create or confirm the publisher

The extension manifest currently uses:

```json
"publisher": "gitwithmasum"
```

Create a Visual Studio Marketplace publisher with the ID **gitwithmasum**, or change the `publisher` field in `package.json` to the exact publisher ID you create.

Official guide: https://code.visualstudio.com/api/working-with-extensions/publishing-extension

## 2. Use Node.js 22 or newer

The repository uses `@vscode/vsce` 4.x, whose current requirement is Node.js 22 or newer.

Check with:

```bash
node --version
```

## 3. Install dependencies and validate

From the repository root:

```bash
npm install
npx vsce ls
npx vsce package
```

The generated file should be similar to:

```text
masum-galaxy-future-code-3.0.0.vsix
```

Install the VSIX locally and test both the normal theme and the optional animated cockpit before publishing.

## 4. Recommended publishing setup: trusted publishing with OIDC

This repository includes:

```text
.github/workflows/publish-marketplace.yml
```

It publishes with:

```bash
npx @vscode/vsce publish --oidc
```

and requests GitHub's short-lived OIDC token instead of storing a Marketplace PAT in repository secrets.

Before running the workflow, configure a **trusted publishing policy** for this repository/workflow in the Visual Studio Marketplace publisher settings. After that, open the GitHub repository's **Actions** tab, select **Publish to VS Code Marketplace**, and run the workflow manually.

This is the preferred long-term setup because Microsoft is moving away from global Azure DevOps PAT-based publishing.

## 5. Manual publishing fallback

For a manual first publish, follow the current official VS Code publishing authentication instructions, then run:

```bash
npx vsce publish
```

The Marketplace item ID will be:

```text
gitwithmasum.masum-galaxy-future-code
```

provided that the publisher ID remains `gitwithmasum`.

## 6. Package-only GitHub workflow

The repository also includes:

```text
.github/workflows/package-vsix.yml
```

Run it manually, or push a `v*` tag, to create a downloadable VSIX artifact without publishing anything to the Marketplace.

## 7. Release checklist

- Confirm Node.js 22+
- `npm install`
- `npx vsce ls`
- `npx vsce package`
- Install generated VSIX and test
- Confirm normal theme works without Custom CSS
- Confirm animated cockpit install/reload/remove commands work
- Confirm menus, Command Palette, tooltips and popups remain readable
- Update `CHANGELOG.md`
- Bump the SemVer `version` in `package.json`
- Run the OIDC Marketplace publish workflow
- Install the Marketplace version in a clean VS Code profile

## Important Marketplace packaging note

The repository contains SVG design assets for development/reference, but `.vscodeignore` excludes `assets/**` from the published VSIX. The Marketplace package uses the PNG icon at `images/icon.png` and the cockpit animation is embedded in `ui/galaxy.js`.
