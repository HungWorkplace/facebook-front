"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";

interface ActiveLinkProps {
  href: string;
  active: React.ReactNode;
  inactive: React.ReactNode;
  className?: string;
}

const defaultClassName = "h-full w-full rounded-lg p-0 text-center";

// # Component
export default function ActiveLink({
  href,
  active,
  inactive,
  className,
}: ActiveLinkProps) {
  const pathname = usePathname();

  return (
    <>
      {pathname === href ? (
        <Active href={href} className={className}>
          {active}
        </Active>
      ) : (
        <Inactive href={href} className={className}>
          {inactive}
        </Inactive>
      )}
    </>
  );
}

interface InactiveProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function Inactive({ href, children, className }: InactiveProps) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        defaultClassName,
        "text-secondary-icon hover:text-secondary-icon hover:bg-hover-banner",
        className,
      )}
    >
      {children}
    </Link>
  );
}

interface ActiveProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function Active({ href, children, className }: ActiveProps) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        defaultClassName,
        "relative text-primary hover:bg-transparent hover:text-primary",
        className,
      )}
    >
      {children}

      <div className="absolute inset-x-0 -bottom-1 z-10 h-[0.1875rem] bg-primary"></div>
    </Link>
  );
}
