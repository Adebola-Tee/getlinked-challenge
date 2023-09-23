'use client'
import Image from "next/image";
import { Input, Selector, GroupSelector } from "../components/Input";
import { useState } from "react";
import { Confirmation, Modal } from "../components/modal/index";
import Link from "next/link";
import { Header } from "../components/HomePage";
import { useRouter } from "next/router"; // Change to useRouter
import { useQuery } from "@tanstack/react-query";
import { getCategoriesListApi } from "../services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import axios from "axios";

const Register = () => {
  const [country, setCountry] = useState<string | null>(null); // Define the type
  const [group, setGroup] = useState<string | null>(null); // Define the type
  const router = useRouter();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const groupData = ["1", "2", "3", "4"];

  const successNotifying = () => {
    toast.success("Account Created Successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const errorNotifying = () => {
    toast.error("Fill your details properly", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const { data: categoryDatas } = useQuery({
    queryKey: ["getCategoriesListApi"],
    queryFn: getCategoriesListApi,
  });
  console.log(categoryDatas, "===++++");

  const handleCountrySelect = (value: string) => {
    setCountry(value);
    console.log(value);
  };

  const handleGroupSelect = (value: string) => {
    console.log(value);
    setGroup(value);
  };

  const onSubmitHandler = async (event: React.FormEvent) => {
    // Use React.FormEvent
    event.preventDefault();
    console.log("Form submitted");
    const formData = new FormData(event.currentTarget as HTMLFormElement);
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
        <main className="pb-16 md:pt-48">{/* Rest of your code */}</main>
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
