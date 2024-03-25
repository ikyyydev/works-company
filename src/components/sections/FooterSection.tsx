import Image from "next/image";
import React from "react";

function FooterSection() {
  return (
    <footer className="flex flex-col gap-[4rem] bg-[#263640] py-[3rem]">
      <div className="menu-footer container flex">
        <div className="footer-logo w-7/12 cursor-pointer pt-3">
          <Image
            src={"/image/footer_logo.png"}
            alt="Footer Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="menu-footer w-5/12 justify-around gap-3 md:flex">
          <div>
            <h3 className="mb-3 text-sm uppercase tracking-[1.75px] text-white">
              Managing Director
            </h3>
            <p className="cursor-pointer text-white hover:underline">
              Advisory engineer <br />
              Dipl.-Ing.Klaus Weiss
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm uppercase tracking-[1.75px] text-white">
              Address
            </h3>
            <p className="cursor pointer text-white hover:underline">
              Street name 7 <br /> 12345 city
            </p>
          </div>
        </div>
      </div>
      <div className="line-footer container">
        <div className="line h-[1px] w-full bg-white opacity-[50%]"></div>
      </div>
      <div className="copyright container">
        <p className="text-sm text-white opacity-[50%]">
          Imprint | Data Protection
        </p>
      </div>
    </footer>
  );
}

export default FooterSection;
