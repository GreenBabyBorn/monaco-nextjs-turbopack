import MonacoEditor from "./MonacoEditor";

export default function Home() {
  return (
    <MonacoEditor
      className="h-screen"
      language={"javascript"}
      value={`const hello = "I love Next.js"`}
    ></MonacoEditor>
  );
}
