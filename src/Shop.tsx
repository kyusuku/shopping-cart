import { useState, useEffect } from "react";
import Nav from "./components/Nav.tsx";
import Card from "./components/Card.tsx";

const Shop = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <Nav />
      {loading ? (
        <div className="flex min-h-screen items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-[#004687]"></div>
        </div>
      ) : (
        <div className="flex min-h-screen flex-col items-center justify-center gap-16 p-8">
          <div className="animate-float mt-32 flex max-w-[80ch] flex-col items-center gap-6">
            <h1 className="text-center text-5xl font-bold text-[#1E293E]">
              Shop the <span className="text-[#004687]">Future</span>
            </h1>
            <p className="text-center text-gray-600">
              Discover fashion engineered for the modern world. In our curated
              shop, every piece blends form and function &mdash; from adaptable
              streetwear to precision-cut essentials. Built with purpose, worn
              with style
            </p>
            <p className="text-center text-gray-600">
              Smart. Seamless. Ready when you are
            </p>
          </div>
          <Card />
        </div>
      )}
    </div>
  );
};

export default Shop;
