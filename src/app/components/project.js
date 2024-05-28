import { FaExternalLinkAlt, FaCodeBranch } from "react-icons/fa";

const Project = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "This project involves creating a full-stack web application for an e-commerce platform using Next.js and Tailwind CSS.",
      stack: ["Next.js", "Tailwind CSS"],
      image: "https://via.placeholder.com/400",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "Mobile Task Manager",
      description:
        "This project focuses on building a mobile task manager application using React Native.",
      stack: ["React Native"],
      image: "https://via.placeholder.com/400",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "Stock Price Predictor",
      description:
        "This project is about developing a machine learning model to predict stock prices using Python and TensorFlow.",
      stack: ["Python", "TensorFlow"],
      image: "https://via.placeholder.com/400",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "Corporate Website Redesign",
      description:
        "This project entails redesigning the corporate website of a tech company with a modern user interface.",
      stack: ["UI/UX Design"],
      image: "https://via.placeholder.com/400",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "Weather Forecasting API",
      description:
        "This project involves building a RESTful API for a weather forecasting application using Node.js and Express.",
      stack: ["Node.js", "Express"],
      image: "https://via.placeholder.com/400",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
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
          <p className="text-[#a9a9a9] mb-2 pr-3 group-hover:max-w-[70%] transition-all ease-in-out duration-300">
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
            <img
              src={project.image}
              alt={project.title}
              className="max-h-full max-w-full"
            />
          </div>
          <div className="flex space-x-4 absolute bottom-4 left-4 text-sm">
            <a
              href={project.demoLink}
              className="text-[#c4c4c4] hover:underline flex items-center ml-5"
              target="_blank"
              rel="noopener noreferrer">
              <FaExternalLinkAlt className="mr-1" />
              Demo
            </a>
            <a
              href={project.githubLink}
              className="text-[#c4c4c4] hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer">
              <FaCodeBranch className="mr-1" />
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
