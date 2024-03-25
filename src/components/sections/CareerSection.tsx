import React from "react";
import MainButton from "../common/MainButton";
import Image from "next/image";

function CarrerSection() {
  return (
    <section className="flex flex-col items-end justify-start gap-4 bg-white px-6 py-[5rem] md:flex-row md:px-[3rem] lg:px-[6rem]">
      <div className="content mb-7 flex flex-col justify-end md:w-2/5">
        <p className=" text-[14px] font-bold uppercase leading-[20px] tracking-[10%] text-lightblue">
          Make a career with us
        </p>
        <p className="my-4 text-[32px] font-bold text-darkblue">
          Apply with us
        </p>
        <p className="mb-[38px] text-[16px] font-medium text-lightblue">
          Lorem very carrots, tomato undergraduate developer, but do ETIODO MUST
          BEEN UNTEED AND DRAFT
        </p>
        <MainButton
          text="Career"
          classes="text-sm font-bold rounded-md"
          size="small"
          rightIconRoute="/image/right_arrow.png"
          rightIconClass="w-5 h-5 ml-2"
        />
      </div>
      <div className="image-content">
        <Image
          src={"/image/c_1.png"}
          width={700}
          height={500}
          className="h-[484px] rounded-md md:mt-[-10rem]"
          alt="Hero"
        />
      </div>
    </section>
  );
}

export default CarrerSection;
