"use client";

import Image from "next/image";
import { EyeIcon } from "../../../../assets/icons";

interface confirmationProps {
  setShowConfirmation: (value: boolean) => void;
}

export const Confirmation = ({setShowConfirmation}: confirmationProps) => {
  return (
    <>
      <section className="text-white text-center flex flex-col items-center justify-center h-full">
        <div className="w-fit">
          <div className="border-2 border-[#D434FE] rounded-lg  p-4 max-w-[450px] mx-auto md:py-12 md:w-[60%] lg:w-[80%] md:max-w-none">
            <div>
              <div className="relative w-[200px] h-[150px] mx-auto md:mx-0 md:hidden ">
                <Image
                  src="/images/mobile-images/congratulation.png"
                  alt="confirmation  picx"
                  fill
                />
              </div>
              <div className="mx-auto hidden md:block">
                <Image
                  src="/images/desktop-images/congratulation.png"
                  alt="confirmation picx"
                  width={590}
                  height={665}
                />
              </div>
            </div>
            <p className="w-[200px] mx-auto mt-8">
              Congratulations you have successfully Registered!
            </p>

            <div className="flex items-center justify-center mt-8">
              <p className="text-[12px] w-[250px]">
                Yes, it was easy and you did it! check your mail box for next
                step
              </p>
              <EyeIcon width={18} height={18} className="mt-4" />
            </div>

            <div className="mt-8 flex justify-center cursor-pointer">
              <div
                onClick={() => setShowConfirmation(false)}
                className="text-white bg-[#B038FF] p-4 w-full rounded-md cursor-pointer"
              >
                Back
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
