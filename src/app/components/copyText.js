// src/app/components/copyText.js
"use client"; // Tambahkan ini di bagian atas file

import { useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa6";

const CopyToClipboard = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 5000);
    });
  };

  return (
    <div>
      <button
        onClick={handleCopy}
        className="bg-[#282828]  text-[#c4c4c4] py-2 px-6 w-40 rounded-lg hover:bg-[#313131] transition-colors duration-300 ease-in-out">
        <span className="flex justify-center space-x-2">
          {isCopied ? (
            <>
              <span>Copied!</span>
              <FaCheck />
            </>
          ) : (
            <>
              <span>Copy Email</span>
              <FaCopy />
            </>
          )}
        </span>
      </button>
    </div>
  );
};

export default CopyToClipboard;
