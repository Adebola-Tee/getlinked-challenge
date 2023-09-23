"use client";
import Image from "next/image";

export const Introduction = () => {
  return (
    <>
      <section className="mt-12 text-center md:flex md:justify-center md:items-center  max-w-[1200px] mx-auto">
        <div className="relative w-[250px] h-[250px] mx-auto md:mx-0 md:hidden">
          <Image src="/images/mobile-images/bulb.png" alt="bulb picx" fill />
        </div>
        <div className="mx-auto  md:w-2/3 hidden md:block">
          <Image
            src="/images/desktop-images/bulb-desktop.png"
            alt="bulb picx"
            width={590}
            height={665}
          />
        </div>
        <div className="md:w-1/2 md:text-left">
          <p className="text-[20px] font-bold font-heading w-[220px] mx-auto my-4 md:mx-0 md:text-[32px] md:w-full">
            Introduction to getlinked{" "}<br/>
            <span className="text-[#D434FE]">tech Hackathon 1.0</span>
          </p>
          <p className="text-[12px] w-[250px] leading-8 mx-auto md:mx-0 md:w-full md:text-[14px] ">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apos;re all about!
          </p>
        </div>
      </section>
    </>
  );
};
