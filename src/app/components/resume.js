const embeddedResume = () => {
  return (
    <div className="bg-[#171717] ">
      <iframe
        src="/myresume.pdf"
        className="w-full h-screen md:h-[1100px] overflow-hidden"
        allowFullScreen
        frameBorder="0"></iframe>
    </div>
  );
};

export default embeddedResume;
