import Head from "next/head";
import Sidebar from "../components/sidebar";
import EmbeddedResume from "../components/resume";
import { IoIosArrowRoundBack } from "react-icons/io";

const Resume = () => {
  return (
    <div className="bg-[#0d0d0d] min-h-screen">
      <Head>
        <title>CV</title>
        <meta name="Curiculum Vitae" content="Curiculum Vitae" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-wrap">
        <div className="w-full md:w-2/3 md:pr-10 ">
          <h1 className="flex justify-between text-4xl text-[#c4c4c4] mb-10 font-manrope">
            <p>Resume 📄</p>
            <IoIosArrowRoundBack className=" w-12 h-12 border-2 border-[#c4c4c4] rounded-full p-2 cursor-pointer  transform transition-transform duration-300 hover:rotate-90" />
          </h1>
          <EmbeddedResume />
        </div>
        <div className="md:w-1/3">
          <div className="mt-10 lg:mt-0 mx-auto lg:sticky lg:top-10">
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resume;
