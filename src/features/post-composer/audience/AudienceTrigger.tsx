"use client";

import { Button } from "@/components/ui/custom/button";
import { FaLock } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import { useCarousel } from "../custom/carousel";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { useDialogContext } from "../context/dialog-context";
import { Privacy } from "@/types/api";

// # Component
export default function AudienceTrigger() {
  const { scrollNext } = useCarousel();
  const { privacy } = useDialogContext();

  return (
    <Button
      onClick={scrollNext}
      className="h-auto bg-secondary-button-background px-2 py-0.5 text-xs text-[#1d1f23] hover:bg-secondary-button-background"
    >
      <PrivacyOption privacy={privacy} />
      <FaCaretDown size={15} />
    </Button>
  );
}

// # Component
interface PrivacyProps {
  privacy: Privacy;
}

function PrivacyOption({ privacy }: PrivacyProps) {
  if (privacy === "private") {
    return (
      <>
        <FaLock size={12} />
        <span className="mx-1">Only me</span>
      </>
    );
  }

  if (privacy === "public") {
    return (
      <>
        <GiEarthAsiaOceania size={12} />
        <span className="mx-1">Public</span>
      </>
    );
  }
}
