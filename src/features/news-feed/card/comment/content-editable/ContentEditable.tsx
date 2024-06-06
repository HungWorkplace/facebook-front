"use client";

import { useRef, useState, useEffect } from "react";
import { useDivTextAreaContext } from "./div-text-area";
import { cn } from "@/lib/utils";

interface DivTextAreaProps {
  placeholder?: string;
  className?: string;
  scrollIntoView?: number;
  inputValue?: string;
  setInputValue?: (value: string) => void;
  onEnter?: () => void;
}

// # Component
export function Input({
  placeholder,
  className,
  scrollIntoView,
  inputValue = "",
  setInputValue = () => {},
  onEnter,
}: DivTextAreaProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { setIsClicked } = useDivTextAreaContext();
  const [openPlaceholder, setOpenPlaceholder] = useState(true);

  // When the state props changed, conversely update the input and placeholder
  // Move the cursor to the end of the input because we assign the value prop to the innerText
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerText = inputValue;
      setOpenPlaceholder(inputValue === "");

      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(contentRef.current);
      range.collapse(false);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }, [inputValue]);

  // Scroll to the input when the user clicks on the input
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

  // Event handler: onInput
  const handleInput = () => {
    const newContent = contentRef.current?.innerText;
    if (newContent !== undefined) {
      setInputValue(newContent);
      setOpenPlaceholder(newContent === "");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onEnter && onEnter();
    }
  };

  return (
    <div className="relative w-full">
      <div
        ref={contentRef}
        contentEditable
        onInput={handleInput}
        onClick={() => setIsClicked(true)}
        onKeyDown={handleKeyDown}
        className={cn(
          "relative w-full bg-comment-background px-3 py-2 text-sm outline-none",
          className,
        )}
      ></div>
      {openPlaceholder && (
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
