"use client";
import Image from "next/image";

export const Rules = () => {
  return (
    <>
      <section className="mt-12 text-center md:flex md:flex-row-reverse md:justify-center md:items-center md:gap  max-w-[1100px] mx-auto lg:mt-0">
        <div className="relative w-[250px] h-[250px] mx-auto  md:w-1/2 md:hidden">
          <Image src="/images/mobile-images/rule.png" alt="bulb picx" fill />
        </div>
        <div className="mx-auto  md:w-1/2 hidden md:block">
          <Image
            src="/images/desktop-images/rule-desktop.png"
            alt="bulb picx"
            width={690}
            height={665}
          />
        </div>
        <div className="md:text-left md:w-1/2 ">
          <p className="text-[20px] font-bold font-heading w-[250px] mx-auto my-4 md:text-[32px] md:w-full">
            Rules and <br/> <span className="text-[#D434FE]">Guidelines</span>
          </p>
          <p className="text-[12px] w-[250px] leading-8 mx-auto  md:mx-0  md:w-[350px] lg:w-[500px] md:text-[14px] ">
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
