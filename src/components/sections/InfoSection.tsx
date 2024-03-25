import React from "react";
import MainButton from "../common/MainButton";
import InfoCard from "../cards/InfoCard";

function InfoSection() {
  const datas = [
    {
      title: "But needs the soccer running developer very kids",
      description:
        "Pellentesque Mauris arc or pregnant film or.Homework age tomorrow always running drink boat vehicles airline ...",
    },
    {
      title: "Urna wants to always jaws and massage and",
      description:
        "in nibh sodales tincidunt Vitae tortor.Turpis Aliquum Mattis Eget Cursus Bibendum Interduum vestibum, Aliquum.Fringilla Malesuada.",
    },
    {
      title: "Drinking propaganda financing any one for the element",
      description:
        "Facilisi that mouse at the pillow of life, football of chocolate life.Apple enforcement propaganda running some zero.But it was a chocolate or ...",
    },
  ];
  return (
    <section className="container mb-[8rem] flex flex-col px-6 md:mb-[8rem] md:mt-[8rem] md:px-[3rem]">
      <div className="mb-[125px] flex-col justify-between md:flex">
        <div className="title-content-container">
          <p className="mb-4 text-2xl font-semibold text-darkblue">
            Useful Information
          </p>
          <p className=" text-lightblue md:max-w-[500px]">
            Integer mass urn, old mauris pot Bureau.In itself, soccer mandatory
            jasmine.Football until the scenario no Now sauce nisl is pregnant
            in.
          </p>
        </div>
        <div className="button-container mt-5">
          <MainButton
            text="Our Blog"
            rightIconClass="w-5 h-5 ml-2"
            classes="rounded-md text-sm font-bold"
            size="small"
            width="w-[10rem]"
            rightIconRoute="/image/right_arrow.png"
          />
        </div>
      </div>
      <div className="cards grid grid-cols-1 gap-4 max-sm:gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-[10rem]">
        {datas.map((Info, index) => {
          return <InfoCard {...Info} key={index} />;
        })}
      </div>
    </section>
  );
}

export default InfoSection;
