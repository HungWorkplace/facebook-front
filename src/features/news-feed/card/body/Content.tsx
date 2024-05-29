interface ContentProps {
  content: string;
}

// # Component
export default function Content({ content }: ContentProps) {
  return <div className="pt-2 text-sm">{content}</div>;
}
