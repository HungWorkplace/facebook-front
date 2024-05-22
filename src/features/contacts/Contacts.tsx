interface ContactsProps {
  className?: string;
}

// # Component
export default function Contacts({ className }: ContactsProps) {
  return (
    <aside className={className}>
      <p className="font-semibold">Contacts</p>
    </aside>
  );
}
