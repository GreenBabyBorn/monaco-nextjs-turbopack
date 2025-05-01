"use client";
import * as monaco from "monaco-editor";
import Editor, { Monaco, loader } from "@monaco-editor/react";
import { type ComponentPropsWithRef } from "react";
import { editor } from "monaco-editor";

// Problem with loader.config
loader.config({
  monaco,
  paths: {
    vs: "/_next/static/vs",
  },
});

type MonacoEditorProps = ComponentPropsWithRef<typeof Editor>;

export default function MonacoEditor(props: MonacoEditorProps) {
  const handleEditorDidMount = (
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco,
  ) => {
    monaco.editor.defineTheme("my-theme", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#14141F",
        "editorWidget.background": "#1E1E2E",
        "menu.background": "#1E1E2E",
      },
    });
    monaco.editor.setTheme("my-theme");
  };

  return (
    <Editor
      {...props}
      onMount={handleEditorDidMount}
      options={{
        ...props.options,
        scrollBeyondLastLine: false,
        automaticLayout: true,
        minimap: {
          enabled: false,
        },
      }}
    />
  );
}
