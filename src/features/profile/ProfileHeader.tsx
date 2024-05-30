import { cn } from "@/lib/utils";

interface ProfileHeaderProps {
  className?: string;
}

// # Component
export default function ProfileHeader({ className }: ProfileHeaderProps) {
  return (
    <div className={cn("", className)}>
      <h1 className="text-2xl font-semibold">Black Pink</h1>
      <p className="font-semibold text-secondary-foreground">1.6K friends</p>
    </div>
  );
}
