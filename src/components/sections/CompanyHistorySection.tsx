import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function CompanyHistorySection() {
  return (
    <section className="px-6 py-[2rem] max-lg:py-[5rem] md:flex-row md:px-[3rem] lg:mt-[168px] lg:px-[6rem]">
      <div className="relative flex w-10/12 flex-col gap-10 bg-darkblue p-8 md:max-w-[1009px] md:p-[98px]">
        <h3 className="text-[14px] font-bold uppercase leading-[20px] text-lightblue">
          Our company history
        </h3>
        <h2 className="text-[26px] font-bold capitalize leading-[44px] text-white md:max-w-[494px] md:text-[32px]">
          Diplom engineer Dieter Weiss founded in 1971 Engineering office.
        </h2>
        <p className="text-[15px] font-semibold leading-[26px] text-white md:max-w-[494px] md:text-[16px]">
          He led it as the sole owner for almost 30 years.In 1998 son stepped
          Klaus Weiss as deputy to the side of his father.Since 2006 is a
          graduate engineer Klaus Weiss sole managing director
        </p>
        <hr className="bg-lightblue md:max-w-[494px]" />
        <div className="flex cursor-pointer gap-4 text-[16px] font-bold text-white hover:underline">
          Learn more <ChevronRight />
        </div>
        <div className="absolute right-[-18rem] top-16 max-lg:hidden">
          <Image
            src={"/image/b_1.png"}
            alt="Company History Image"
            width={488}
            height={662}
            className="h-[762px] w-[632px]"
          />
        </div>
      </div>
    </section>
  );
}

export default CompanyHistorySection;
