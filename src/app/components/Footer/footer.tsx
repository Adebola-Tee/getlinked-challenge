"use client";
import React from 'react';
import {
  ContactIcon,
  FacebookIcon,
  GetLinkedIcon,
  InstagramIcon,
  LinkedinIcon,
  LocationIcon,
  XIcon,
} from "../../../../assets/icons/index";

export const Footer = () => {
  return (
    <>
      <section className="text-left text-[12px] md:flex md:max-w-[1100px] md:mx-auto md:text-[14px]">
        <div className="md:w-2/3">
          <div>
            <GetLinkedIcon width={120} />
          </div>
          <div>
            <p className="w-[240px] leading-6  mt-6 lg:w-[400px]">
              Below are our privacy & policy, which outline a lot of goodies.
              it&apos;s our aim to always take of our participant
            </p>
          </div>
          <p className="my-6 lg:mt-20">
            Terms of Use{" "}
            <span className="ml-2 px-3 border-l-2 border-[#D434FE]">
              Privacy Policy
            </span>
          </p>
        </div>
        {/* useful link */}
        <div className="text-[12px] leading-8 md:w-1/3">
          <h4 className="font-bold text-[#D434FE] md:text-[14px]">Useful Links</h4>
          <ul>
            <li>Overview</li>
            <li>Timeline</li>
            <li>FAQs</li>
            <li>Register</li>
          </ul>
          <div className="flex items-center gap-2 lg:gap-6">
            <p className="text-[#D434FE]">Follow us</p>
            <div className="flex items-center gap-4">
              <InstagramIcon width={16} height={20} />
              <XIcon width={16} height={20} />
              <FacebookIcon width={16} height={20} />
              <LinkedinIcon width={16} height={20} />
            </div>
          </div>
        </div>
        {/* contact us */}
        <div className="mt-12 md:w-1/3 md:mt-0">
          <h4 className="font-bold text-[#D434FE] md:text-[14px]">Contact Us</h4>
          <div className="flex items-center my-2 gap-2">
            <ContactIcon width={12} height={20} />
            <p>+234 679 81819</p>
          </div>
          <div className="flex justify-start my-2 gap-2">
            <LocationIcon width={12} height={20} />
            <p className="max-w-[100px]">
              27,Alara Street Yaba 100012 Lagos State
            </p>
          </div>
        </div>
      </section>
      <div>
        <p className="text-center mt-6 text-[12px] md:text-[14px]">
          All rights reserved. © getlinked Ltd.
        </p>
      </div>
    </>
  );
};
