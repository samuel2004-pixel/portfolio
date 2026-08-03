"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bot,
  Send,
  X,
  Sparkles,
  Download,
  MessageCircle,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const quickPrompts = [
  "Introduce yourself",
  "Show your AI projects",
  "Tell me about your internship",
  "What technologies do you know?",
  "Show my resume",
  "How can I contact Samuel?",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `# 👋 Hello!

I'm **Samuel Roshan's AI Portfolio Assistant**.

I can answer questions about:

- 🚀 AI Projects
- 💼 Internship Experience
- 🧠 AI Skills
- 🎓 Education
- 📜 Certifications
- 📄 Resume

Feel free to ask anything!`,
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function sendMessage(customMessage?: string) {
    const message = customMessage ?? input;

    if (!message.trim() || loading) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: message,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply ||
            data.response ||
            data.message ||
            "Sorry, I couldn't generate a response.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Something went wrong while contacting the AI assistant.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating Button */}

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#9A7B53] text-white shadow-2xl transition hover:scale-110 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Window */}

      {open && (
        <div className="fixed bottom-0 right-0 z-50 flex h-[100dvh] w-full flex-col overflow-hidden border border-neutral-200 bg-white shadow-2xl sm:bottom-6 sm:right-6 sm:h-[min(700px,85dvh)] sm:w-[420px] sm:rounded-[30px]">

                    {/* Header */}

          <div className="flex items-center justify-between border-b border-neutral-200 bg-[#F7F5F2] px-6 py-5">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9A7B53] text-white">

                <Bot size={22} />

              </div>

              <div>

                <h3 className="font-semibold text-neutral-900">
                  Samuel AI
                </h3>

                <p className="flex items-center gap-1 text-sm text-green-600">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  Online
                </p>

              </div>

            </div>

            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-2 transition hover:bg-neutral-200"
            >
              <X size={20} />
            </button>

          </div>

          {/* Resume Button */}

          <div className="border-b border-neutral-200 bg-white px-6 py-4">

            <a
              href="/resume/resume.pdf"
              download
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#9A7B53] px-5 py-3 font-medium text-white transition hover:opacity-90"
            >
              <Download size={18} />
              Download Resume
            </a>

          </div>

          {/* Quick Prompts */}

          <div className="border-b border-neutral-200 bg-[#FAFAF8] px-4 py-4">

            <div className="flex gap-2 overflow-x-auto">

              {quickPrompts.map((prompt) => (

                <button
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                  className="whitespace-nowrap rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm transition hover:border-[#9A7B53] hover:bg-[#9A7B53] hover:text-white"
                >
                  {prompt}
                </button>

              ))}

            </div>

          </div>

          {/* Messages */}

          <div
            data-lenis-prevent
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-[#FCFCFB] p-5"
          >
            <div className="space-y-5">


            {messages.map((message, index) => (

              <div
                key={index}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-[90%] rounded-3xl px-5 py-4 text-[15px] leading-7 shadow-sm ${
                    message.role === "assistant"
                      ? "bg-white text-neutral-800"
                      : "bg-[#9A7B53] text-white"
                  }`}
                >

                  {message.role === "assistant" && (

                    <div className="mb-3 flex items-center gap-2 text-[#9A7B53]">

                      <Sparkles size={16} />

                      <span className="text-xs font-semibold uppercase tracking-wider">
                        AI Assistant
                      </span>

                    </div>

                  )}

                  <div className="prose prose-sm max-w-none">

                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {message.content}
                    </ReactMarkdown>

                  </div>

                </div>

              </div>

            ))}

            {loading && (

              <div className="flex justify-start">

                <div className="rounded-3xl bg-white px-5 py-4 shadow-sm">

                  <div className="flex gap-2">

                    <span className="h-2 w-2 animate-bounce rounded-full bg-[#9A7B53]" />

                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-[#9A7B53]"
                      style={{ animationDelay: "0.15s" }}
                    />

                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-[#9A7B53]"
                      style={{ animationDelay: "0.3s" }}
                    />

                  </div>

                </div>

              </div>

            )}

            <div ref={bottomRef} />

            </div>
          </div>

              {/* Input */}

          <div className="border-t border-neutral-200 bg-white p-5">

            <div className="flex items-center gap-3 rounded-2xl border border-neutral-300 px-4 py-3 focus-within:border-[#9A7B53]">

              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Ask Samuel anything..."
                className="flex-1 bg-transparent text-[15px] outline-none placeholder:text-neutral-400"
              />

              <button
                onClick={() => sendMessage()}
                disabled={loading}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#9A7B53] text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send size={18} />
              </button>

            </div>

            <p className="mt-3 text-center text-xs text-neutral-400">
            </p>

          </div>

        </div>
      )}
    </>
  );
}