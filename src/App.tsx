import "./App.css";
import Nav from "./components/Nav.tsx";

const App = () => {
  return (
    <>
      <Nav itemCount={0} />
      <div className="w-[clamp(300px, 50vw, 100vw)] flex flex-col items-center gap-8">
        <h1 className="text-5xl font-bold text-[#1E293E]">
          Welcome to <span className="text-[#004687]">Threadware</span>
        </h1>
        <p className="text-gray-600">
          Where style meets innovation. Threadware is your destination for
          cutting-edge fashion fused with smart design. From elevated streetwear
          to tech-infused essentials, we bring you apparel and accessories that
          don't just look good -- they think forward. Minimal. Modern. Made for
          life in motion.
        </p>
      </div>
    </>
  );
};

export default App;
