import Image from "next/image";
import logo from "/public/facebook.svg";
import SignUpForm from "@/features/auth/SignUpForm";
import Test2 from "@/components/Test2";

// # Component
export default function SignUpPage() {
  return (
    <div className="mb-14">
      <Image
        src={logo}
        alt="Facebook"
        priority
        className="mx-auto h-24 w-fit"
      />

      <div className="mx-auto w-[27rem] rounded-lg bg-white shadow-lg">
        <header className="border-b p-4 text-center">
          <h1 className="text-2xl font-medium">Create a new account</h1>
          <p className="text-sm text-gray-700">It's quick and easy.</p>
        </header>

        <main className="p-4">
          <SignUpForm />
        </main>

        <Test2 />
      </div>
    </div>
  );
}
