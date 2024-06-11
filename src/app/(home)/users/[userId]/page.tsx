import { Separator } from "@/components/ui/separator";
import { NewsFeedLayout } from "@/features/news-feed/NewsFeedLayout";
import BackgroundImage from "@/features/profile/BackgroundImage";
import ProfileHeader from "@/features/profile/ProfileHeader";
import ProfileTabs from "@/features/profile/ProfileTabs";
import { cn } from "@/lib/utils";
import { ProfileProvider } from "@/context/profile";
import { getUser, getUserById } from "@/MVC/controllers/user";
import Photos from "@/features/profile/photos/Photos";

interface UserProfilePageProps {
  params: {
    userId: string;
  };
}

// # Component
export default async function UserProfilePage({
  params,
}: UserProfilePageProps) {
  const user = await getUser();
  let userData = user!;

  if (userData.id !== params.userId) {
    userData = await getUserById(params.userId);
  }

  return (
    <ProfileProvider user={userData}>
      {/* bg-white shadow */}
      <div className="bg-white">
        <BackgroundImage className="max-w-[58.75rem]" />
        <ProfileHeader className="pb-4" />
        <Separator className="mx-auto max-w-[54.75rem] px-4" />
      </div>
      {/* Keep stay on top, because it uses `sticky`*/}
      <ProfileTabs className="sticky top-14 z-30 px-4" />

      {/* Main content */}
      <div
        className={cn(
          "mx-auto flex max-w-[42.5rem] flex-col px-2 pt-4",
          "925:max-w-[56.75rem] 925:flex-row",
        )}
      >
        <Photos
          user={userData}
          className={cn("mx-auto mb-4 px-2", "925:flex-1")}
        />

        <NewsFeedLayout
          isNewsFeed={false}
          userProfile={userData}
          className={cn("mx-2", "925:w-[31.25rem]")}
        />
      </div>
    </ProfileProvider>
  );
}
