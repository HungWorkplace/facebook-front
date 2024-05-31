import Image from "next/image";

// # Component
export default function Statistics() {
  return (
    <div className="flex gap-2 py-2">
      <Image src="/like.svg" width={18} height={18} alt="like" />
      <span>14</span>
    </div>
  );
}
