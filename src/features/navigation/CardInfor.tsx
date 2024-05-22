import UserName from "@/components/UserName";
import styles from "./your-profile.module.css";
import UserAvatar from "@/components/UserAvatar";

export default function CardInfo() {
  return (
    <div
      className={`mx-4 mb-4 rounded-md p-1 shadow-md ${styles["shadow-card"]}`}
    >
      <div className="flex cursor-pointer items-center gap-2 rounded-lg p-2 px-4 hover:bg-hover-banner">
        <UserAvatar className="h-9 w-9" />
        <UserName />
      </div>
    </div>
  );
}
