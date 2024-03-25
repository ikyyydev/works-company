import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface IProps {
  imageUrl: string;
  title: string;
  description: string;
}

function ServiceCard({ imageUrl, title, description }: IProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="-ml-12">
        <Image src={imageUrl} alt="Service Image" width={500} height={500} />
      </div>
      <p className="text-[20px] font-bold text-darkblue md:max-w-[210px]">
        {title}
      </p>
      <p className="md:max-w[312px] text-[16px] font-medium text-lightblue">
        {description}
      </p>
      <div className="hover:text-primaryHover flex cursor-pointer gap-4 text-[16px] font-bold text-primary hover:underline">
        Learn More <ChevronRight />
      </div>
    </div>
  );
}

export default ServiceCard;
