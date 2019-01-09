import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('extension.helloWorld', () => {
			vscode.window.showInformationMessage('Hello World!');
		})
	)
}

export function deactivate() {}
