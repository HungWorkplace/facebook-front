"use client";

import { cn } from "@/lib/utils";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface ContentEditableProps {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}

// # Component
export default function ContentEditable({
  className,
  value,
  onChange,
  placeholder,
  autoFocus,
}: ContentEditableProps) {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: cn("", className),
      },
    },
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder,
        emptyEditorClass: "",
      }),
    ],
    content: value,
    onUpdate({ editor }) {
      if (editor.isEmpty) {
        onChange("");
        return;
      }

      onChange(editor.getHTML());
    },
    autofocus: autoFocus,
  });

  return <EditorContent editor={editor} />;
}
