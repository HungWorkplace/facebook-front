"use client";

import Image from "next/image";
import logo from "/public/facebook.svg";
import { useState } from "react";
import { cn } from "@/lib/utils";
import LogInForm from "./LoginForm";

interface LoginProps {}

// # Component
export default function Login() {
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <div className="bg-[#f0f2f5]">
      <header
        className={cn("mx-auto max-w-[62.5rem] pb-48 pt-32 max-[905px]:pt-4", {
          "pt-8": isSubmit,
        })}
      >
        <div
          className={cn(
            "flex justify-between gap-12 pr-8 max-[905px]:flex-col  max-[905px]:items-center max-[905px]:px-8",
            { "flex-col items-center gap-0 px-8": isSubmit },
          )}
        >
          {/* Left side*/}
          <div
            className={cn(
              "flex-1 pt-11 max-[905px]:w-[25rem] max-[905px]:pt-0 max-[905px]:text-center",
              { "w-[25rem] pt-0 text-center": isSubmit },
            )}
          >
            <Image
              src={logo}
              alt="Facebook"
              priority
              className={cn("-mb-3 h-24 w-fit max-[905px]:mx-auto", {
                "mx-auto mb-0 h-20": isSubmit,
              })}
            />
            {!isSubmit && (
              <p className="ml-8 text-2xl max-[905px]:mx-2">
                Facebook helps you connect and share with the people in your
                life.
              </p>
            )}
          </div>

          {/* Right side */}
          <div className="rounded-lg bg-white p-4 pb-7 text-center shadow-xl">
            <div className="mb-4 text-lg">Log in to Facebook</div>
            <LogInForm />
            <div className="text-center">
              <a
                href=""
                className="inline-block py-5  text-sm  text-primary hover:underline"
              >
                Forgotten password?
              </a>
            </div>

            {!isSubmit && (
              <div className="border-t pt-7">
                <button className="mx-auto inline-flex h-12 items-center justify-center rounded-md bg-[#42b72a] px-4 font-semibold text-white hover:bg-[#36a420]">
                  Create new account
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-white pb-5 pt-7 font-sans text-xs text-[#8a8d91]">
      <div className="mx-auto max-w-[62.5rem] px-4">
        <ul className="mx-4 space-x-3 border-b pb-3">
          <li className="inline-block pt-px">English (UK)</li>
          <li className="inline-block pt-px">Tiếng Việt</li>
          <li className="inline-block pt-px">中文(台灣)</li>
          <li className="inline-block pt-px">한국어</li>
          <li className="inline-block pt-px">日本語</li>
          <li className="inline-block pt-px">Français (France)</li>
          <li className="inline-block pt-px">ภาษาไทย</li>
          <li className="inline-block pt-px">Español</li>
          <li className="inline-block pt-px">Português (Brasil)</li>
          <li className="inline-block pt-px">Deutsch</li>
          <li className="inline-block pt-px">Italiano</li>
        </ul>
        <ul>
          <li className="ml-4 inline-block pt-1">Sign Up</li>
          <li className="ml-4 inline-block pt-1">Log in</li>
          <li className="ml-4 inline-block pt-1">Messenger</li>
          <li className="ml-4 inline-block pt-1">Facebook Lite</li>
          <li className="ml-4 inline-block pt-1">Video</li>
          <li className="ml-4 inline-block pt-1">Places</li>
          <li className="ml-4 inline-block pt-1">Games</li>
          <li className="ml-4 inline-block pt-1">Marketplace</li>
          <li className="ml-4 inline-block pt-1">Meta Pay</li>
          <li className="ml-4 inline-block pt-1">Meta Store</li>
          <li className="ml-4 inline-block pt-1">Meta Quest</li>
          <li className="ml-4 inline-block pt-1">Meta AI</li>
          <li className="ml-4 inline-block pt-1">Instagram</li>
          <li className="ml-4 inline-block pt-1">Threads</li>
          <li className="ml-4 inline-block pt-1">Fundraisers</li>
          <li className="ml-4 inline-block pt-1">Services</li>
          <li className="ml-4 inline-block pt-1">Voting Information Centre</li>
          <li className="ml-4 inline-block pt-1">Privacy Policy</li>
          <li className="ml-4 inline-block pt-1">Privacy Centre</li>
          <li className="ml-4 inline-block pt-1">Groups</li>
          <li className="ml-4 inline-block pt-1">About</li>
          <li className="ml-4 inline-block pt-1">Create ad</li>
          <li className="ml-4 inline-block pt-1">Create Page</li>
          <li className="ml-4 inline-block pt-1">Developers</li>
          <li className="ml-4 inline-block pt-1">Careers</li>
          <li className="ml-4 inline-block pt-1">Cookies</li>
          <li className="ml-4 inline-block pt-1">AdChoices</li>
          <li className="ml-4 inline-block pt-1">Terms</li>
          <li className="ml-4 inline-block pt-1">Help</li>
          <li className="ml-4 inline-block pt-1">
            Contact uploading and non-usersSettings
          </li>
        </ul>
        <p className="ml-4 mt-5">Meta © 2024</p>
      </div>
    </footer>
  );
}
