'use strict';

const vscode = require('vscode');

const IMPORTS_KEY = 'vscode_custom_css.imports';
const LOADER_EXTENSION_ID = 'be5invis.vscode-custom-css';
const LOADER_RELOAD_COMMAND = 'extension.updateCustomCSS';

function cockpitUris(context) {
  return [
    vscode.Uri.joinPath(context.extensionUri, 'ui', 'galaxy.css').toString(),
    vscode.Uri.joinPath(context.extensionUri, 'ui', 'galaxy.js').toString()
  ];
}

function isMasumGalaxyImport(value) {
  if (typeof value !== 'string') return false;
  const normalized = value.toLowerCase();
  const isCockpitFile = normalized.endsWith('/ui/galaxy.css') || normalized.endsWith('/ui/galaxy.js');
  const looksLikeInstalledExtension = normalized.includes('gitwithmasum.masum-galaxy-future-code-');
  const looksLikeSourceRepo = normalized.includes('galaxy-vs-code-themes/ui/galaxy.');
  return isCockpitFile && (looksLikeInstalledExtension || looksLikeSourceRepo);
}

async function writeImports(context, install) {
  const config = vscode.workspace.getConfiguration();
  const current = config.get(IMPORTS_KEY, []);
  const safeCurrent = Array.isArray(current) ? current.filter((item) => typeof item === 'string') : [];
  const withoutOldGalaxyImports = safeCurrent.filter((item) => !isMasumGalaxyImport(item));
  const next = install ? [...withoutOldGalaxyImports, ...cockpitUris(context)] : withoutOldGalaxyImports;
  await config.update(IMPORTS_KEY, next, vscode.ConfigurationTarget.Global);
}

async function ensureLoaderInstalled() {
  if (vscode.extensions.getExtension(LOADER_EXTENSION_ID)) return true;

  const choice = await vscode.window.showInformationMessage(
    'The animated cockpit uses the optional “Custom CSS and JS Loader” extension. The normal Masum Galaxy color theme works without it.',
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

async function installCockpit(context) {
  const ready = await ensureLoaderInstalled();
  if (!ready) return;

  await writeImports(context, true);
  const selection = await vscode.window.showInformationMessage(
    'Masum Galaxy animated cockpit is configured. Reload Custom CSS/JS to apply it.',
    'Reload Custom CSS/JS',
    'Later'
  );

  if (selection === 'Reload Custom CSS/JS') {
    const triggered = await reloadLoader();
    if (!triggered) {
      vscode.window.showWarningMessage('Run “Reload Custom CSS and JS” from the Command Palette. On Windows, VS Code may need Administrator permission.');
    }
  }
}

async function removeCockpit(context) {
  await writeImports(context, false);
  const selection = await vscode.window.showInformationMessage(
    'Masum Galaxy animated cockpit imports were removed. Reload Custom CSS/JS to restore the normal workbench.',
    'Reload Custom CSS/JS',
    'Later'
  );

  if (selection === 'Reload Custom CSS/JS') {
    const triggered = await reloadLoader();
    if (!triggered) {
      vscode.window.showWarningMessage('Run “Reload Custom CSS and JS” from the Command Palette.');
    }
  }
}

async function migrateOldImports(context) {
  const config = vscode.workspace.getConfiguration();
  const current = config.get(IMPORTS_KEY, []);
  if (!Array.isArray(current) || !current.some(isMasumGalaxyImport)) return;

  const desired = cockpitUris(context);
  const hasCurrent = desired.every((uri) => current.includes(uri));
  if (!hasCurrent) await writeImports(context, true);
}

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand('masumGalaxy.installCockpit', () => installCockpit(context)),
    vscode.commands.registerCommand('masumGalaxy.removeCockpit', () => removeCockpit(context)),
    vscode.commands.registerCommand('masumGalaxy.reloadCockpit', async () => {
      const ready = await ensureLoaderInstalled();
      if (!ready) return;
      const triggered = await reloadLoader();
      if (!triggered) {
        vscode.window.showWarningMessage('Run “Reload Custom CSS and JS” from the Command Palette.');
      }
    })
  );

  migrateOldImports(context).catch(() => {});
}

function deactivate() {}

module.exports = { activate, deactivate };
