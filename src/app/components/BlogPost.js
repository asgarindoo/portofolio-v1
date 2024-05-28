import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const BlogPost = () => {
  const blogPosts = [
    {
      id: "1",
      title: "Lorem Ipsum 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed eu ligula felis. Quisque tempus augue vel ligula pellentesque, nec accumsan est varius. Donec finibus tortor in posuere auctor. Phasellus ut gravida risus.",
      date: "May 15, 2024",
    },
    {
      id: "2",
      title: "Lorem Ipsum 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed eu ligula felis. Quisque tempus augue vel ligula pellentesque, nec accumsan est varius. Donec finibus tortor in posuere auctor. Phasellus ut gravida risus.",
      date: "June 2, 2024",
    },
    {
      id: "3",
      title: "Lorem Ipsum 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed eu ligula felis. Quisque tempus augue vel ligula pellentesque, nec accumsan est varius. Donec finibus tortor in posuere auctor. Phasellus ut gravida risus.",
      date: "July 10, 2024",
    },
    {
      id: "4",
      title: "Lorem Ipsum 4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed eu ligula felis. Quisque tempus augue vel ligula pellentesque, nec accumsan est varius. Donec finibus tortor in posuere auctor. Phasellus ut gravida risus.",
      date: "August 18, 2024",
    },
    {
      id: "5",
      title: "Lorem Ipsum 5",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed eu ligula felis. Quisque tempus augue vel ligula pellentesque, nec accumsan est varius. Donec finibus tortor in posuere auctor. Phasellus ut gravida risus.",
      date: "September 5, 2024",
    },
  ];

  return (
    <div className="space-y-6">
      {blogPosts.map((post) => (
        <div key={post.id} className="bg-[#171717] p-8 rounded-lg shadow-md">
          <h2 className="text-2xl text-[#c4c4c4] font-manrope mb-2">
            {post.title}
          </h2>
          <p className="text-[#a9a9a9] mb-4">{post.content}</p>

          <div className="flex justify-between items-center mt-6 text-[#a9a9a9]">
            <Link href={`/blog/${post.slug}`}>
              <div className="flex items-center text-sm text-[#c4c4c4] hover:underline cursor-pointer">
                <p>Read More</p>
                <FaExternalLinkAlt className="ml-2" />
              </div>
            </Link>
            <p className="text-sm">{post.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
