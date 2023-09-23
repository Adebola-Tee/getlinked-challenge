"use client";

import Image from "next/image";
import { BulbIcon } from "../../../../assets/icons";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const router = useRouter();
  return (
    <>
      <main className="md:max-w-[1200px] md:mx-auto md:items-center md:justify-center">
        <div className="md:pr-4 lg:pr-4">
          <p className="text-[18px] text-center  md:text-right lg:text-[24px] font-bold ">
            Igniting a Revolution in HR Innovation
          </p>
          <div className="mx-auto md:hidden">
            <Image
              src="/images/mobile-images/curved-line.png"
              alt="bulb picx"
              width={100}
              height={20}
              className="ml-auto mr-8"
            />
          </div>
          <div className="mx-auto hidden md:block">
            <Image
              src="/images/mobile-images/curved-line.png"
              alt="bulb picx"
              width={200}
              height={20}
              className="ml-auto"
            />
          </div>
        </div>
        <div className="lg:max-w-[700px]  relative top-8 left-8  flex items-left justify-center md:relative md:left-[-230px] md:top-10 lg:left-[-25px] lg:top-16 xl:top-12 xl:left-12">
          <BulbIcon className="w-[20px] h-[24px] md:w-[30px] md:h-[24px] lg:h-[60px] xl:w-[50px] xl:h-[60px] ml-16" />
        </div>
        <section className="md:flex md:max-w-[1200px] mx-auto  lg: lg:ml-0 lg:mr-auto">
          <div className="text-center mt-8  lg:relative lg:left-1 md:relative md:bottom- md:w-1/2 lg:bottom-0">
            <div className="text-[24px] font-heading font-bold md:text-left md:text-[24px] md:w-[400px] lg:text-[52px] xl:text-[64px] lg:w-[500px] xl:w-[600px]">
              getlinked Tech <br />
              <p className="flex items-center justify-center md:justify-start">
                Hackathon <span className="ml-3 text-[#D434FE]">1.0</span>
                {/* <HeroRingIcon
                  width={55}
                  height={33}
                  className="md:ml-20 lg:w-[100px] lg:h-[50px]"
                /> */}
                <Image src='/images/desktop-images/heroring.png' alt="ring light picx" width={100} height={100} className="ml-4"/>
              </p>
            </div>
            <p className=" text-[12px] w-[250px] text-center  mx-auto my-4 leading-6 md:text-left md:mx-0 md:text-[16px] md:w-3/4 font-body md:leading-6">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <div onClick={() => router.push('/register')} className="cursor-pointer text-center bg-[#903AFF] bg-gradient-to-r from-[#D434FE] to-[#903AFF] mb-6 p-3 rounded-lg w-[150px] mx-auto md:mx-0 xl:mt-4">
              Register
            </div>
            {/* time */}
            <div className="md:mx-0 md:text-left xl:mt-4 font-unica">
              <span className="font-normal text-[42px]">00</span>
              <span className="mr-4">H</span> <span className="font-bold text-[42px]">00</span>
              <span className="mr-4">M</span> <span className="font-bold text-[42px]">00</span>
              <span className="mr-4">s</span>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="relative w-full h-[250px] ml-3 md:hidden">
              <Image
                src="/images/mobile-images/hackaton-guy.png"
                alt="hackaton guy picx"
                fill
              />
            </div>
            <div className="relative w-[400px] h-[400px] mx-auto hidden md:block md:w-[520px] lg:w-[620px] lg:h-[450px] xl:w-[850px] xl:h-[450px] right-20">
              <Image
                src="/images/desktop-images/hackathon-guy-desktop.png"
                alt="hackathon guy picx"
                fill
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
