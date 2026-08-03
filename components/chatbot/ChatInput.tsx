"use client";

import { useState } from "react";

type Props = {
  onSend: (message: string) => void;
};

export default function ChatInput({ onSend }: Props) {
  const [message, setMessage] = useState("");

  function send() {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  }

  return (
    <div className="flex gap-2 mt-4">
      <input
        type="text"
        value={message}
        placeholder="Ask me anything..."
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") send();
        }}
        className="flex-1 rounded-xl border border-cyan-500 bg-zinc-900 text-white placeholder-gray-400 p-3 outline-none focus:ring-2 focus:ring-cyan-500"
      />

      <button
        onClick={send}
        className="rounded-xl bg-cyan-500 px-6 text-white font-semibold hover:bg-cyan-600 transition"
      >
        Send
      </button>
    </div>
  );
}