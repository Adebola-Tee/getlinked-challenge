import { Footer } from "./components/Footer/footer";
import {
  Criteria,
  Header,
  Hero,
  Introduction,
  Partners,
  PrivacyPolicy,
  Rewards,
  Rules,
  TailwindTimeLine,
  TailwindTimeThree,
} from "./components/HomePage";
import { Faq } from "./components/HomePage/FAQ";

export default function Home() {
  return (
    <div className="bg-[#190E2D] h-screen text-white overflow-x-hidden">
      <nav>
        <div className="bg-[#270C4B]">
          <Header />
        </div>
        <div className="bg-[url(/images/desktop-images/hero-bg-2.png)] bg-no-repeat bg-cover md:bg-contain md:border-b-[0.01px] md:border-gray-50/20 pt-28 md:pl-4 lg:pl-10 md:pt-28 lg:pt-32">
          <Hero />
        </div>
        <div className="bg-[#140D27] py-10 md:border-b-[0.01px] md:border-gray-50/20 md:px-4 lg:px-10 lg:pt-16 lg:pb-32">
          <Introduction />
        </div>
        <div className="bg-[url(/images/desktop-images/contact-bg.png)] bg-no-repeat bg-cover bg-left-top py-10 md:border-b-[0.01px] md:border-gray-50/20 md:px-4 lg:px-10 lg:pt-0 lg:pb-0">
          <Rules />
        </div>
        <div className="bg-[url(/images/desktop-images/criteria-bg.png)] bg-no-repeat bg-cover py-10 md:border-b-[0.01px] md:border-gray-50/20 md:px-4 lg:px-10 lg:pt-16 lg:pb-32">
          <Criteria />
        </div>
        <div className="bg-[#140D27] py-10  md:border-b-[0.01px] md:border-gray-50/20 md:px-4 lg:px-10 lg:pt-16 lg:pb-16">
          <Faq />
        </div>
        <div className="hidden bg-[url(/images/desktop-images/timeline-bg.png)] bg-no-repeat bg-contain py-10  md:block md:border-b-[0.01px] md:border-gray-50/20  lg:px-10 lg:pt-16 lg:pb-24 ">
          <TailwindTimeLine />
        </div>
        <div className="bg-[#150E28] py-10 md:border-b-[1.5px] md:border-none md:px-4 lg:px-10 md:hidden">
          <TailwindTimeThree />
        </div>
        <div className="bg-[url(/images/desktop-images/reward-bg.png)] bg-no-repeat bg-cover py-10 px-4 md:border-b-[0.35px] md:border-gray-50/20 md:px-4 lg:px-10   xl:pt-28 xl:pb-24">
          <Rewards />
        </div>
        <div className="bg-[url(/images/desktop-images/partner-bg.png)] bg-no-repeat bg-cover py-10 px-4 md:border-b-[0.01px] md:border-gray-50/20 md:px-4 lg:px-10  lg:pt-28 lg:pb-32">
          <Partners />
        </div>
        <div className="bg-[url(/images/desktop-images/privacy-bg.png)] bg-no-repeat bg-cover py-10 px-4 md:border-b-[0.01px] md:border-gray-50/20 md:px-4 lg:px-10  lg:pt-32 lg:pb-40 ">
          <PrivacyPolicy />
        </div>
        <div className="bg-[url(/images/desktop-images/footer-bg.png)] bg-no-repeat bg-cover py-10 px-4 md:border-b-[0.01px] md:border-gray-50/20 md:px-4 lg:px-10 lg:pt-24 lg:pb-16">
          <Footer />
        </div>
      </nav>
    </div>
  );
}
