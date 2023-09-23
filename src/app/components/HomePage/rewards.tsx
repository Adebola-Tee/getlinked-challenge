"use client";
import Image from "next/image";

export const Rewards = () => {
  return (
    <>
      <section className="text-center">
        <div className="md:hidden">
          <p className="text-[20px] font-bold w-[180px] mx-auto font-heading">
            Prizes and
            <span className="text-[#D434FE]"> Rewards</span>
          </p>
          <p className="text-[12px] w-[240px] leading-6 mx-auto mb-4">
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>

        <div className="md:flex md:max-w-[1250px] md:mx-auto ">
          {/* winner's cup image */}
          <div className="relative w-[250px] h-[250px] mx-auto my-12 md:mx-0 md:w-1/2 md:hidden">
            <Image
              src="/images/mobile-images/winner-cup.png"
              alt="winner cup picx"
              fill
            />
          </div>
          <div className="mx-auto  md:w-2/3 hidden md:block">
            <Image
              src="/images/desktop-images/cup-desktop.png"
              alt="winner cup picx"
              width={490}
              height={665}
            />
          </div>
          {/* winners reward for positions */}
          <div className="md:w-2/3">
            <div className="w-fit md:mx-auto hidden md:block">
              <p className="text-[20px] font-bold font-heading w-[180px] mx-auto md:mx-0 text-left md:text-[32px] md:leading-10 md:mb-6 ">
                Prizes and
                <span className="text-[#D434FE]"> Rewards</span>
              </p>
              <p className="text-[12px] w-[240px] leading-6 mx-auto mb-4 md:mx-0 md:text-left md:text-[14px]">
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>

            <section className="flex md:max-w-[500px] md:mx-auto">
              <div className="relative w-[90px] h-[150px]  mx-auto my-12 md:w-[150px] md:h-[210px]">
                <Image
                  src="/images/mobile-images/second-position.png"
                  alt="second position reward picx"
                  fill
                />
              </div>
              <div className="relative w-[150px] -top-8 h-[200px] mx-auto my-12 md:w-[210px] md:h-[260px]">
                <Image
                  src="/images/mobile-images/first-position.png"
                  alt="first position reward picx"
                  fill
                />
              </div>
              <div className="relative w-[90px] h-[150px] mx-auto my-12 md:w-[150px] md:h-[210px]">
                <Image
                  src="/images/mobile-images/third-position.png"
                  alt="third position reward picx"
                  fill
                />
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};
