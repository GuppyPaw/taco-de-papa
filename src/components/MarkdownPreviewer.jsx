import { useState } from "react";
import { marked } from "marked";

export default function MarkdownPreviewer() {
  const [input, setInput] = useState("# Hola\n\nEscribe **Markdown** aquí.");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Editor */}
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-96 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 font-mono"
      />

      {/* Preview */}
      <div
        className="w-full h-96 overflow-auto p-3 border rounded-xl bg-white prose"
        dangerouslySetInnerHTML={{ __html: marked(input) }}
      />
    </div>
  );
}
