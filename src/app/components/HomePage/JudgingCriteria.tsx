"use client";
import Image from "next/image";

export const Criteria = () => {
  return (
    <>
      <section className="mt-12 text-center md:flex md:max-w-[1300px] md:mx-auto md:gap-24  ">
        <div className="relative w-[250px] h-[250px] mx-auto md:mx-0 md:w-1/2 md:hidden">
          <Image
            src="/images/mobile-images/criteria.png"
            alt="criteria picx"
            fill
          />
        </div>
        <div className="mx-auto  md:w-2/3 hidden md:block">
          <Image
            src="/images/desktop-images/criteria-desktop.png"
            alt="bulb picx"
            width={690}
            height={665}
          />
        </div>
        <div className="md:text-left md:w-2/3">
          <p className="text-[20px] font-bold w-[180px] font-heading mx-auto my-4 md:mx-0  md:text-[32px] md:w-[300px]">
            Judging Criteria{" "}
            <span className="text-[#D434FE]">Key attributes</span>
          </p>
          <p className="text-[12px] w-[250px] leading-8 mx-auto mb-4 md:mx-0 md:w-full md:text-[14px]">
            <span className="text-[#FF26B9] ">Innovations and Creativity:</span>{" "}
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
          <p className="text-[12px] w-[250px] leading-8 mx-auto mb-4 md:mx-0 md:w-full md:text-[14px]">
            <span className="text-[#FF26B9] ">Functionality:</span> Assess how
            well the solution works. Does it perform its intended functions
            effectively and without major issues? Judges would consider the
            completeness and robustness of the solution.
          </p>
          <p className="text-[12px] w-[250px] leading-8 mx-auto mb-4 md:mx-0 md:w-full md:text-[14px]">
            <span className="text-[#FF26B9] ">Impact and Relevance:</span>{" "}
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p className="text-[12px] w-[250px] leading-8 mx-auto mb-4 md:mx-0 md:w-full md:text-[14px]">
            <span className="text-[#FF26B9] ">Technical Complexity:</span>{" "}
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
          <p className="text-[12px] w-[250px] leading-8 mx-auto mb-4 md:mx-0 md:w-full md:text-[14px]">
            <span className="text-[#FF26B9] ">
              Adherence to Hackathon Rules:
            </span>{" "}
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </p>
          <div className="text-center bg-[#903AFF] bg-gradient-to-r from-[#D434FE] to-[#903AFF] p-3 rounded-lg w-[150px] mx-auto md:mx-0 mt-10">
           Read More
          </div>
        </div>
      </section>
    </>
  );
};
