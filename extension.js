const vscode = require('vscode');
function activate(context) {
  console.log('vscode-color-preview activated');
  let disposable = vscode.commands.registerCommand('vscode-color-preview.hello', () => {
    vscode.window.showInformationMessage('vscode-color-preview is ready!');
  });
  context.subscriptions.push(disposable);
}
function deactivate() {}
module.exports = { activate, deactivate };
