"use client";
import Image from "next/image";
import { MarkIcon } from "../../../../assets/icons/MarkIcon";

export const PrivacyPolicy = () => {
  return (
    <>
      <div className="md:flex md:max-w-[1200px]  md:gap-24 md:mx-auto md:items-center xl:pl-12">
        <section className="text-center md:w-1/2">
          <div>
            <p className="text-[20px] font-bold font-heading w-[180px] mx-auto md:mx-0 md:text-left md:text-[32px] md:w-[300px] md:leading-10">
              Privacy Policy and
              <span className="text-[#D434FE]"> Terms</span>
            </p>
            <p className="text-[10px] w-[270px] leading-6 mx-auto mb-4 md:mx-0 md:text-left md:text-[14px] md:my-6">
              Last updated on September 12, 2023
            </p>
            <p className="text-[12px] w-[240px] leading-6 mx-auto mb-4 md:mx-0 md:text-left md:w-[410px] md:text-[14px]">
              Below are our privacy & policy, which outline a lot of goodies.
              it&apos;s our aim to always take of our participant
            </p>
          </div>
          <div className="border-2 border-[#D434FE] text-[12px] leading-6 py-8 px-4 rounded-lg md:text-[14px]">
            <p className="md:text-left ">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <div className="my-6">
              <p className="font-semibold text-[#D434FE] md:mx-0 md:text-left">Licensing Policy</p>
              <p className="md:mx-0 md:text-left">Here are terms of our Standard License:</p>
            </div>
            <div className="flex space-x-4 mt-4 ">
              <MarkIcon width={40} height={32} className="md:w-[20px] md:h-[15px] md:mt-1" />
              <p className="text-left ">
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <MarkIcon width={40} height={32} className="md:w-[20px] md:h-[15px] md:mt-1"/>
              <p className="text-left ">
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </div>
            <div className="text-center bg-[#903AFF] bg-gradient-to-r from-[#D434FE] to-[#903AFF] p-3 rounded-lg w-[150px] mx-auto mt-8">
              Read More
            </div>
          </div>
        </section>
        {/* Privacy and policy image */}
        <section className="lg:w-2/3">
          <div className="relative w-[200px] h-[300px] mx-auto my-12 md:hidden">
            <Image
              src="/images/mobile-images/padlock.png"
              alt="winner cup picx"
              fill
            />
          </div>
          <div className="mx-auto hidden md:block">
          <Image
            src="/images/desktop-images/privacy-desktop.png"
            alt="privacy and policy picx"
            width={490}
            height={565}
          />
        </div>
        </section>
      </div>
    </>
  );
};
