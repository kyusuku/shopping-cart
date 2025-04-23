import "./App.css";
import Nav from "./components/Nav.tsx";

const App = () => {
  return (
    <div className="relative">
      <Nav itemCount={0} />
      <div className="flex min-h-screen flex-col items-center justify-center gap-24 p-8">
        <div className="animate-float flex max-w-[80ch] flex-col items-center gap-6">
          <h1 className="text-center text-5xl font-bold text-[#1E293E]">
            Welcome to <span className="text-[#004687]">Threadware</span>
          </h1>
          <p className="text-center text-gray-600">
            Where style meets innovation. Threadware is your destination for
            cutting-edge fashion fused with smart design. From elevated
            streetwear to tech-infused essentials, we bring you apparel and
            accessories that don't just look good &mdash; they think forward
          </p>
          <p className="text-center text-gray-600">
            Minimal. Modern. Made for life in motion
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
          <div className="flex flex-col gap-4 bg-white p-4 text-center shadow-xl transition hover:-translate-y-4">
            <h2 className="text-2xl font-bold">Engineered for expression</h2>
            <h2 className="text-2xl font-bold">🧠✨</h2>
            <p className="text-gray-600">
              Threadware merges sleek aesthetics with adaptive materials that
              move with you &mdash; style, meet intelligence
            </p>
          </div>
          <div className="flex flex-col gap-4 bg-white p-4 text-center shadow-xl transition hover:-translate-y-4">
            <h2 className="text-2xl font-bold">Function meets form</h2>
            <h2 className="text-2xl font-bold">🔌👕</h2>
            <p className="text-gray-600">
              From hidden pockets to responsive textiles, our gear is designed
              to work as smart as it looks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
