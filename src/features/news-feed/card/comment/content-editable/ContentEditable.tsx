"use client";

import { useRef, useState, useEffect } from "react";
import { useDivTextAreaContext } from "./div-text-area";
import { cn } from "@/lib/utils";

interface DivTextAreaProps {
  placeholder?: string;
  className?: string;
  scrollIntoView?: number;
}

// # Component
export function Input({
  placeholder,
  className,
  scrollIntoView,
}: DivTextAreaProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState("");
  const { setIsClicked } = useDivTextAreaContext();

  const handleInput = () => {
    const newContent = contentRef.current?.innerText;
    setContent(newContent || "");
  };

  useEffect(() => {
    if (contentRef.current && !content) {
      contentRef.current.innerText = "";
    }
  }, [content]);

  useEffect(() => {
    if (scrollIntoView && scrollIntoView > 0) {
      contentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      contentRef.current?.focus();
      setIsClicked(true);
    }
  }, [scrollIntoView]);

  return (
    <div className="relative w-full">
      <div
        ref={contentRef}
        contentEditable
        onInput={handleInput}
        onClick={() => setIsClicked(true)}
        className={cn(
          "relative w-full bg-comment-background px-3 py-2 text-sm outline-none",
          className,
        )}
      ></div>
      {content === "" && (
        <div className="pointer-events-none absolute inset-0 px-3 py-2 text-sm text-muted-foreground">
          {placeholder}
        </div>
      )}
    </div>
  );
}

interface ActionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Action({ children, className, ...props }: ActionProps) {
  const { isClicked } = useDivTextAreaContext();

  return (
    <div data-clicked={isClicked} className={className} {...props}>
      {children}
    </div>
  );
}
