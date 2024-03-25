import React from "react";
import MainButton from "../common/MainButton";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-between gap-4 bg-white px-6 py-[2rem] max-lg:py-[5rem] md:flex-row md:px-[3rem] lg:px-[6rem]">
      <div className="content mb-7 flex flex-col justify-center lg:w-4/12">
        <p className=" text-[14px] font-bold uppercase tracking-[10%] text-lightblue">
          Engineer Dieter Weiss
        </p>
        <p className="my-4 text-[32px] font-bold text-darkblue">
          Engineering office for construction and surveying
        </p>
        <p className="mb-[38px] text-[16px] font-medium text-lightblue">
          If you need reliable engineers - the Dieter Weiss engineering office
          is a guarantee for the success of your projects.
        </p>
        <MainButton
          text="Contact Now"
          classes="text-sm font-bold rounded-md"
          size="small"
          rightIconRoute="/image/right_arrow.png"
          rightIconClass="w-5 h-5 ml-2"
        />
      </div>
      <div className="image-content relative w-auto">
        <Image
          src={"/image/hero.png"}
          width={500}
          height={100}
          className="rounded-md md:-mb-[6rem]"
          alt="Hero"
        />
        <div className="absolute left-5 top-5">
          <Image
            src={"/image/hero_icon.png"}
            alt="Hero Icon"
            width={100}
            height={100}
            className="h-10 w-10"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
