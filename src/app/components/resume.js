const embeddedResume = () => {
  return (
    <div className="bg-[#171717] ">
      <iframe
        src="/myresume.pdf"
        className="w-full"
        width="100%"
        height="1100 overflow-hidden"
        allowFullScreen="true"
        frameborder="0"></iframe>
    </div>
  );
};

export default embeddedResume;
