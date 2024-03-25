import Image from "next/image";
import React from "react";
import ServiceCard from "../cards/ServiceCard";

function ServiceSection() {
  const datas = [
    {
      imageUrl: "/image/a_1.png",
      title: "Studies and concepts, overall planning",
      description:
        "New construction and expansion of roads, traffic areas, waterways and railways require valid traffic concepts.",
    },
    {
      imageUrl: "/image/a_2.png",
      title: "Transport facilities and engineering buildings",
      description:
        "Traffic concepts are a crucial factor of any infrastructure.The Weiss engineering office has therefore built up a team of experts.",
    },
    {
      imageUrl: "/image/a_3.png",
      title: "Design measurement, 3D laser scanning",
      description:
        "When performing all measurement technology tasks in the performance profile design measurement, we are a powerful partner.",
    },
  ];
  return (
    <section
      className="container flex flex-col px-6 md:mt-[8rem] md:px-[3rem]"
      id="services"
    >
      <div className="title-content">
        <p className="mb-4 text-2xl font-semibold text-darkblue">
          Our Services
        </p>
        <p className=" text-lightblue md:max-w-[500px]">
          Service is a challenge for our employees, that is the Strength of our
          team.Regardless of whether traffic planning, Disposal, noise
          protection or special areas - We offer all -round service with:
        </p>
      </div>
      <div className="cards grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-[10rem]">
        {datas.map((service, index) => {
          return <ServiceCard {...service} key={index} />;
        })}
      </div>
    </section>
  );
}

export default ServiceSection;
