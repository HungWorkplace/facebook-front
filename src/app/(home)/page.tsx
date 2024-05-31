import Contacts from "@/features/contacts/Contacts";
import { NewsFeedLayout } from "@/features/news-feed/NewsFeedLayout";
import ShortCuts from "@/features/shortcuts/Shortcuts";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <div
        className={cn(
          "900:flex",
          "1310:gap-8",
          "1920:mx-auto 1920:w-[91.5rem]",
        )}
      >
        <ShortCuts
          className={cn(
            "sticky bottom-0 left-0 top-14 hidden h-[calc(100vh-3.5rem)] w-[17.5rem] overflow-hidden pt-4",
            "1100:flex",
            "1310:flex-1",
          )}
        />

        {/* 42.5rem 680px*/}
        {/* 31.25rem 500px */}
        <div className={cn("flex-1 pt-6", "900:px-8")}>
          <NewsFeedLayout
            className={cn(
              "mx-auto w-full max-w-[31.25rem]",
              "1310:w-[31.25rem]",
              "1310:max-w-none 1920:w-[42.5rem]",
            )}
          />
        </div>

        <Contacts
          className={cn(
            "sticky bottom-0 right-0 top-14 hidden h-[calc(100vh-3.5rem)] w-[30%] overflow-y-auto bg-black/5 pt-4",
            "900:flex",
            "1100:w-[17.5rem]",
            "1310:flex-1",
          )}
        />
      </div>
    </>
  );
}
