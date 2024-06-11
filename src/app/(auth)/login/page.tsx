import Image from "next/image";
import logo from "/public/facebook-text.svg";
import LoginForm from "@/features/auth/LoginForm";
import Link from "next/link";
import { cn } from "@/lib/utils";

// # Component
export default function LoginPage() {
  return (
    <header className="mx-auto max-w-[62.5rem] pb-48 pt-4 900:pt-32">
      <div
        className={cn(
          "flex flex-col items-center gap-12",
          "900:flex-row 900:items-start 900:justify-between",
        )}
      >
        {/* Logo, description*/}
        <div className="w-full">
          <div className="mx-auto w-[25rem] pt-0 text-center 900:w-auto 900:pt-11">
            <Image
              src={logo}
              alt="Facebook"
              priority
              className="mx-auto -mb-3 h-24 w-72"
            />

            <p className="mx-2 text-2xl 900:ml-8">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>
        </div>

        {/* Login Form */}
        <div className="w-full">
          <div className="mx-auto w-full max-w-96 rounded-lg bg-white p-4 pb-7 text-center shadow-xl">
            <div className="mb-4 text-lg">Log in to Facebook</div>

            <LoginForm className="" />

            {/* <div className="text-center">
              <a
                href=""
                className="inline-block py-5  text-sm  text-primary hover:underline"
              >
                Forgotten password?
              </a>
            </div> */}

            <div className="border-t pt-7">
              <Link
                href={"/signup"}
                className="mx-auto inline-flex h-12 items-center justify-center rounded-md bg-[#42b72a] px-4 font-semibold text-white hover:bg-[#36a420]"
              >
                Create new account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
