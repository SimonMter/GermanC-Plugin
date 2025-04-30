const vscode = require('vscode');

function activate(context) {
    vscode.workspace.onDidChangeTextDocument(event => {
        const editor = vscode.window.activatedTextEditor;
        if(!editor) return;

        const diagnostics = [];

        const text = editor.document.getText();
        if(!text.includes('haupt')){
            diagnostics.push(new vscode.Diagnostic(
                new vscode.Range(0,0,0,5),
                "Fehlende 'haupt' in der Datei",
                vscode.DiagnosticSeverity.Error
            ));
        }

        const diagnosticCollection = vscode.languages.createDiagnosticCollection('germanc');
        diagnosticCollection.set(editor.document.uri, diagnostics);
        
    });
}

function deactivate() {}

module.exports = { activate, deactivate };