import Link from "next/link";
import Image from "next/image";
import CopyToClipboard from "./copyText";

const FeaturedArtworks = () => {
  const gridItemClasses = `bg-[#171717] rounded-2xl flex justify-center items-center`;

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-6">
      <div className="grid h-full w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-11 gap-2 lg:gap-4">
        <div
          className={`col-span-8 row-span-7 sm:col-span-8 md:col-span-2 md:row-span-8 lg:col-span-5 lg:row-span-3 ${gridItemClasses}`}>
          <div className="m-16">
            <h1 className="text-4xl mb-4">Hi, I'm Asgarindoo -</h1>
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
                className="h-full w-full object-cover transition-transform duration-500"
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                    City of love
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
                className="h-full w-full object-cover transition-transform duration-500 transform"
                src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={300}
                height={300}
                alt="Blog"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900/40 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-3xl font-bold text-white mt-3">Blog</h3>
                  <div className="gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    City of love
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div
          className={`col-span-2 row-span-3 sm:col-span-3 sm:row-span-2 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-1 ${gridItemClasses} cursor-pointer hover:bg-[#282828] transition-colors duration-300 ease-in-out p-4 rounded`}>
          <div>
            <h1>Darkmode</h1>
          </div>
        </div>
        <div
          className={`col-span-2 row-span-3 sm:col-span-3 sm:row-span-2 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-1 ${gridItemClasses} cursor-pointer hover:bg-[#282828] transition-colors duration-300 ease-in-out p-4 rounded`}>
          <div>
            <Image src="/git.png" width={50} height={50} alt="GitHub" />
          </div>
        </div>
        <div
          className={`col-span-2 row-span-3 sm:col-span-3 sm:row-span-2 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-1 ${gridItemClasses} cursor-pointer hover:bg-[#282828] transition-colors duration-300 ease-in-out p-4 rounded`}>
          <div>
            <Image src="/git.png" width={50} height={50} alt="Linkedin" />
          </div>
        </div>
        <div
          className={`col-span-2 row-span-3 sm:col-span-3 sm:row-span-2 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-1 ${gridItemClasses} cursor-pointer hover:bg-[#282828] transition-colors duration-300 ease-in-out p-4 rounded`}>
          <div>
            <Image src="/git.png" width={50} height={50} alt="Instagram" />
          </div>
        </div>
        <div
          className={`col-span-8 row-span-3 sm:col-span-8 sm:row-span-4 md:col-span-1 lg:col-span-2 lg:row-span-3 ${gridItemClasses} cursor-pointer`}>
          <Link href={"/hobby"} className="h-full w-full">
            <div className="h-full w-full rounded-2xl relative overflow-hidden">
              <Image
                className="h-full w-full object-cover"
                src="https://plus.unsplash.com/premium_photo-1716312756632-bf6d18b93a71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                      City of love
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
              <h1 className="text-lg mb-4 ">About</h1>
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
            alt="Author's Profile"
          />
        </div>
        <div
          className={`col-span-3 row-span-3 sm:col-span-7 sm:row-span-6 md:col-span-2 lg:col-span-2 lg:row-span-2 ${gridItemClasses}`}>
          <div className="p-5">
            <h1 className="text-lg mb-4">Contact</h1>
            <CopyToClipboard text={"asgarindo9@gmail.com"} />
          </div>
        </div>

        <div
          className={`col-span-8 row-span-3 sm:col-span-8 sm:row-span-6 md:col-span-3 lg:col-span-6 lg:row-span-2 ${gridItemClasses}`}>
          <div className="overflow-hidden mx-5 my-5 px-5 ">
            <h1 className="text-lg mb-10">Stack I Use</h1>

            <div className="group flex space-x-16 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">
              <div className="animate-loop-scroll group-hover:paused flex space-x-16">
                <Image
                  loading="lazy"
                  src="/javaScript-logo.png"
                  width={50}
                  height={50}
                  className="max-w-none h-10 w-10 grayscale hover:grayscale-0"
                  alt="Image 1"
                />
                <Image
                  loading="lazy"
                  src="/Vuejs.png"
                  width={50}
                  height={50}
                  className="max-w-none h-10 w-10 grayscale hover:grayscale-0"
                  alt="Image 2"
                />
                <Image
                  loading="lazy"
                  src="/TailwindCSS.png"
                  width={50}
                  height={50}
                  className="max-w-none h-10 w-14 grayscale hover:grayscale-0"
                  alt="Image 3"
                />
                <Image
                  loading="lazy"
                  src="/Express.png"
                  width={50}
                  height={50}
                  className="max-w-none h-10 w-10 grayscale hover:grayscale-0"
                  alt="Image 4"
                />
                <Image
                  loading="lazy"
                  src="/Mongodb.png"
                  width={50}
                  height={50}
                  className="max-w-none h-10 w-10 grayscale hover:grayscale-0 "
                  alt="Image 5"
                />
                <Image
                  loading="lazy"
                  src="/git.png"
                  width={50}
                  height={50}
                  className="max-w-none h-10 w-10 grayscale hover:grayscale-0"
                  alt="Image 6"
                />
                <Image
                  loading="lazy"
                  src="/Figma.png"
                  width={50}
                  height={50}
                  className="max-w-none h-12 w-12 grayscale hover:grayscale-0"
                  alt="Image 7"
                />
              </div>
              <div
                className="animate-loop-scroll group-hover:paused flex space-x-16"
                aria-hidden="true">
                <Image
                  loading="lazy"
                  src="/javaScript-logo.png"
                  width={300}
                  height={300}
                  className="max-w-none h-10 w-10 grayscale hover:grayscale-0"
                  alt="Image 1"
                />
                <Image
                  loading="lazy"
                  src="/Vuejs.png"
                  width={50}
                  height={50}
                  className="max-w-none h-10 w-10 grayscale hover:grayscale-0"
                  alt="Image 2"
                />
                <Image
                  loading="lazy"
                  src="/TailwindCSS.png"
                  width={50}
                  height={50}
                  className="max-w-none h-10 w-14 grayscale hover:grayscale-0"
                  alt="Image 3"
                />
                <Image
                  loading="lazy"
                  src="/Express.png"
                  width={50}
                  height={50}
                  className="max-w-none h-10 w-10 grayscale hover:grayscale-0"
                  alt="Image 4"
                />
                <Image
                  loading="lazy"
                  src="/Mongodb.png"
                  width={50}
                  height={50}
                  className="max-w-none h-10 w-10 grayscale hover:grayscale-0"
                  alt="Image 5"
                />
                <Image
                  loading="lazy"
                  src="/git.png"
                  width={50}
                  height={50}
                  className="max-w-none h-10 w-10 grayscale hover:grayscale-0"
                  alt="Image 6"
                />
                <Image
                  loading="lazy"
                  src="/Figma.png"
                  width={50}
                  height={50}
                  className="max-w-none h-12 w-12 grayscale hover:grayscale-0"
                  alt="Image 7"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtworks;
