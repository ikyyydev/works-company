import { ChevronRight } from "lucide-react";
import React from "react";

interface IProps {
  title: string;
  description: string;
}

function InfoCard({ title, description }: IProps) {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-[20px] font-bold text-darkblue md:max-w-[210px]">
        {title}
      </p>
      <p className="md:max-w[312px] text-[16px] font-medium text-lightblue">
        {description}
      </p>
      <div className="hover:primaryHover flex cursor-pointer gap-4 text-[16px] font-bold text-primary hover:underline">
        Continue Reading <ChevronRight />
      </div>
    </div>
  );
}

export default InfoCard;
