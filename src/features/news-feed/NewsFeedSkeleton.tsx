import Card from "@/components/layouts/Card";

// # Component
export default function NewsFeedSkeleton() {
  return (
    <Card className="animate-pulse px-0 pb-5">
      <header className="flex items-center gap-2 px-4">
        <div className="size-10 rounded-full bg-slate-200" />
        <div className="flex h-full flex-col justify-center">
          <div className="h-4 w-28 rounded-full bg-slate-200" />
          <div className="mt-1 h-2 w-16 rounded-full bg-slate-200" />
        </div>
      </header>

      <div className="px-4">
        <div className="mt-2 h-5 w-full rounded-full bg-slate-200" />
        <div className="mt-1 h-5 w-full rounded-full bg-slate-200" />
      </div>

      <div className="mt-2 h-64 w-full bg-slate-200" />
    </Card>
  );
}
