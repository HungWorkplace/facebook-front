"use client";

import Title from "../components/Title";
import { HiArrowLeft } from "react-icons/hi";
import { useCarousel } from "../custom/carousel";
import { RadioGroup } from "@/components/ui/radio-group";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { FaLock } from "react-icons/fa6";
import Item from "./Item";
import Description from "./Description";
import FooterActions from "./FooterActions";

// # Component
export default function Audience() {
  const { scrollPrev } = useCarousel();

  return (
    <div className="relative flex h-full flex-col">
      <Title title="Post Audience" iconSide="left">
        <span onClick={scrollPrev}>
          <HiArrowLeft size={20} />
        </span>
      </Title>

      <div className="mx-4 pb-1 pt-5">
        <Description className="mb-1" />

        <RadioGroup defaultValue="public">
          <Item
            value="public"
            title="Public"
            description="Anyone on or off Facebook"
          >
            <GiEarthAsiaOceania size={26} />
          </Item>

          <Item value="only-me" title="Only me">
            <FaLock size={26} />
          </Item>
        </RadioGroup>
      </div>

      <FooterActions />
    </div>
  );
}
