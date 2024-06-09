"use client";

import * as ErrorLayout from "@/components/layouts/ErrorLayout";
import { Button } from "@/components/ui/custom/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <ErrorLayout.Root
          src="/lock-not-found.svg"
          alt="lock 404 image"
          title={error.name}
          message={error.message}
        >
          <Button
            onClick={() => reset()}
            className="mb-4 px-10 text-lg font-medium"
          >
            Try again
          </Button>
        </ErrorLayout.Root>
      </body>
    </html>
  );
}
