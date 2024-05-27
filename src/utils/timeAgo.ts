import { DateTime } from "luxon";

export function timeAgo(createdAt: string) {
  const date = DateTime.fromISO(createdAt);

  return date.toRelative();
}
