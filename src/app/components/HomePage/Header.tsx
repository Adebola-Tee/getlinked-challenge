import Link from "next/link";
import MobileNav from "./MobileNav";
import { GetLinkedIcon } from "../../../../assets/icons";


export const Header = () => {
  return (
    <nav className="flex fixed top-0 z-20 w-full border-b-[0.35px] bg-[#140D27] md:border-gray-50/20 py-6 text-white ">
      <div className="flex items-center justify-between mx-auto w-full max-w-screen-2xl px-4 md:px-2 xl:px-16">
        <div className="flex gap-20 pl-2 xl:pl-20">
          <Link href="/" className="flex items-center">
            <GetLinkedIcon width={150} />
          </Link>
        </div>

        <div className="flex items-center max-md:hidden md:space-x-20 md:mr-2">
          <ul className="flex gap-x-3 md:gap-x-10">
            <li className="font-bold hover:text-gradient_blue-purple">
            <Link href="/">Timeline</Link>
            </li>
            <li className="hover:text-gradient_blue-purple !font-bold">
              <Link href="/">Overview</Link>
            </li>
            <li className="body-text hover:text-gradient_blue-purple !font-bold">
              <Link href="/">FAQs</Link>
            </li>
            <li className="body-text hover:text-gradient_blue-purple !font-bold">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          <Link
            href="/register"
            className="text-center bg-[#9025AD] bg-gradient-to-r from-[#D434FE] to-[#903AFF] cursor-pointer p-3 rounded-lg w-[150px] mx-auto md:mx-0 md:hidden lg:block"
          >
            Register
          </Link>
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};
