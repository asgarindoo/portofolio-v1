import FeaturedArtworks from "./components/FeaturedArtworks";
import MouseTrail from "./components/MouseTrail";

const HomePage = () => {
  return (
    <div className="lg:overflow-hidden lg:w-screen lg:h-screen">
      <MouseTrail />
      <FeaturedArtworks />;
    </div>
  );
};

export default HomePage;
