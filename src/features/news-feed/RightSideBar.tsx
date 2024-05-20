interface RightSideBarProps {
  className?: string;
}

// # Component
export default function RightSideBar({ className }: RightSideBarProps) {
  return (
    <div className={className}>
      <p className="font-semibold">Contacts</p>
    </div>
  );
}
