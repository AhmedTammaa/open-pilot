
# **Open-Pilot**

Open-Pilot is a VS Code extension designed to bring the power of AI to your development workflow. By leveraging local AI models with [Ollama](https://github.com/jmorganca/ollama), Open-Pilot democratizes AI, promoting open-source values and privacy-first coding assistance.

---

## **Features**

- **AI-Powered Code Suggestions**  
  Get real-time, context-aware code suggestions as you type, powered by locally hosted AI models like CodeLlama or LLaMA 2.

- **Code Explanation**  
  Highlight any piece of code and let Open-Pilot explain what it does in plain English.

- **Refactoring Assistance**  
  Automatically refactor your code for better readability and performance.

- **Customizable Prompts**  
  Tailor AI responses by adjusting prompts to match your specific needs.

---

## **Requirements**

To use Open-Pilot, ensure the following prerequisites are met:

1. **Node.js (v18 or higher)**  
   Install from [Node.js official site](https://nodejs.org/).
2. **Ollama (for AI Model Serving)**  
   Install Ollama by following the instructions in their [GitHub repository](https://github.com/jmorganca/ollama#installation).
3. **Supported AI Models**  
   Download models such as `CodeLlama` or `LLaMA 2` via Ollama:
   ```bash
   ollama pull codellama
   ```

---

## **Extension Settings**

Open-Pilot provides the following customizable settings:

- `openPilot.enable`: Enable or disable the extension.  
- `openPilot.model`: Specify the AI model to use (e.g., `codellama`).  
- `openPilot.apiUrl`: Set the Ollama server's API URL (default: `http://localhost:11411`).  
- `openPilot.maxTokens`: Define the maximum token limit for responses.  

---

## **Usage Instructions**

1. **Start the Ollama Server**  
   Run the following command to start Ollama:  
   ```bash
   ollama serve
   ```

2. **Use Open-Pilot Features**  
   - Highlight code and run the command `Open-Pilot: Explain Code` from the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).  
   - Start typing in your editor to receive AI suggestions.  

---

## **Known Issues**

- **Performance on Large Projects**  
  Response times may be slower for very large files or complex prompts.  
- **Compatibility with Older Node.js Versions**  
  Ensure you're using Node.js v18 or later for optimal performance.

---

## **Contributing**

We welcome contributions from the community! If you’d like to contribute to Open-Pilot, please fork the repository, make your changes, and submit a pull request.  

## **For More Information**

- [Visual Studio Code Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)  
- [Markdown Syntax Reference](https://www.markdownguide.org/basic-syntax/)  
- [Ollama GitHub Repository](https://github.com/jmorganca/ollama)  

The project is initiated on 22nd of Jan, 2025. It is not user-ready yet.
