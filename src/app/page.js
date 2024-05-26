const FeaturedArtworks = () => {
  const gridItemClasses = `bg-[#171717] rounded-2xl flex justify-center items-center`;

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-6">
      <div className="grid h-full w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-11 gap-2 lg:gap-4">
        <div
          className={`col-span-8 row-span-7 sm:col-span-8 md:col-span-2 md:row-span-8 lg:col-span-5 lg:row-span-3 ${gridItemClasses}`}>
          <div className="m-16">
            <h1 className="text-4xl mb-4">Hi, I'm Asgarindoo</h1>
            <p className="text-xl opacity-55">
              Frontend Developer, currently studying at the State University of
              Surabaya
            </p>
          </div>
        </div>
        <div
          className={`col-span-2 row-span-6 sm:col-span-1 sm:row-span-4 md:col-span-1 lg:col-span-2 lg:row-span-5 ${gridItemClasses}`}>
          <div className="h-full w-full  rounded-2xl relative overflow-hidden">
            <img
              className="h-full w-full object-cover transition-transform duration-500 transform scale-100 hover:scale-110"
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Project"
            />
          </div>
        </div>
        <div
          className={`col-span-6 row-span-6 sm:col-span-1 sm:row-span-4 md:col-span-1 lg:col-span-2 lg:row-span-5 ${gridItemClasses}`}>
          <div className="h-full w-full  rounded-2xl relative overflow-hidden">
            <img
              className="h-full w-full object-cover transition-transform duration-500 transform scale-100 hover:scale-110"
              src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blog"
            />
          </div>
        </div>
        <div
          className={`col-span-2 row-span-3 sm:col-span-3 sm:row-span-2 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-1 ${gridItemClasses}`}>
          <div>
            <h1>Darkmode</h1>
          </div>
        </div>
        <div
          className={`col-span-2 row-span-3 sm:col-span-3 sm:row-span-2 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-1 ${gridItemClasses}`}>
          <div>
            <img src="https://source.unsplash.com/random/50x50" alt="GitHub" />
          </div>
        </div>
        <div
          className={`col-span-2 row-span-3 sm:col-span-3 sm:row-span-2 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-1 ${gridItemClasses}`}>
          <div>
            <img
              src="https://source.unsplash.com/random/50x50"
              alt="LinkedIn"
            />
          </div>
        </div>
        <div
          className={`col-span-2 row-span-3 sm:col-span-3 sm:row-span-2 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-1 ${gridItemClasses}`}>
          <div>
            <img
              src="https://source.unsplash.com/random/50x50"
              alt="Instagram"
            />
          </div>
        </div>
        <div
          className={`col-span-8 row-span-3 sm:col-span-8 sm:row-span-4 md:col-span-1 lg:col-span-2 lg:row-span-3 ${gridItemClasses}`}>
          <div className="h-full w-full  rounded-2xl relative overflow-hidden">
            <img
              className="h-full w-full object-cover transition-transform duration-500 transform scale-100 hover:scale-110"
              src="https://plus.unsplash.com/premium_photo-1716312756632-bf6d18b93a71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hobby"
            />
          </div>
        </div>
        <div
          className={`col-span-3 row-span-3 sm:col-span-8 sm:row-span-4 md:col-span-2 lg:col-span-2 lg:row-span-2 ${gridItemClasses}`}>
          <div className="p-5">
            <h1 className="text-xl mb-4 ">About</h1>
            <p className="text-md opacity-55">
              Information about you or your artwork.
            </p>
          </div>
        </div>
        <div
          className={`col-span-5 row-span-6 sm:col-span-1 sm:row-span-6 md:col-span-1 lg:col-span-3 lg:row-span-4 ${gridItemClasses}`}>
          <div
            className="h-full w-full bg-cover bg-center rounded-2xl"
            style={{
              backgroundImage: `url("https://plus.unsplash.com/premium_photo-1716312756632-bf6d18b93a71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            }}></div>
        </div>
        <div
          className={`col-span-3 row-span-3 sm:col-span-7 sm:row-span-6 md:col-span-2 lg:col-span-2 lg:row-span-2 ${gridItemClasses}`}>
          <div className="p-5">
            <h1 className="text-xl mb-4 ">Contact</h1>
            <p className="text-md opacity-55">Contact information or form.</p>
          </div>
        </div>
        <div
          className={`col-span-8 row-span-3 sm:col-span-8 sm:row-span-6 md:col-span-3 lg:col-span-6 lg:row-span-2 ${gridItemClasses}`}>
          <div className="">
            <h1 className="text-xl mb-4">Stack I Use</h1>
            <p className="text-md opacity-55">
              Details about the technologies you use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      <FeaturedArtworks />
    </div>
  );
};

export default HomePage;
