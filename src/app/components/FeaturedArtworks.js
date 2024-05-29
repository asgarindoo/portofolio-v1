import Link from "next/link";
import Image from "next/image";
import CopyToClipboard from "./copyText";
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import infiniteScroll from "./infiniteScroll";
import InfiniteScroll from "./infiniteScroll";

const FeaturedArtworks = () => {
  const gridItemClasses = `bg-[#171717] rounded-2xl flex justify-center items-center border border-[#282828]`;

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-6">
      <div className="grid h-full w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-11 gap-2 lg:gap-4">
        <div
          className={`col-span-8 row-span-7 sm:col-span-8 md:col-span-2 md:row-span-8 lg:col-span-5 lg:row-span-3 ${gridItemClasses}`}>
          <div className="m-10">
            <h1 className="text-4xl mb-4">Hi, I{"'"}m Asgarindoo -</h1>
            <p className="text-xl opacity-55">
              Frontend Developer, currently studying at the{" "}
              <a href="https://unesa.ac.id" className="underline">
                State University of Surabaya
              </a>
            </p>
          </div>
        </div>
        <div
          className={`col-span-2 row-span-6 sm:col-span-1 sm:row-span-4 md:col-span-1 lg:col-span-2 lg:row-span-5 ${gridItemClasses} cursor-pointer`}>
          <Link href="/project" className="h-full w-full">
            <div className="h-full w-full  rounded-2xl relative overflow-hidden">
              <Image
                className="h-full w-full object-cover transition-transform duration-500 "
                src="/myproject.jpg"
                width={300}
                height={300}
                alt="Project"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900/40 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-3xl font-bold text-white mt-3">
                    Project
                  </h3>
                  <div className="gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    See More
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div
          className={`col-span-6 row-span-6 sm:col-span-1 sm:row-span-4 md:col-span-1 lg:col-span-2 lg:row-span-5 ${gridItemClasses} cursor-pointer`}>
          <Link href="/blog" className="h-full w-full">
            <div className="h-full w-full  rounded-2xl relative overflow-hidden">
              <Image
                className="h-full w-full object-cover transition-transform duration-500"
                src="/myblog.jpg"
                width={300}
                height={300}
                alt="Blog"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900/40 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-3xl font-bold text-white mt-3">Blog</h3>
                  <div className="gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    See More
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div
          className={`col-span-2 row-span-3 sm:col-span-3 sm:row-span-2 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-1 ${gridItemClasses} cursor-pointer hover:bg-[#282828] transition-colors duration-300 ease-in-out p-4 rounded`}>
          <div>
            <Link href="/resume" className="text-3xl font-bold">
              CV
            </Link>
          </div>
        </div>
        <div
          className={`col-span-2 row-span-3 sm:col-span-3 sm:row-span-2 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-1 ${gridItemClasses} cursor-pointer hover:bg-[#282828] transition-colors duration-300 ease-in-out p-4 rounded`}>
          <div>
            <a href="https://github.com/asgarindoo">
              <FaGithubSquare className="text-4xl" />
            </a>
          </div>
        </div>
        <div
          className={`col-span-2 row-span-3 sm:col-span-3 sm:row-span-2 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-1 ${gridItemClasses} cursor-pointer hover:bg-[#282828] transition-colors duration-300 ease-in-out p-4 rounded`}>
          <div>
            <a href="https://www.linkedin.com/in/asgarindoo/">
              <FaLinkedin className="text-4xl" />
            </a>
          </div>
        </div>
        <div
          className={`col-span-2 row-span-3 sm:col-span-3 sm:row-span-2 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-1 ${gridItemClasses} cursor-pointer hover:bg-[#282828] transition-colors duration-300 ease-in-out p-4 rounded`}>
          <div>
            <a href="https://www.instagram.com/dwikiy_">
              <FaInstagramSquare className="text-4xl" />
            </a>
          </div>
        </div>
        <div
          className={`col-span-8 row-span-3 sm:col-span-8 sm:row-span-4 md:col-span-1 lg:col-span-2 lg:row-span-3 ${gridItemClasses} cursor-pointer`}>
          <Link href={"/hobby"} className="h-full w-full">
            <div className="h-full w-full rounded-2xl relative overflow-hidden">
              <Image
                className="h-full w-full object-cover"
                src="/myhobby.jpg"
                width={300}
                height={300}
                alt="Hobby"
              />
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900/40 opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-3xl font-bold text-white mt-3">
                      Hobby
                    </h3>
                    <div className="gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                      See More
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div
          className={`col-span-3 row-span-3 sm:col-span-8 sm:row-span-4 md:col-span-2 lg:col-span-2 lg:row-span-2 ${gridItemClasses} hover:bg-[#282828] transition-colors duration-300 ease-in-out  `}>
          <Link href="/about">
            <div className="p-5 pl-10">
              <h1 className="text-lg mb-3 ">About</h1>
              <p className="text-md opacity-55">
                Frontend enthusiast and love to design
              </p>
            </div>
          </Link>
        </div>
        <div
          className={`col-span-5 row-span-6 sm:col-span-1 sm:row-span-6 md:col-span-1 lg:col-span-3 lg:row-span-4 ${gridItemClasses}`}>
          <Image
            className="h-full w-full object-cover rounded-2xl"
            src="/profile.jpg"
            width={500}
            height={500}
            alt="Author Profile"
            draggable="false"
          />
        </div>
        <div
          className={`col-span-3 row-span-3 sm:col-span-7 sm:row-span-6 md:col-span-2 lg:col-span-2 lg:row-span-2 ${gridItemClasses}`}>
          <div className="p-5 mx-10">
            <h1 className="text-lg mb-4 ">Contact</h1>
            <CopyToClipboard text={"asgarindo9@gmail.com"} />
          </div>
        </div>

        <div
          className={`col-span-8 row-span-3 sm:col-span-8 sm:row-span-6 md:col-span-3 lg:col-span-6 lg:row-span-2 ${gridItemClasses}`}>
          <div className="overflow-hidden pb-10">
            <InfiniteScroll className="px-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtworks;
