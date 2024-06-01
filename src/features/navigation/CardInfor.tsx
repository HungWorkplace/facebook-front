import styles from "./your-profile.module.css";
import { getUserWithToken } from "@/utils/api/user";
import { AvatarName } from "@/components/AvatarName";

export default async function CardInfo() {
  const user = await getUserWithToken();

  return (
    <div
      className={`mx-4 mb-4 rounded-md p-1 shadow-md ${styles["shadow-card"]}`}
    >
      <div className="flex cursor-pointer items-center gap-2 rounded-lg p-2 px-4 hover:bg-hover-banner">
        <AvatarName.Root user={user}>
          <AvatarName.Image className="size-9" />
          <AvatarName.FullName />
        </AvatarName.Root>
      </div>
    </div>
  );
}
