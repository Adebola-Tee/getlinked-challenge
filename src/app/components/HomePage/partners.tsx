"use client";
import Image from "next/image";

export const Partners = () => {
  return (
    <>
      <section className="text-center">
        <div>
          <p className="text-[20px] font-bold font-heading  mx-auto my-4 md:text-[32px]">
            Partners and Sponsors
          </p>
          <p className="text-[12px] w-[240px] leading-6 mx-auto mb-4 md:w-[400px] md:text-[14px] lg:mb-20">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className="border-2 border-[#D434FE] rounded-lg max-w-[1200px] md:p-20 mx-auto pr-2">
          <div className="p-6 grid grid-cols-3 max-w-[500px] mx-auto">
            <div className="h-[40px] flex items-center mx-auto border-b-2 border-[#D434FE] p-4 md:hidden pb-2">
              <div className="relative w-[50px] h-[60px] mb-6">
                <Image
                  src="/images/logos/mobile-logo/liberty-assured.png"
                  alt="liberty assured brand logo"
                  fill
                  className="pb-2 mb-10"
                />
              </div>
            </div>
            <div className="relative w-[120px] h-[100px] items-center mx-auto border-b-2 border-[#D434FE] p-4  hidden md:block">
              <Image
                src="/images/logos/desktop-logo/liberty-assured.png"
                alt="liberty assured brand logo"
                fill
                className="pb-4"
              />
            </div>

            <div className="flex h-[30px] items-center mx-auto border-x-2  border-[#D434FE] p-4 md:hidden">
              <div className="relative w-[80px] h-[20px]">
                <Image
                  src="/images/logos/mobile-logo/liberty-pay.png"
                  alt="liberty pay brand logo"
                  fill
                  className=""
                />
              </div>
            </div>

            <div className="items-center  border-x-2 border-[#D434FE] p-4 hidden md:block mx-auto">
              <div className="relative w-[150px] h-[40px]">
                <Image
                  src="/images/logos/desktop-logo/liberty-pay.png"
                  alt="liberty pay brand logo"
                  fill
                  className="h-[30px]"
                />
              </div>
            </div>

            <div className="h-[40px] flex items-center mx-auto border-b-2 border-[#D434FE] p-4 md:hidden ml-8">
              <div className="relative w-[40px] h-[36px] mb-6">
                <Image
                  src="/images/logos/mobile-logo/winwise.png"
                  alt="winwise brand logo"
                  fill
                  className=""
                />
              </div>
            </div>
            <div className="w-[150px] h-[100px] items-center mx-auto border-b-2 border-[#D434FE] ml-16  hidden md:block">
              <div className="relative w-[100px] h-[100px] ml-6 ">
                <Image
                  src="/images/logos/desktop-logo/winwise.png"
                  alt="winwise brand logo"
                  fill
                  className="pb-4"
                />
              </div>
            </div>

            <div className="flex items-center mx-auto  md:hidden border-[#D434FE] border-r-2 px-2 ">
              <div className="relative w-[40px] h-[36px] my-2 ml-8 px-4">
                <Image
                  src="/images/logos/mobile-logo/wispersms.png"
                  alt="wispersms brand logo"
                  fill
                  className=""
                />
              </div>
            </div>
            <div className="relative w-[100px] h-[100px] items-center mx-auto  border-[#D434FE] p-4  hidden md:block">
              <Image
                src="/images/logos/wispersms.png"
                alt="whispersms brand logo"
                fill
                className="pb-4 pt-4"
              />
            </div>

            <div className="w-[110px] h-[28px] flex items-center mx-auto border-t-2 border-[#D434FE] p-4 md:hidden pt-4">
              <div className="relative w-[60px] h-[30px] mt-4">
                <Image
                  src="/images/logos/mobile-logo/paybox.png"
                  alt="paybox brand logo"
                  fill
                  className=""
                />
              </div>
            </div>
            <div className="w-[180px] h-[80px]  items-center justify-center  mx-auto border-x-2 border-t-2 border-[#D434FE]  hidden md:block  pt-4 px-2 mt-2">
              <div className="relative w-[140px] h-[40px] ">
                <Image
                  src="/images/logos/desktop-logo/paybox.png"
                  alt="paybox brand logo"
                  fill
                  className="pl-8 pt-4"
                />
              </div>
            </div>

            <div className="h-[40px] flex items-center mx-auto ml-4 p-4 md:hidden border-l-2 border-[#D434FE]">
              <div className=" relative w-[60px] h-[20px] ">
                <Image
                  src="/images/logos/mobile-logo/vizual-plus.png"
                  alt="visual plus brand logo"
                  fill
                  className=""
                />
              </div>
            </div>
            <div className="relative w-[150px] h-[40px] ml-16 mt-10 items-center mx-auto p-4 hidden md:block">
              <Image
                src="/images/logos/desktop-logo/visual-plus.png"
                alt="visual plus brand logo"
                fill
                className=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
