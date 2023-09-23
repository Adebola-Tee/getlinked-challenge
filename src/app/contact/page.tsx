"use client";
import { useRouter } from "next/navigation";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from "../../../assets/icons";
import { BackIcon } from "../../../assets/icons/BackIcon";
import { Input } from "../components/Input";
import { Header } from "../components/HomePage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";
import { Confirmation, Modal } from "../components/modal";

const Contact = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const router = useRouter();
  const successNotifying = () => {
    toast.success("Message sent successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const errorNotifying = () => {
    toast.error("fill your input box", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const onSubmitHandler = (event: any) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);
    const requestData = {
      email: formData.get("email"),
      phone_number: "08133630000",
      first_name: formData.get("first_name"),
      message: formData.get("message"),
    };

    axios
      .post(
        "https://backend.getlinked.ai/hackathon/contact-form",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(JSON.stringify(response.data));
        successNotifying();
        setShowConfirmation(true);
      })
      .catch((error) => {
        console.error("Request error:", error);
        errorNotifying();
      });
  };

  useEffect(() => {
    const form = document.getElementById("contact-form");

    if (form) {
      form.addEventListener("submit", onSubmitHandler);
    }
    return () => {
      if (form) {
        form.removeEventListener("submit", onSubmitHandler);
      }
    };
  }, []);
  return (
    <>
      <section className="bg-[url(/images/desktop-images/contact-bg2.png)] bg-no-repeat bg-cover md:pb-48">
        <div className="hidden md:block">
          <Header />
        </div>
        <section className=" pb-16 text-white px-6 md:px-8 pt-12 xl:h-screen md:pt-48">
          <div className="md:flex gap-2 lg:gap-8  md:justify-center max-w-[1200px] mx-auto">
            <div className="mb-8 md:hidden" onClick={() => router.back()}>
              <BackIcon width={24} height={24} />
            </div>
            <div className="hidden md:block md:w-1/2 lg:pl-20">
              <div className=" mt-32">
                <h3 className="text-[#D434FE] text-[28px] font-bold font-heading">
                  Get in touch
                </h3>
                <p className="text-[18px]  mt-4">
                  {" "}
                  Contact <br />
                  Information
                </p>
                <p className="text-[18px]  mt-4">
                  27,Alara Street <br /> Yaba 100012 <br /> Lagos State
                </p>
                <p className="text-[18px]  mt-4">Call Us : 07067981819</p>
                <p className="text-[18px]  mt-4">
                  we are open from Monday-Friday <br /> 08:00am - 05:00pm
                </p>
                <p className="text-[#D434FE] mt-20">Share on</p>
                <div className="flex items-center gap-4 mt-4">
                  <InstagramIcon width={16} height={20} />
                  <XIcon width={16} height={20} />
                  <FacebookIcon width={16} height={20} />
                  <LinkedinIcon width={16} height={20} />
                </div>
              </div>
            </div>
            {/* form side */}
            <div className="md:w-2/3 md:shadow-[0_8px_30px_rgb(0,0,0,0.12)] shadow-lg lg:p-6">
              <div className="md:bg-gradient-to-br from-[#1C152E] to-[#3a1262]  rounded-lg max-w-[600px] md:p-12 lg:pl-16 md:bg-[#1C142E]">
                <div>
                  <h3 className="text-[#D434FE] font-bold font-heading text-[20px] max-w-[190px] lg:max-w-[320px]">
                    Questions or need assistance? Let us know about it
                  </h3>
                  <p className="md:hidden text-[12px] max-w-[200px] my-6">
                    Email us below to any question related to our event
                  </p>
                </div>
                <div className="max-w-[550px]">
                  <form id="contact-form">
                    <Input
                      inputName="first_name"
                      type="text"
                      className="mt-6"
                      classNameTwo="p-3 bg-[#1C142E] bg-gradient-to-r from-[#1C152E] to-[#3a1262] pl-8"
                      placeholder="First Name"
                    />
                    <Input
                      inputName="email"
                      type="email"
                      className="mt-6"
                      classNameTwo="p-3 bg-[#1C142E] bg-gradient-to-r from-[#1C152E] to-[#3a1262]  pl-8"
                      placeholder="Mail"
                    />
                    <textarea
                      className="border rounded focus:outline-none p-3 w-full mt-8 bg-[#1C142E] bg-gradient-to-r from-[#1C152E] to-[#3a1262] pl-8"
                      name="message"
                      placeholder="Message"
                      rows={4}
                      required
                    />
                    <div className="mt-8 flex justify-center">
                      <button
                        type="submit"
                        className="text-white bg-[#B038FF] bg-gradient-to-r from-[#D434FE] to-[#903AFF]  p-4 w-1/2 rounded-md"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                  <div className="md:hidden  text-center mt-12">
                    <p className="text-[#D434FE]">Share on</p>
                    <div className="flex items-center gap-4 mt-2 w-fit mx-auto">
                      <InstagramIcon width={16} height={20} />
                      <XIcon width={16} height={20} />
                      <FacebookIcon width={16} height={20} />
                      <LinkedinIcon width={16} height={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Modal
          show={showConfirmation}
          onClose={() => setShowConfirmation(false)}
        >
          <Confirmation setShowConfirmation={setShowConfirmation} />
        </Modal>
        <ToastContainer />
      </section>
    </>
  );
};
export default Contact;
