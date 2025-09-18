// =======================================================================
// FILE: /components/tiptapEditor.tsx (Aesthetic Update)
// =======================================================================
// INSTRUCTIONS: This updated version includes improved styling for a more
// interactive and aesthetic user experience.

"use client";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaHeading,
  FaListOl,
  FaListUl,
  FaQuoteLeft,
  FaRedo,
  FaUndo,
} from "react-icons/fa";

// --- Reusable Toolbar Button Component ---
const ToolbarButton = ({
  onClick,
  isActive,
  children,
}: {
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    type="button"
    className={`p-2 rounded-lg transition-colors duration-200 ${
      isActive
        ? "bg-sky-100 text-sky-600"
        : "bg-transparent hover:bg-gray-200"
    }`}
  >
    {children}
  </button>
);

// --- The Toolbar for the editor ---
const Toolbar = ({ editor }: { editor: Editor | null }) => {
  // We use a simple state to force the component to re-render on editor updates.
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  React.useEffect(() => {
    if (!editor) {
      return;
    }

 
    const handleUpdate = () => {
      forceUpdate();
    };

    editor.on("transaction", handleUpdate);

    return () => {
      editor.off("transaction", handleUpdate);
    };
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="p-2 border-b border-gray-300 bg-gray-50 flex flex-wrap items-center gap-1">
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive("bold")}
      >
        <FaBold />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive("italic")}
      >
        <FaItalic />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isActive={editor.isActive("strike")}
      >
        <FaStrikethrough />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        isActive={editor.isActive("heading", { level: 2 })}
      >
        <FaHeading />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive("bulletList")}
      >
        <FaListUl />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive("orderedList")}
      >
        <FaListOl />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive("blockquote")}
      >
        <FaQuoteLeft />
      </ToolbarButton>
      <div className="h-6 w-px bg-gray-300 mx-2"></div>
      <ToolbarButton onClick={() => editor.chain().focus().undo().run()} isActive={false}>
        <FaUndo />
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().redo().run()} isActive={false}>
        <FaRedo />
      </ToolbarButton>
    </div>
  );
};

// --- The Main Tiptap Editor Component ---
const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Insert the abstract..</p>",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "prose dark:prose-invert max-w-none p-4 focus:outline-none min-h-[150px]",
      },
    },
  });

  return (
    <div className="border border-gray-300 rounded-lg shadow-sm bg-white">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
