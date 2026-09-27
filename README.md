# Masum Galaxy // Future Code

![Masum Galaxy icon](images/icon.png)

A futuristic robotic dark theme for Visual Studio Code by **Masum Billah**. The core theme is a normal VS Code color theme; the optional **Galaxy Cockpit** adds an animated solar-system background, HUD effects, glass panels and robotic glow.

## Highlights

- Neon cyan / violet robotic syntax tuned for dark environments
- Animated 8-planet loop: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune
- Each planet scene lasts about 5 seconds
- Ambient Sun, Moon, stars, nebula drift, orbit lines and HUD scan effects
- Glass-style sidebar / panel treatment
- Futuristic active-line and cursor glow
- Tiny `MASUM BILLAH // GALAXY CORE` signature
- The animated layer can be removed without removing the normal theme

## Install from VS Code Marketplace

1. Open **Extensions** with `Ctrl+Shift+X`.
2. Search for **Masum Galaxy // Future Code**.
3. Install it.
4. Open the Command Palette with `Ctrl+Shift+P`.
5. Run **Preferences: Color Theme** and choose **Masum Galaxy // Future Code**.

The normal theme works immediately and uses only the standard VS Code theme API.

## Enable the animated Galaxy Cockpit

The animated background is optional because VS Code's official theme API does not support arbitrary animated workbench backgrounds.

1. Open the Command Palette.
2. Run **Masum Galaxy: Install Animated Cockpit**.
3. If **Custom CSS and JS Loader** is not installed, Masum Galaxy will offer to install it.
4. Choose **Reload Custom CSS/JS** when prompted.
5. Restart VS Code if requested.

On Windows, the Custom CSS and JS Loader may require VS Code to run with Administrator permission when applying or removing its workbench modification.

> **Important:** the optional cockpit uses `be5invis.vscode-custom-css`, which modifies VS Code workbench files outside the official extension styling API. VS Code can therefore show a modified/corrupt-installation warning, and after a VS Code update the cockpit may need to be reloaded. The normal Masum Galaxy color theme is unaffected.

## Commands

- `Masum Galaxy: Install Animated Cockpit`
- `Masum Galaxy: Reload Animated Cockpit`
- `Masum Galaxy: Remove Animated Cockpit`

## Performance and focus

The cockpit is intentionally dimmed so code stays dominant. If you prefer maximum focus or lower GPU usage, run **Masum Galaxy: Remove Animated Cockpit**. The color theme remains installed.

## Local development

```bash
npm install
npm run package
```

This produces a `.vsix` package that can be installed from **Extensions → ... → Install from VSIX...**.

## Project structure

```text
images/
  icon.png
themes/
  masum-galaxy-color-theme.json
ui/
  galaxy.css
  galaxy.js
extension.js
package.json
README.md
CHANGELOG.md
SUPPORT.md
LICENSE
```

## Support

Use the repository issue tracker for bugs and feature requests. See [SUPPORT.md](SUPPORT.md) for the information that helps diagnose visual problems.

## License

MIT License.

## Author

**Masum Billah** — `gitwithmasum`
