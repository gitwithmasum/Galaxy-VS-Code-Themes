# Support

If the normal color theme has a problem, open a GitHub issue and include:

- VS Code version
- Operating system
- Masum Galaxy extension version
- A screenshot of the affected editor area
- The language/file type you were editing

For animated cockpit issues, also include:

- Custom CSS and JS Loader version
- Whether `Masum Galaxy: Install Animated Cockpit` completed successfully
- Whether `Reload Custom CSS and JS` was run after the most recent VS Code update
- Whether VS Code was started with the permissions required by the loader
- A screenshot of the full VS Code window

## Common fixes

### Theme works but animation is missing

Run **Masum Galaxy: Reload Animated Cockpit**. If that does not work, run **Masum Galaxy: Install Animated Cockpit** again, then restart VS Code.

### VS Code reports that the installation is modified/corrupt

This warning can appear when the optional Custom CSS and JS Loader modifies VS Code's workbench files. The normal Masum Galaxy color theme does not modify VS Code installation files.

### VS Code was updated

VS Code updates can replace the workbench files used by the loader. Re-run **Masum Galaxy: Reload Animated Cockpit** after an update.

### Menus or popups look wrong

First update Masum Galaxy to the latest version, then run **Masum Galaxy: Reload Animated Cockpit**. If the problem remains, open an issue with a screenshot and your VS Code version.
