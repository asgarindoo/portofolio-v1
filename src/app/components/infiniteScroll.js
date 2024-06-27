import Image from "next/image";

const InfiniteScroll = () => {
  return (
    <div>
      <div className="overflow-hidden mx-5 px-5 ">
        <h1 className="text-lg mb-10 sm:mt-5">Stack I Use</h1>
      </div>
      <div className="group flex space-x-16 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">
        <div className="animate-loop-scroll group-hover:paused flex space-x-16">
          <Image
            loading="lazy"
            src="/Javascript.png"
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
            src="/Javascript.png"
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
  );
};

export default InfiniteScroll;
