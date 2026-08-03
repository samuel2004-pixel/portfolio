import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/services/emailService";

export async function POST(
  req: NextRequest
) {
  try {
    const {
      name,
      email,
      subject,
      message,
    } = await req.json();

    await sendEmail(
      name,
      email,
      subject,
      message
    );

    return NextResponse.json({
      success: true,
      message:
        "Message sent successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to send message",
      },
      {
        status: 500,
      }
    );
  }
}