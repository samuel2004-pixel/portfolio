type Props = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatMessage({ role, content }: Props) {
  return (
    <div
      className={`p-3 rounded-xl max-w-[80%] whitespace-pre-wrap ${
        role === "user"
          ? "bg-cyan-500 text-white ml-auto"
          : "bg-zinc-800  text-white mr-auto"
      }`}
    >
      {content}
    </div>
  );
}