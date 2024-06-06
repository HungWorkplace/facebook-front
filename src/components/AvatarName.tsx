import { cn } from "@/lib/utils";
import { Friend, User } from "@/types/api";
import Image from "next/image";
import React, {
  Children,
  ReactElement,
  cloneElement,
  isValidElement,
} from "react";

interface MutualProps {
  user?: User;
}

interface ImageProps extends MutualProps {
  className?: string;
}

// # Component
const Avatar = ({ className, user }: ImageProps) => {
  // const fallbackName =
  //   (user?.firstName?.[0].toUpperCase() ?? "") +
  //   (user?.surname?.[0].toUpperCase() ?? "");

  return (
    <Image
      src={user?.avatar?.url || "/no-avatar.jpg"}
      width={60}
      height={60}
      alt="avatar"
      className={cn(
        "press aspect-square size-10 cursor-pointer rounded-full object-cover transition-all hover:brightness-90 active:brightness-75",
        className,
      )}
    />
  );
};

interface FullNameProps extends MutualProps {
  className?: string;
}

// # Component
const FullName = ({ className, user }: FullNameProps) => {
  return <div className={cn("font-medium", className)}>{user?.fullName}</div>;
};

interface RootProps {
  children: React.ReactNode;
  className?: string;
  user?: User | Friend | null;
}

// # Component
const Root = ({ children, className, user }: RootProps) => {
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement<any>, { user });
    }
    return child;
  });

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {childrenWithProps}
    </div>
  );
};

export const AvatarName = {
  Root,
  Image: Avatar,
  FullName,
};
