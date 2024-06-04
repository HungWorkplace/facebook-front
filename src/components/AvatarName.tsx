import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/types/api";
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
const Image = ({ className, user }: ImageProps) => {
  const fallbackName =
    (user?.firstName?.[0].toUpperCase() ?? "") +
    (user?.surname?.[0].toUpperCase() ?? "");

  return (
    <Avatar className={cn("press cursor-pointer", className)}>
      <AvatarImage
        src={user?.avatar?.url ? user?.avatar.url : "/no-avatar.jpg"}
        className="transition-all hover:brightness-90 active:brightness-75"
      />
      <AvatarFallback>{fallbackName}</AvatarFallback>
    </Avatar>
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
  user: User | undefined;
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
  Image,
  FullName,
};
