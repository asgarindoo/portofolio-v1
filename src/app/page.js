import FeaturedArtworks from "./components/FeaturedArtworks";
import CursorTrail from "./components/CursorTrail";

const HomePage = () => {
  return (
    <div className="lg:overflow-hidden lg:w-screen lg:h-screen">
      <CursorTrail />
      <FeaturedArtworks />;
    </div>
  );
};

export default HomePage;
