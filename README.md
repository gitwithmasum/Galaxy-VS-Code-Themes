# MASUM GALAXY // FUTURE CODE — v2 Galaxy Cockpit

A dark robotic VS Code theme by **Masum Billah**, designed for readable long coding sessions with an optional animated galaxy cockpit.

## Galaxy Cockpit
- 8-planet loop: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune
- Each planetary focus lasts 5 seconds; the complete loop is 40 seconds
- Ambient Sun + Moon, stars, nebula haze and faint HUD geometry
- Heavy dark overlay / blur-style rendering keeps code dominant
- Tiny `MASUM BILLAH // GALAXY CORE` signature
- Neon robotic syntax and glowing cursor
- Glass-like editor, sidebar and terminal surfaces

## Install the color theme
1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Run `npm install -g @vscode/vsce` if `vsce` is not installed.
4. Run `vsce package`.
5. In VS Code open **Extensions → ... → Install from VSIX...** and choose the generated `.vsix`.
6. Select **Masum Galaxy // Future Code** from **Preferences: Color Theme**.

## Enable the animated cockpit (optional / experimental)
VS Code's official theme API does not permit animated editor backgrounds. `ui/galaxy.css` is therefore an optional custom-CSS layer and needs a compatible, trusted custom-CSS loader. Point that loader to `ui/galaxy.css`, enable it, then restart/reload VS Code.

> Custom CSS modifies VS Code's workbench outside the official theme API. VS Code may display a modified/corrupt-installation warning after it is enabled, and a VS Code update can require re-enabling it. Keep the normal color theme installed as the safe fallback.

## Performance / focus
If animation ever distracts you, disable only the custom CSS layer. The robotic color theme remains fully usable.

## Project structure
```text
assets/
  galaxy-cockpit.svg
  solar-system.svg
themes/
  masum-galaxy-color-theme.json
ui/
  galaxy.css
package.json
README.md
```

## Author
**Masum Billah** — `gitwithmasum`
