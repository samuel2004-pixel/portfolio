import { NextRequest, NextResponse } from "next/server";

import { ai } from "@/lib/llm/openaiClient";
import { retrievePortfolioContext } from "@/lib/llm/retriever";
import { buildPrompt } from "@/lib/llm/promptBuilder";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const message = body?.message?.trim();

    if (!message) {
      return NextResponse.json(
        {
          reply: "Please enter a question.",
        },
        {
          status: 400,
        }
      );
    }

    // Retrieve the most relevant portfolio information
    const { context } = retrievePortfolioContext(message);

    // Build the LLM prompt
    const prompt = buildPrompt(context, message);

    // Generate AI response
    const result = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    const reply =
      result.text?.trim() ||
      "I'm sorry, I couldn't generate a response at the moment.";

    return NextResponse.json({
      reply,
    });
  } catch (error) {
    console.error("AI Chat Error:", error);

    return NextResponse.json(
      {
        reply:
          "I'm currently unavailable. Please try again in a few moments.",
      },
      {
        status: 500,
      }
    );
  }
}