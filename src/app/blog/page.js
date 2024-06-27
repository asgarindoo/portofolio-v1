import Head from "next/head";
import Sidebar from "../components/sidebar";
import BlogPost from "../components/BlogPost";
import BackToHomeIcon from "../components/BackToHome";
import CursorTrail from "../components/CursorTrail";

const BlogPage = () => {
  return (
    <div className="bg-[#0d0d0d] min-h-screen">
      <CursorTrail />
      <Head>
        <title>Blog</title>
        <meta name="description" content="Description of my blog." />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-wrap">
        <div className="w-full md:w-2/3 md:pr-10">
          <h1 className="flex justify-between text-4xl text-[#c4c4c4] mb-10 font-manrope">
            <p>Blog 📝</p>
            <BackToHomeIcon />
          </h1>

          {/* Render BlogPosts */}
          <BlogPost />

          {/* Add more blog posts as needed */}
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

export default BlogPage;
