import Profile from "./Profile";

interface ShortCutsProps {
  className?: string;
}

// # Component
export default function ShortCuts({ className }: ShortCutsProps) {
  return (
    <div className={className}>
      <div className="flex w-full flex-col">
        <Profile />
      </div>
    </div>
  );
}
