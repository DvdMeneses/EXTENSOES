"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    console.log('Congratulations, your extension "davidedavid" is now active!');
    let disposable = vscode.commands.registerCommand('davidedavid.helloWorld', () => {
        vscode.window.showInformationMessage('iai taniro meu bom!');
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map