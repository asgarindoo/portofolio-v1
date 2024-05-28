import Profile from "../components/simpleProfile";
import CopyToClipboard from "../components/copyText";

const Sidebar = () => {
  return (
    <div className="w-full">
      <Profile />
      <div className="bg-[#171717] mt-4">
        <iframe
          src="https://open.spotify.com/embed/playlist/4N1kznwvefGMWRheqWL2q7?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"></iframe>
      </div>
      <div className="bg-[#171717] mt-4 flex">
        <CopyToClipboard text="asgarindo9@gmail.com" />
        <p className="text-md font-medium text-[#c4c4c4] font-manrope mt-2 mx-auto">
          Have Project in Mind?
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
