import Image from "next/image";
import { Button } from "../ui/custom/button";
import GoBackButton from "../GoBackButton";
import Link from "next/link";

interface RootProps {
  children?: React.ReactNode;
  src: string;
  alt: string;
  title?: string;
  message: string;
}

// # Component
function Root({ children, src, alt, title, message }: RootProps) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center">
      <div className="flex max-w-[31.25rem] flex-col items-center p-6 text-center">
        <Image
          src={src}
          width={112}
          height={112}
          priority
          alt={alt}
          className="mb-5"
        />
        {title && (
          <h1 className="text-xl font-bold text-secondary-foreground">
            {title}
          </h1>
        )}
        <p className="mb-5 leading-5 text-secondary-foreground">{message}</p>
        {children}
        <GoBackButton />
      </div>
    </div>
  );
}

interface ActionProps {
  children: React.ReactNode;
  href: string;
}

function Action({ href, children }: ActionProps) {
  return (
    <Button className="mb-4 px-10 text-lg font-medium">
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export { Root, Action };
