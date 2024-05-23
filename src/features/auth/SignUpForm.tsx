"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { FormSchema } from "@/lib/FormSchema";
import RadioField from "./signup/RadioField";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { User } from "@/utils/definitions";
import { url } from "@/utils/urls";
import { CgSpinner } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { FormName } from "./signup/FormName";
import { FormBirth } from "./signup/FormBirth";
import FormCredentials from "./signup/FormCredentials";

type ResponseType = {
  message?: string;
  user?: User;
  token?: string;
  error?: string;
};

// # Component
export default function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [resError, setResError] = useState<undefined | string>();
  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(FormSchema),
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      surname: "",
      email: "",
      password: "",
      birthday: {
        day: 1,
        month: 1,
        year: 2000,
      },
      gender: "male",
    },
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = form;

  const onSubmit = async (values: FormSchema) => {
    console.log(values);
    const data = {
      ...values,
      birthday: new Date(
        values.birthday.year,
        values.birthday.month - 1,
        values.birthday.day,
      ),
    };

    try {
      setIsLoading(true);

      const res = await axios.post<ResponseType>(url.auth.signup, data, {
        withCredentials: true,
      });

      if (res.data.error) {
        setResError(res.data.error);
        return;
      }

      if (res.data.user) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      setResError("An error occurred. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <FormName control={control} errors={errors} />

        <FormCredentials control={control} errors={errors} />

        <FormBirth control={control} errors={errors} />

        {/* Gender */}
        <FormField
          control={control}
          name="gender"
          render={({ field }) => <RadioField field={field} />}
        />

        <p className="text-[0.7rem] text-gray-700">
          People who use our service may have uploaded your contact information
          to Facebook. Learn more.
        </p>
        <p className="text-[0.7rem] text-gray-700">
          By clicking Sign Up, you agree to our Terms, Privacy Policy and
          Cookies Policy. You may receive SMS notifications from us and can opt
          out at any time.
        </p>
        <div className="flex flex-col items-center gap-5 pt-2">
          {resError && <p className="-mb-2 text-red-600">{resError}</p>}

          <Button
            type="submit"
            className="w-1/2 bg-[#119f16] text-lg hover:bg-[#0f8a13]"
          >
            {isLoading ? (
              <CgSpinner size={25} color="white" className="animate-spin" />
            ) : (
              "Sign Up"
            )}
          </Button>

          <Link href="/login" className="text-[#18a4f7]">
            Already have an account?
          </Link>
        </div>
      </form>
    </Form>
  );
}
