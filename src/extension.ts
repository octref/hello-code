import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.helloWorld', () => {
      const diags = vscode.languages.getDiagnostics(vscode.window.activeTextEditor.document.uri)
      console.log(JSON.stringify(diags, null, 2))
    })
  )
}

export function deactivate() {}
