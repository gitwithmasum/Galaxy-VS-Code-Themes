# Publishing Masum Galaxy to the VS Code Marketplace

This repository is prepared for the Visual Studio Code Marketplace. The remaining account-level step must be completed by the publisher account owner because Marketplace publishing requires Microsoft/Azure DevOps authentication.

## 1. Create or confirm the publisher

The extension manifest currently uses:

```json
"publisher": "gitwithmasum"
```

Create a Visual Studio Marketplace publisher with the ID **gitwithmasum**, or change the `publisher` field in `package.json` to the exact publisher ID you create.

Official guide: https://code.visualstudio.com/api/working-with-extensions/publishing-extension

## 2. Install packaging tools

From the repository root:

```bash
npm install
```

## 3. Validate and package locally

```bash
npx vsce ls
npx vsce package
```

The generated file should be similar to:

```text
masum-galaxy-future-code-3.0.0.vsix
```

Install that VSIX locally and test both the normal theme and the animated cockpit before publishing.

## 4. Authenticate and publish

For a manual first publish, follow the current official authentication steps in the VS Code publishing guide, then run:

```bash
npx vsce publish
```

The Marketplace item ID will be:

```text
gitwithmasum.masum-galaxy-future-code
```

provided that the publisher ID remains `gitwithmasum`.

## Authentication note for late 2026

VS Code Marketplace services use Azure DevOps. Microsoft states that global Azure DevOps Personal Access Tokens are retired on **December 1, 2026** and recommends Microsoft Entra ID for secure automated publishing. For any long-term CI publishing workflow, follow the latest official Entra-based publishing guidance rather than building a new permanent workflow around a global PAT.

## 5. After publishing

- Open the Marketplace listing and confirm the icon, description, README, changelog and repository links render correctly.
- Install the extension from the Marketplace in a clean VS Code profile.
- Test `Masum Galaxy: Install Animated Cockpit`.
- Confirm the optional Custom CSS and JS Loader flow is clearly disclosed.
- Bump the SemVer version in `package.json` before every later release.

## Release checklist

- `npm install`
- `npx vsce ls`
- `npx vsce package`
- Install generated VSIX and test
- Confirm normal theme works without Custom CSS
- Confirm animated cockpit install/reload/remove commands work
- Confirm menus, command palette and popups remain readable
- Update `CHANGELOG.md`
- Bump `version`
- Publish with the official current authentication method
