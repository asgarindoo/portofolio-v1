import Head from "next/head";
import Sidebar from "../components/sidebar";
import Project from "../components/project";

const ProjectPage = () => {
  return (
    <div className="bg-[#0d0d0d] min-h-screen">
      <Head>
        <title>Project</title>
        <meta name="description" content="Description of my project." />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-wrap">
        <div className="w-full md:w-2/3 pr-10">
          <h1 className="text-4xl text-[#c4c4c4] mb-10 font-manrope">
            Project 👀
          </h1>

          <Project />

          {/* Add more projects as needed */}
        </div>
        <div className="md:w-1/3">
          <div className="sticky top-10">
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;
