"use client";

import { cn } from "@/lib/utils";
import { PiWarningFill } from "react-icons/pi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface InputFieldType {
  type: string;
  autoFocus?: boolean;
  placeholder: string;
  error: string[] | undefined;
  className?: string;
}

export function InputField({
  type,
  error,
  placeholder,
  autoFocus = false,
  className,
}: InputFieldType) {
  const [isShowedPwd, setIsShowedPwd] = useState(false);

  return (
    <div className={className}>
      <div className="relative">
        <input
          type={
            type === "password" ? (isShowedPwd ? "text" : "password") : type
          }
          name={type}
          autoFocus={autoFocus}
          placeholder={placeholder}
          className={cn(
            "h-10 w-full rounded-md border px-4 py-6 text-base outline-none placeholder:text-black/60 focus:border-primary",
            { "border-red-500 focus:border-red-500": error },
          )}
        />

        <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1">
          {type === "password" && (
            <FontAwesomeIcon
              icon={isShowedPwd ? faEyeSlash : faEye}
              onClick={() => setIsShowedPwd(!isShowedPwd)}
              className="cursor-pointer text-secondary-foreground"
            />
          )}
          {error && <PiWarningFill className="text-red-500" size={22} />}
        </div>
      </div>

      {error && (
        <div className="mt-1">
          {error.map((message, i) => (
            <p key={i} className="text-left font-roboto text-sm text-red-600">
              {message}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
