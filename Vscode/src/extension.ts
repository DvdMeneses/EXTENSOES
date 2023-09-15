
import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {

	
	console.log('Congratulations, your extension "davidedavid" is now active!');

	
	let disposable = vscode.commands.registerCommand('davidedavid.helloWorld', () => {
		
		vscode.window.showInformationMessage('iai taniro meu bom!');
	});

	context.subscriptions.push(disposable);
}


