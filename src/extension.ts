import * as vscode from 'vscode';

// Basic fetch-based call to local Ollama server
async function queryOllama(prompt: string): Promise<string> {
    // Adjust URL, model name, and request body according to your Ollama setup
    const response = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: "deepseek-r1:7b",
            prompt: prompt,
            stream: false  // Ensure streaming is disabled for a single response
        })
    });

    if (!response.ok) {
        throw new Error(`Ollama API error: ${response.statusText}`);
    }

    // The Ollama API can stream responses as JSON lines, but for simplicity:
    const data = await response.text();

    // Depending on how Ollama is configured, you might get the entire text,
    // or need to parse line by line. For demonstration, assume we have
    // the entire text in 'data' or parse JSON if needed.
    return data;
}

export function activate(context: vscode.ExtensionContext) {
    // Register our "Ask Ollama" command
    let disposable = vscode.commands.registerCommand('ollamaCopilot.ask', async () => {
        try {
            // Get the active editor
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showErrorMessage("No active editor to read from.");
                return;
            }

            // Either use the selected text or the entire document as context
            const selection = editor.selection;
            const selectedText = editor.document.getText(selection)
                || editor.document.getText();

            // Prompt to Ollama
            vscode.window.showInformationMessage("Querying Ollama...");

            // For demonstration, prepend some instructions for code completion
            const prompt = `You are an AI developer assistant. Provide code suggestions or explanations.\n\nContext:\n${selectedText}\n\nAnswer:\n`;

            const result = await queryOllama(prompt);

            // Insert or show the response
            // Option 1: Insert at cursor
            editor.edit(editBuilder => {
                editBuilder.insert(selection.end, `\n${result}\n`);
            });

            // Option 2: Show in a separate window
            // vscode.window.showInformationMessage(result);
        }
        catch (err: any) {
            vscode.window.showErrorMessage(`Ollama request failed: ${err.message}`);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
