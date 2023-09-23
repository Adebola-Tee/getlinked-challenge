"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

const faqItems = [
  {
    heading: "Can I work on a project I started before the hackathon? ",
    description:
      "Yes, you can invest in multiple projects simultaneously. Diversifying your investment portfolio across different projects allows you to spread risk and maximize potential returns. Our platform supports investing in multiple projects, giving you the flexibility to choose from various sectors and initiatives within Enugu",
  },
  {
    heading: "What happens if I need help during the hackathon?",
    description:
      "Yes, you can invest in multiple projects simultaneously. Diversifying your investment portfolio across different projects allows you to spread risk and maximize potential returns. Our platform supports investing in multiple projects, giving you the flexibility to choose from various sectors and initiatives within Enugu",
  },
  {
    heading: "What happens if I don't have an idea for a project?",
    description:
      "Yes, you can invest in multiple projects simultaneously. Diversifying your investment portfolio across different projects allows you to spread risk and maximize potential returns. Our platform supports investing in multiple projects, giving you the flexibility to choose from various sectors and initiatives within Enugu",
  },
  {
    heading: "Can I join a team or do I have to come with one?",
    description:
      "Yes, you can invest in multiple projects simultaneously. Diversifying your investment portfolio across different projects allows you to spread risk and maximize potential returns. Our platform supports investing in multiple projects, giving you the flexibility to choose from various sectors and initiatives within Enugu.",
  },
  {
    heading: "What happens after the hackathon ends",
    description:
      "Yes, you can invest in multiple projects simultaneously. Diversifying your investment portfolio across different projects allows you to spread risk and maximize potential returns. Our platform supports investing in multiple projects, giving you the flexibility to choose from various sectors and initiatives within Enugu.",
  },
  {
    heading: "Can I work on a project I started before the hackathon?",
    description:
      "Yes, you can invest in multiple projects simultaneously. Diversifying your investment portfolio across different projects allows you to spread risk and maximize potential returns. Our platform supports investing in multiple projects, giving you the flexibility to choose from various sectors and initiatives within Enugu.",
  },
];
export const Faq = () => {
  const [faqIndex, setFaqIndex] = useState(-1);
  const showResult = (index: number) => {
    setFaqIndex(index);
  };
  const hideResult = () => {
    setFaqIndex(-1);
  };
  return (
    <>
      <section className="text-center md:flex md:max-w-[1100px] md:justify-center md:items-center  md:mx-auto">
        <div className="md:w-1/2">
          <div>
            <p className="text-[20px] font-bold font-heading w-[250px] mx-auto my-4 md:mx-0 md:text-[32px] md:w-[350px] md:text-left">
              Frequently Ask
              <span className="text-[#D434FE]"> Question</span>
            </p>
            <p className="text-[12px] w-[240px] leading-6 mx-auto mb-4 md:mx-0 md:text-left md:text-[14px] md:w-[350px]">
              We got answers to the questions that you might want to ask about
              getlinked Hackathon 1.0
            </p>
          </div>
          <div className="px-4 max-w-[400px] md:px-0 ">
            {faqItems.map((item, idx) => (
              <div key={idx} className="border-b-[.05rem] border-[#D434FE]">
                <div className="flex justify-between p-2  md:pt-8 md:px-0">
                  <h4 className="text-[12px]  text-left md:text-[14px]">{item.heading}</h4>
                  <div className="text-center cursor-pointer">
                    <IoIosAdd
                      className={
                        faqIndex === idx
                          ? "hidden"
                          : "block text-[#D434FE] font-bold"
                      }
                      onClick={() => showResult(idx)}
                      size={20}
                    />
                    <IoIosRemove
                      className={
                        faqIndex === idx
                          ? "text-[#D434FE]"
                          : "hidden text-[#D434FE] font-bold"
                      }
                      onClick={hideResult}
                      size={20}
                    />
                  </div>
                </div>
                <div
                  className={
                    faqIndex === idx ? "text-left p-2" : "hidden text-left p-2"
                  }
                >
                  <p className="text-[12px] leading-6 text-left md:text-[14px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* faq image */}
        <div className="relative w-[250px] h-[250px] mx-auto my-12 md:w-2/3  md:hidden">
          <Image
            src="/images/mobile-images/thinking.png"
            alt="bulb picx"
            fill
          />
        </div>
        <div className="mx-auto  md:w-2/3 hidden md:block lg:w-1/2">
          <Image
            src="/images/desktop-images/faq-desktop.png"
            alt="bulb picx"
            width={600}
            height={465}
          />
        </div>
      </section>
    </>
  );
};
