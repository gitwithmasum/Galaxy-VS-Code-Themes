'use strict';

const vscode = require('vscode');

const IMPORTS_KEY = 'vscode_custom_css.imports';
const LOADER_EXTENSION_ID = 'be5invis.vscode-custom-css';
const LOADER_RELOAD_COMMAND = 'extension.updateCustomCSS';

const MODES = {
  galaxy: {
    label: 'Masum Galaxy // Future Code',
    theme: 'Masum Galaxy // Future Code',
    files: ['ui/galaxy.css', 'ui/galaxy.js']
  },
  cyberCity: {
    label: 'Masum Cyber City // Neon Rain',
    theme: 'Masum Cyber City // Neon Rain',
    files: ['ui/cyber-city.css', 'ui/cyber-city.js']
  },
  aiCore: {
    label: 'Masum AI Core // Neural Engine',
    theme: 'Masum AI Core // Neural Engine',
    files: ['ui/ai-core.css', 'ui/ai-core.js']
  },
  blackHole: {
    label: 'Masum Black Hole // Event Horizon',
    theme: 'Masum Black Hole // Event Horizon',
    files: ['ui/black-hole.css', 'ui/black-hole.js']
  },
  quantumGrid: {
    label: 'Masum Quantum Grid // Q-Core',
    theme: 'Masum Quantum Grid // Q-Core',
    files: ['ui/quantum-grid.css', 'ui/quantum-grid.js']
  },
  marsColony: {
    label: 'Masum Mars Colony // Red Frontier',
    theme: 'Masum Mars Colony // Red Frontier',
    files: ['ui/mars-colony.css', 'ui/mars-colony.js']
  }
};

function modeUris(context, modeKey) {
  return MODES[modeKey].files.map((file) => {
    const [folder, name] = file.split('/');
    return vscode.Uri.joinPath(context.extensionUri, folder, name).toString();
  });
}

function isMasumAnimatedImport(value) {
  if (typeof value !== 'string') return false;
  const normalized = value.toLowerCase();
  const isModeFile = [
    '/ui/galaxy.css',
    '/ui/galaxy.js',
    '/ui/cyber-city.css',
    '/ui/cyber-city.js',
    '/ui/ai-core.css',
    '/ui/ai-core.js',
    '/ui/black-hole.css',
    '/ui/black-hole.js',
    '/ui/quantum-grid.css',
    '/ui/quantum-grid.js',
    '/ui/mars-colony.css',
    '/ui/mars-colony.js'
  ].some((suffix) => normalized.endsWith(suffix));

  const looksLikeInstalledExtension = normalized.includes('gitwithmasum.masum-galaxy-future-code-');
  const looksLikeSourceRepo = normalized.includes('galaxy-vs-code-themes/ui/');
  return isModeFile && (looksLikeInstalledExtension || looksLikeSourceRepo);
}

async function setImports(context, modeKey) {
  const config = vscode.workspace.getConfiguration();
  const current = config.get(IMPORTS_KEY, []);
  const safeCurrent = Array.isArray(current) ? current.filter((item) => typeof item === 'string') : [];
  const withoutMasumModes = safeCurrent.filter((item) => !isMasumAnimatedImport(item));
  const next = modeKey ? [...withoutMasumModes, ...modeUris(context, modeKey)] : withoutMasumModes;
  await config.update(IMPORTS_KEY, next, vscode.ConfigurationTarget.Global);
}

async function ensureLoaderInstalled() {
  if (vscode.extensions.getExtension(LOADER_EXTENSION_ID)) return true;

  const choice = await vscode.window.showInformationMessage(
    'Masum Future Themes animated modes use the optional “Custom CSS and JS Loader” extension. Standard color themes work without it.',
    'Install Loader',
    'Cancel'
  );

  if (choice !== 'Install Loader') return false;

  try {
    await vscode.commands.executeCommand('workbench.extensions.installExtension', LOADER_EXTENSION_ID);
    return true;
  } catch (error) {
    vscode.window.showErrorMessage('Could not install Custom CSS and JS Loader automatically. Search for “Custom CSS and JS Loader” in Extensions and install it manually.');
    return false;
  }
}

async function reloadLoader() {
  try {
    await vscode.commands.executeCommand(LOADER_RELOAD_COMMAND);
    return true;
  } catch (error) {
    return false;
  }
}

async function reloadWindowNow() {
  try {
    await vscode.commands.executeCommand('workbench.action.reloadWindow');
  } catch (error) {
    vscode.window.showWarningMessage('Please reload the VS Code window manually to finish switching animated modes.');
  }
}

async function finishModeSwitch(message) {
  const choice = await vscode.window.showInformationMessage(
    message,
    'Apply & Reload Window',
    'Later'
  );

  if (choice !== 'Apply & Reload Window') return;

  const triggered = await reloadLoader();
  if (!triggered) {
    vscode.window.showWarningMessage('Run “Reload Custom CSS and JS” from the Command Palette, then reload the VS Code window. On Windows, VS Code may need Administrator permission.');
    return;
  }

  await reloadWindowNow();
}

async function enableMode(context, modeKey) {
  const mode = MODES[modeKey];
  if (!mode) return;

  const ready = await ensureLoaderInstalled();
  if (!ready) return;

  await setImports(context, modeKey);
  await vscode.workspace.getConfiguration('workbench').update(
    'colorTheme',
    mode.theme,
    vscode.ConfigurationTarget.Global
  );

  await finishModeSwitch(
    `${mode.label} is selected. Apply Custom CSS/JS and reload the VS Code window to switch the animated background completely.`
  );
}

async function removeAnimatedLayer(context) {
  await setImports(context, null);
  await finishModeSwitch(
    'Masum Future Themes animated imports were removed. Apply the change and reload the VS Code window; the selected color theme will remain active.'
  );
}

async function migrateOldImports(context) {
  const config = vscode.workspace.getConfiguration();
  const current = config.get(IMPORTS_KEY, []);
  if (!Array.isArray(current) || !current.some(isMasumAnimatedImport)) return;

  const normalized = current.filter((item) => typeof item === 'string').map((item) => item.toLowerCase());
  let modeKey = 'galaxy';
  if (normalized.some((item) => item.endsWith('/ui/mars-colony.css') || item.endsWith('/ui/mars-colony.js'))) {
    modeKey = 'marsColony';
  } else if (normalized.some((item) => item.endsWith('/ui/quantum-grid.css') || item.endsWith('/ui/quantum-grid.js'))) {
    modeKey = 'quantumGrid';
  } else if (normalized.some((item) => item.endsWith('/ui/black-hole.css') || item.endsWith('/ui/black-hole.js'))) {
    modeKey = 'blackHole';
  } else if (normalized.some((item) => item.endsWith('/ui/ai-core.css') || item.endsWith('/ui/ai-core.js'))) {
    modeKey = 'aiCore';
  } else if (normalized.some((item) => item.endsWith('/ui/cyber-city.css') || item.endsWith('/ui/cyber-city.js'))) {
    modeKey = 'cyberCity';
  }

  const desired = modeUris(context, modeKey);
  const hasCurrent = desired.every((uri) => current.includes(uri));
  if (!hasCurrent) await setImports(context, modeKey);
}

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand('masumGalaxy.installCockpit', () => enableMode(context, 'galaxy')),
    vscode.commands.registerCommand('masumGalaxy.removeCockpit', () => removeAnimatedLayer(context)),
    vscode.commands.registerCommand('masumGalaxy.reloadCockpit', async () => {
      const ready = await ensureLoaderInstalled();
      if (!ready) return;
      const triggered = await reloadLoader();
      if (!triggered) {
        vscode.window.showWarningMessage('Run “Reload Custom CSS and JS” from the Command Palette.');
        return;
      }
      await reloadWindowNow();
    }),
    vscode.commands.registerCommand('masumFutureThemes.cyberCityMode', () => enableMode(context, 'cyberCity')),
    vscode.commands.registerCommand('masumFutureThemes.aiCoreMode', () => enableMode(context, 'aiCore')),
    vscode.commands.registerCommand('masumFutureThemes.blackHoleMode', () => enableMode(context, 'blackHole')),
    vscode.commands.registerCommand('masumFutureThemes.quantumGridMode', () => enableMode(context, 'quantumGrid')),
    vscode.commands.registerCommand('masumFutureThemes.marsColonyMode', () => enableMode(context, 'marsColony')),
    vscode.commands.registerCommand('masumFutureThemes.galaxyMode', () => enableMode(context, 'galaxy')),
    vscode.commands.registerCommand('masumFutureThemes.disableAnimatedLayer', () => removeAnimatedLayer(context))
  );

  migrateOldImports(context).catch(() => {});
}

function deactivate() {}

module.exports = { activate, deactivate };
