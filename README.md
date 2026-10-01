# Masum Galaxy // Future Code

<p align="center">
  <img src="images/marketplace-hero.jpg" alt="Masum Galaxy // Future Code — futuristic galaxy cockpit banner" width="100%">
</p>

**Futuristic robotic coding. Galaxy atmosphere. Cyber City neon rain. Code stays in focus.**

**Marketplace** · **Free** · **MIT** · **Optional Animated Modes**

A futuristic VS Code theme collection by **Masum Billah**. Version 3.1 introduces a second complete mode: **Masum Cyber City // Neon Rain**, alongside the original Galaxy cockpit.

> **Marketplace:** [Install Masum Galaxy // Future Code](https://marketplace.visualstudio.com/items?itemName=gitwithmasum.masum-galaxy-future-code)

## Available modes

### Masum Galaxy // Future Code

- Robotic cyan/violet syntax
- 8 animated planets with 5-second scenes
- Sun, Moon, nebula drift, stars and orbit lines
- Glass cockpit UI and HUD scan effects
- Subtle `MASUM BILLAH // GALAXY CORE` signature

### Masum Cyber City // Neon Rain

- Futuristic neon megacity skyline
- Animated cyan/purple rain
- Hologram signage and light traffic
- Slow fog drift and HUD scanner
- Cyberpunk pink/cyan syntax palette
- Subtle `MASUM BILLAH // NIGHT CITY CORE` signature

Both animated modes are deliberately dimmed so the code remains visually dominant.

## Quick install

1. Open **Extensions** with `Ctrl+Shift+X`.
2. Search for **Masum Galaxy // Future Code**.
3. Click **Install**.
4. Open the Command Palette with `Ctrl+Shift+P`.
5. Select either **Masum Galaxy // Future Code** or **Masum Cyber City // Neon Rain** from **Preferences: Color Theme**.

The normal color themes work immediately through the standard VS Code theme API.

## Animated mode commands

The animated workbench layer is optional because VS Code's official theme API does not support arbitrary animated workbench backgrounds.

```text
Masum Future Themes: Cyber City Mode
Masum Future Themes: Galaxy Mode
Masum Future Themes: Disable Animated Layer

Masum Galaxy: Install Animated Cockpit
Masum Galaxy: Reload Animated Cockpit
Masum Galaxy: Remove Animated Cockpit
```

### Enable Cyber City

1. Open `Ctrl+Shift+P`.
2. Run **Masum Future Themes: Cyber City Mode**.
3. Install **Custom CSS and JS Loader** if prompted.
4. Choose **Reload Custom CSS/JS**.
5. Restart VS Code if requested.

The command automatically switches the color theme to **Masum Cyber City // Neon Rain** and replaces the Galaxy animated imports, so the two modes do not stack.

### Switch back to Galaxy

Run:

```text
Masum Future Themes: Galaxy Mode
```

Then reload Custom CSS/JS when prompted.

## Important note about animated layers

Animated modes use `be5invis.vscode-custom-css`, which modifies VS Code workbench files outside the official extension styling API. VS Code may therefore show a modified/corrupt-installation warning, and after a VS Code update the animated layer may need to be reloaded.

The standard color themes are unaffected and can be used without the custom animated layer.

On Windows, Custom CSS and JS Loader may require VS Code to run with Administrator permission while applying or removing workbench modifications.

## Focus and performance

If you want the normal VS Code workbench while keeping the selected Masum color theme, run:

```text
Masum Future Themes: Disable Animated Layer
```

## Local development

```bash
npm install
npm run package
```

On Windows PowerShell systems that block `npm.ps1`, use:

```powershell
npm.cmd install
npx.cmd vsce package
```

The command produces a `.vsix` package that can be installed through **Extensions → ... → Install from VSIX...**.

## Support

For visual bugs, installation problems or feature requests, use the [GitHub issue tracker](https://github.com/gitwithmasum/Galaxy-VS-Code-Themes/issues). See [SUPPORT.md](SUPPORT.md) for the information that helps diagnose rendering problems quickly.

## Links

- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=gitwithmasum.masum-galaxy-future-code)
- [GitHub Repository](https://github.com/gitwithmasum/Galaxy-VS-Code-Themes)
- [Issue Tracker](https://github.com/gitwithmasum/Galaxy-VS-Code-Themes/issues)

## License

MIT License.

## Author

**Masum Billah** — [gitwithmasum](https://github.com/gitwithmasum)
