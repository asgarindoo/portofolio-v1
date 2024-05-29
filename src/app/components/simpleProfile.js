import React from "react";

import {
  FaLocationDot,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Profile = () => {
  return (
    <div className="flex justify-center items-center h-96 ">
      <div className="max-w-xl rounded overflow-hidden shadow-lg h-full w-full bg-[#171717]">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center mb-4">
              <img
                className="w-20 h- rounded-full border-2 border-[#c4c4c4] border-opacity-50 mr-4"
                src="/profile.jpg"
                alt="Profile"
              />
              <div>
                <div className="font-semibold text-[#c4c4c4] text-md">
                  Asgarindo Dwiki Ibrahim Adji
                </div>
                <p className="text-[#c4c4c4] opacity-70 text-sm">
                  Frontend Developer
                </p>
                <div className="flex items-center text-[14px] mt-2">
                  <span className="text-[#c4c4c4] opacity-70 mr-1">
                    {" "}
                    <FaLocationDot />
                  </span>
                  <span className="text-[#c4c4c4] opacity-70">
                    Surabaya, Indonesia
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-5">
            <div className="flex-1 text-center px-4">
              <p className="text-xl font-bold">10</p>
              <p className="text-[#c4c4c4]">Tools</p>
            </div>
            <div className="flex-1 text-center px-4">
              <p className="text-xl font-bold">4</p>
              <p className="text-[#c4c4c4]">Leanguage</p>
            </div>
            <div className="flex-1 text-center px-4">
              <p className="text-xl font-bold">6</p>
              <p className="text-[#c4c4c4]">Project</p>
            </div>
          </div>

          <div className="flex items-center justify-center m-10">
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c4c4c4 bg-[#282828] hover:bg-[#303030] p-2 rounded mr-4 hover:animate-bounce">
              <p className="text-[#c4c4c4] text-xl font-extrabold">CV</p>
            </a>
            <a
              href="https://www.instagram.com/dwikiy_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c4c4c4] bg-[#282828] hover:bg-[#303030] p-2 rounded mr-4 hover:animate-bounce">
              <FaInstagram className="w-7 h-7" />
            </a>

            <a
              href="https://github.com/asgarindoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c4c4c4] bg-[#282828] hover:bg-[#303030] p-2 rounded mr-4 hover:animate-bounce">
              <FaGithub className="w-7 h-7" />
            </a>
            <a
              href="https://linkedin.com/in/asgarindoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c4c4c4] bg-[#282828] hover:bg-[#303030] p-2 rounded hover:animate-bounce ">
              <FaLinkedinIn className="w-7 h-7" />
            </a>
          </div>
        </div>

        <div className="w-full h-full bg-[#282828] text-[#c4c4c4] text- ">
          <p className="text-center py-4">
            &copy; 2024 asgarindoo. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
