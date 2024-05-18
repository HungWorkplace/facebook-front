import Image from "next/image";
import logo from "/public/facebook.svg";
import LoginForm from "@/features/auth/LoginForm";
import Link from "next/link";

// # Component
export default function LoginPage() {
  return (
    <header className="mx-auto max-w-[62.5rem] pb-48 pt-32 max-[905px]:pt-4">
      <div className="flex justify-between gap-12 pr-8 max-[905px]:flex-col  max-[905px]:items-center max-[905px]:px-8">
        {/* Left side*/}
        <div className="flex-1 pt-11 max-[905px]:w-[25rem] max-[905px]:pt-0 max-[905px]:text-center">
          <Image
            src={logo}
            alt="Facebook"
            priority
            className="-mb-3 h-24 w-fit max-[905px]:mx-auto"
          />

          <p className="ml-8 text-2xl max-[905px]:mx-2">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        {/* Right side */}
        <div className="rounded-lg bg-white p-4 pb-7 text-center shadow-xl">
          <div className="mb-4 text-lg">Log in to Facebook</div>
          <LoginForm />
          <div className="text-center">
            <a
              href=""
              className="inline-block py-5  text-sm  text-primary hover:underline"
            >
              Forgotten password?
            </a>
          </div>

          <div className="border-t pt-7">
            <Link
              href={"/auth/signup"}
              className="mx-auto inline-flex h-12 items-center justify-center rounded-md bg-[#42b72a] px-4 font-semibold text-white hover:bg-[#36a420]"
            >
              Create new account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
