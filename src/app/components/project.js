import { FaExternalLinkAlt, FaCodeBranch } from "react-icons/fa";
import Image from "next/image";

const Project = () => {
  const projects = [
    {
      title: "asgarindoo.vercel.app",
      description:
        "My personal portfolio website designed with a modern and elegant bento user interface (UI)",
      stack: ["Next.js", "Tailwind CSS"],
      image: "/projectImage/p4.png",
      demoLink: "asgarindoo.vercel.app",
      githubLink: "https://github.com/asgarindoo/Portofolio-v1",
    },
    {
      title: "Glamour Gateway",
      description: "International Beauty Product Delivery Service Website",
      stack: ["MongoDB", "Express.js", "Vue.js", "Node.js", "Tailwind CSS"],
      image: "/projectImage/p3.png",
      demoLink: "",
      githubLink: "https://github.com/asgarindoo/Glamour-Gateway",
    },
    {
      title: "LIVING LOFT",
      description:
        "An e-commerce platform that offers a wide range of furniture products in various styles and qualities.",
      stack: ["HTML", "CSS", "JavaScript"],
      image: "/projectImage/p2.png",
      demoLink: "https://asgarindoo.github.io/SemanticHtml/",
      githubLink: "https://github.com/asgarindoo/SemanticHtml",
    },
    {
      title: "Redesign Disbudpar Kabupaten Brebes",
      description:
        "The Redesign and Development of Disbudpar Kabupaten Brebes project aimed to modernize the official website of the Department of Culture and Tourism (Disbudpar) of Brebes Regency.",
      stack: ["ASP.NET", "Razor Pages", "CSS", "JavaScript", "C#"],
      image: "/projectImage/p1.png",
      demoLink: "",
      githubLink: "https://github.com/asgarindoo/Redesign-disbudpar",
    },
  ];

  return (
    <div className="space-y-6 animate-fade-down">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-[#171717] p-8 rounded-lg shadow-md relative group overflow-hidden cursor-auto h-64">
          <h2 className="text-2xl text-[#c4c4c4] font-manrope mb-4">
            {project.title}
          </h2>
          <p className="text-[#a9a9a9] mb-2 pr-3 group-hover:max-w-[68%] transition-all ease-in-out duration-300">
            {project.description}
          </p>
          <div className="flex flex-wrap mb-4">
            {project.stack.map((tech, index) => (
              <span
                key={index}
                className="bg-[#313131] text-[#c4c4c4] px-2 py-2 rounded-md text-xs mr-2 mb-2">
                {tech}
              </span>
            ))}
          </div>
          <div className="absolute inset-y-0 right-0 w-1/3 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              className="max-h-full max-w-full object-cover"
            />
          </div>
          <div className="flex space-x-4 absolute bottom-4 left-4 text-sm">
            <a
              href={project.githubLink}
              className="text-[#c4c4c4] hover:underline flex items-center ml-5"
              target="_blank"
              rel="noopener noreferrer">
              <FaCodeBranch className="mr-1" />
              GitHub
            </a>
            <a
              href={project.demoLink}
              className="text-[#c4c4c4] hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer">
              <FaExternalLinkAlt className="mr-1" />
              Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
