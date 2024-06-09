import { DateTime } from "luxon";

export function timeAgo(createdAt: string) {
  const date = DateTime.fromISO(createdAt);
  const now = DateTime.now();
  const diffInSeconds = now.diff(date, "seconds").seconds;

  if (diffInSeconds < 60) {
    return "just now";
  } else {
    return date.toRelative();
  }
}

export function timeAgoShort(createdAt: string) {
  const now = DateTime.now();
  const diffInSeconds = now.diff(
    DateTime.fromISO(createdAt),
    "seconds",
  ).seconds;

  if (diffInSeconds < 60) {
    return "just now";
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes}m`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours}h`;
  } else if (diffInSeconds < 604800) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days}d`;
  } else if (diffInSeconds < 31536000) {
    const weeks = Math.floor(diffInSeconds / 604800);
    return `${weeks}w`;
  } else {
    const years = Math.floor(diffInSeconds / 31536000);
    return `${years}y`;
  }
}
