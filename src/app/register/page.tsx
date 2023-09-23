"use client";
import Image from "next/image";
import { Input, Selector, GroupSelector } from "../components/Input";
import { useState } from "react";
import { Confirmation, Modal } from "../components/modal/index";
import Link from "next/link";
import { Header } from "../components/HomePage";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getCategoriesListApi } from "../services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import axios from "axios";


const Register = () => {
  const [country, setCountry] = useState();
  const [group, setGroup] = useState();
  const router = useRouter();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const groupData = ["1", "2", "3", "4"];

  const successNotifying = () => {
    toast.success("Account Created Successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const errorNotifying = () => {
    toast.error("Fill your detail properly", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const { data: categoryDatas } = useQuery({
    queryKey: ["getCategoriesListApi"],
    queryFn: getCategoriesListApi,
  });
  console.log(categoryDatas, "===++++");

  const handleCountrySelect = (value: any) => {
    setCountry(value);
    console.log(value);
  };

  const handleGroupSelect = (value: any) => {
    console.log(value);
    setGroup(value);
  };

  const onSubmitHandler = async (event: any) => {
    event.preventDefault();
    console.log("Form submitted");
    const formData = new FormData(event.target);
    const data = {
      email: formData.get("email"),
      phone_number: formData.get("phone_number"),
      team_name: formData.get("team_name"),
      group_size: group,
      project_topic: formData.get("project_topic"),
      category: 2,
      privacy_poclicy_accepted: true,
    };

    try {
      const response = await axios.post(
        "https://backend.getlinked.ai/hackathon/registration",
        data
      );
      console.log(response.data, "==== this is response submission data");
      successNotifying();
      setShowConfirmation(true);
    } catch (error) {
      console.error(error);
      errorNotifying();
    }
  };
  return (
    <>
      <div className="bg-[url(/images/desktop-images/contact-bg.png)] bg-no-repeat bg-cover md:pb-40 h-screen">
        <div className="hidden md:block">
          <Header />
        </div>
        <main className="pb-16 md:pt-48">
          <div
            className="mt-8"
            onClick={() => {
              router.push("/");
            }}
          >
            <Link
              href="./"
              className="md:hidden text-[#FF26B9] text-[28px] pl-8 font-bold mb-6"
            >
              Register
            </Link>
          </div>
          <section className="max-w-[1200px] mx-auto md:flex">
            <div className="mt-16 md:w-1/2 flex flex-col items-center justify-center md:mt-0">
              <div className="relative w-[250px] h-[150px] mx-auto md:mx-0 md:hidden">
                <Image
                  src="/images/mobile-images/register-3d.png"
                  alt="register 3D picx"
                  fill
                />
              </div>
              <div className="relative  w-[400px] h-[250px] lg:w-[700px] lg:h-[500px] hidden md:block">
                <Image
                  src="/images/desktop-images/register-3d.png"
                  alt="register 3D picx"
                  fill
                />
              </div>
            </div>
            <div className="md:w-2/3 px-6 md:px-4 lg:p-12 lg:pt-4 rounded-xl md:bg-gradient-to-br from-[#1C152E] to-[#240d3b]">
              <div className="text-white text-center my-8 md:text-left">
                <div className="flex items-baseline pl-5 gap-4 mb-3 md:hidden">
                  <p className="text-[12px] md:text-left  ">
                    Be part of this movement!
                  </p>
                  <div className="relative w-[89px] h-[27px]  ">
                    <Image
                      src="/images/mobile-images/movement.png"
                      alt="register 3D picx"
                      fill
                    />
                  </div>
                </div>
                <div className="">
                  <p className="hidden md:block text-[#FF26B9] text-[32px] font-bold mb-6">
                    Register
                  </p>
                  <div className="items-baseline gap-4 mb-3  hidden md:flex">
                    <p className="text-[12px] md:text-left">
                      Be part of this movement!
                    </p>
                    <div className="relative w-[89px] h-[27px] ">
                      <Image
                        src="/images/desktop-images/movement.png"
                        alt="register 3D picx"
                        fill
                      />
                    </div>
                  </div>
                </div>
                <p className="uppercase text-left pl-6 text-[24px] md:pl-0">
                  Create your account
                </p>
              </div>
              <form onSubmit={onSubmitHandler}>
                <div className="px-6 md:px-0">
                  <div className="md:flex gap-4">
                    <Input
                      inputName="team_name"
                      type="text"
                      label="Team's Name"
                      className="mt-6 md:w-1/2 text-white"
                      classNameTwo="p-4 bg-[#1C142E] bg-gradient-to-r from-[#1C152E] to-[#3a1262] text-white  pl-2 text-[12px] md:text-[8px] lg:text-[12px]"
                      placeholder="Enter the name of your group"
                    />
                    <Input
                      inputName="phone_number"
                      type="text"
                      label="Phone"
                      className="mt-6 md:w-1/2 text-white"
                      classNameTwo="p-4 text-white bg-[#1C142E] bg-gradient-to-r from-[#1C152E] to-[#3a1262]  pl-2 text-white text-[12px] md:text-[8px] lg:text-[12px]"
                      placeholder="Enter the name of your group"
                    />{" "}
                  </div>
                  <div className="md:flex gap-6">
                    <Input
                      inputName="email"
                      type="text"
                      label="Email"
                      className="mt-6 md:w-1/2 text-white"
                      classNameTwo="p-4 bg-[#1C142E] bg-gradient-to-r from-[#1C152E] to-[#3a1262]  pl-2 text-[12px] text-white md:text-[8px] lg:text-[12px]"
                      placeholder="Enter the name of your group"
                    />
                    <Input
                      inputName="project_topic"
                      type="text"
                      label="Project Topic"
                      className="mt-6 md:w-1/2 text-white"
                      classNameTwo="p-4 bg-[#1C142E] bg-gradient-to-r from-[#1C152E] to-[#3a1262]  pl-2 text-[12px] text-white md:text-[8px] lg:text-[12px]"
                      placeholder="Enter the name of your group"
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <Selector
                        label="Country of Interest"
                        focusContent=""
                        placeholder="Draft"
                        onSelect={handleCountrySelect}
                        selectOption=""
                        className="mt-4"
                        classNameTwo="bg-[#1C142E] bg-gradient-to-r from-[#1C152E] to-[#3a1262]  p-3"
                        inputData={categoryDatas}
                      />
                    </div>
                    <div className="w-1/2">
                      <GroupSelector
                        label="Group Size"
                        focusContent=""
                        placeholder="Draft"
                        onSelect={handleGroupSelect}
                        selectOption=""
                        className="mt-4"
                        classNameTwo="bg-[#1C142E] bg-gradient-to-r from-[#1C152E] to-[#3a1262]  p-3"
                        inputData={groupData}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-[#FF26B9] text-[8px] pl-8 my-4 md:text-left">
                  Please review your registration details before submitting
                </p>
                <div className="text-[10px] text-white flex items-center justify-cente gap-2 w-[300px] pl-8 mr-auto md:pl-0 md:w-full md:justify-start">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    className="cursor-pointer"
                  />
                  <p className="max-w-[300px] md:max-w-none">
                    I agreed with the event terms and conditions and privacy
                    policy
                  </p>
                </div>
                <div className="mt-6 flex justify-center cursor-pointer">
                  <button
                    type="submit"
                    className="text-white bg-[#B038FF] bg-gradient-to-r from-[#D434FE] to-[#903AFF]  p-4 w-[150px] rounded-md md:w-full text-center cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>
        <Modal
          show={showConfirmation}
          onClose={() => setShowConfirmation(false)}
        >
          <Confirmation setShowConfirmation={setShowConfirmation} />
        </Modal>
        <ToastContainer />
      </div>
    </>
  );
};
export default Register;
