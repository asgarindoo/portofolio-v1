import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

const BackToHomeIcon = () => {
  return (
    <Link
      href="/"
      className="flex items-center justify-center w-12 h-12 border-2 border-[#c4c4c4] rounded-full p-2 cursor-pointer transform transition-transform duration-300 hover:rotate-90">
      <IoIosArrowRoundBack />
    </Link>
  );
};

export default BackToHomeIcon;
