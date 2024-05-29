import Head from "next/head";
import Sidebar from "../components/sidebar";
import EmbeddedResume from "../components/resume";

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
        <div className="w-full md:w-2/3 pr-10">
          <EmbeddedResume />
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

export default Resume;
