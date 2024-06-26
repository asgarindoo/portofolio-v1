import Head from "next/head";
import Sidebar from "../components/sidebar";
import BackToHomeIcon from "../components/BackToHome";
import CursorTrail from "../components/CursorTrail";

const About = () => {
  return (
    <div className="bg-[#0d0d0d] min-h-screen">
      <CursorTrail />
      <Head>
        <title>About ME</title>
        <meta name="description" content="Learn more about me" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-wrap ">
        <div className="w-full md:w-2/3 md:pr-10 ">
          <h1 className="flex justify-between  text-4xl  text-[#c4c4c4] mb-10 font-manrope">
            {" "}
            Hi There 👋
            <BackToHomeIcon />
          </h1>
          <h2 className="text-4xl mb-14 font-semibold sm:text-5xl lg:mb-10 lg:mt-10 font-manrope animate-fade-down animate-duration-500">
            <span className="text-[#c4c4c4] opacity-55">I{"'"}m </span>
            <span className="text-[#c4c4c4]">Asgarindo Dwiki Ibrahim Adji</span>
            <span className="text-[#c4c4c4] opacity-55">
              {" "}
              Frontend Developer from Kudus, Indonesia.
            </span>
          </h2>

          <p className="mt-4 text-[#c4c4c4] text-lg opacity-55 font-manrope mb-14 animate-fade-down animate-duration-1000">
            I{"'"}m a dedicated IT student with a keen interest and proficiency
            in frontend development and web design. Experienced in building
            responsive and engaging user interfaces. Skilled in popular
            frameworks and capable of transforming UI/UX designs into functional
            web applications. Proficient in web design, creating aesthetically
            pleasing and user-friendly layouts. Adept at working effectively in
            team environments and passionate about continuous learning and
            staying updated with the latest advancements in frontend development
            technologies.
          </p>

          <div className="bg-[#171717] p-8 rounded-lg shadow-md animate-fade-down ">
            <h1 className="text-3xl font-semibold text-[#c4c4c4] mb-6">
              Experience
            </h1>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
              <div>
                <h2 className="text-lg font-semibold text-[#c4c4c4] mb-1">
                  Frontend Developer
                </h2>
                <p className="text-[#c4c4c4]">Company Name - Location</p>
                <p className="text-[#c4c4c4] opacity-70 text-sm">
                  Month Year - Present
                </p>
              </div>
            </div>
            <p className="text-[#c4c4c4] mb-4">
              lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <hr className="border-gray-600 my-4" />

            {/* Entry kedua */}
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
              <div>
                <h2 className="text-lg font-semibold text-[#c4c4c4] mb-1">
                  Position Title
                </h2>
                <p className="text-[#c4c4c4]">Company Name - Location</p>
                <p className="text-[#c4c4c4] opacity-70 text-sm">
                  Month Year - Month Year
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <hr className="border-gray-600 my-4" />

            {/* Tambahkan entri pengalaman lainnya jika diperlukan */}
          </div>
        </div>

        <div className="md:w-1/3 ">
          <div className="mt-10 lg:mt-0 mx-auto lg:sticky lg:top-10">
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
