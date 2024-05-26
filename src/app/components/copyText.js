// src/app/components/copyText.js
"use client"; // Tambahkan ini di bagian atas file

import { useState } from "react";

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
        className="bg-[#282828]  text-[#c4c4c4] w-40 py-2 px-6 rounded-lg hover:bg-[#303030] transition-colors duration-300 ease-in-out">
        {isCopied ? "Copied!" : "Copy Email"}
      </button>
    </div>
  );
};

export default CopyToClipboard;
