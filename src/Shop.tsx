import { useState, useEffect } from "react";
import Nav from "./components/Nav.tsx";
import Card from "./components/Card.tsx";
import Dropdown from "./components/Dropdown.tsx";

const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const onCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

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
        <div className="flex min-h-screen flex-col items-center justify-center gap-16 p-8 pb-16">
          <div className="animate-float mt-32 flex max-w-[80ch] flex-col items-center gap-6">
            <h1 className="text-center text-5xl font-bold text-[#1E293E]">
              Shop the <span className="text-[#004687] italic">Future</span>
            </h1>
            <p className="text-center text-gray-600 italic">
              Discover fashion engineered for the modern world. In our curated
              shop, every piece blends form and function &mdash; from adaptable
              streetwear to precision-cut essentials. Built with purpose, worn
              with style
            </p>
            <p className="text-center text-gray-600 italic">
              Smart. Seamless. Ready when you are
            </p>
          </div>
          <div className="flex w-full max-w-[75vw] items-center justify-between">
            <div className="relative text-gray-600">
              <input
                onChange={(e) => handleSearchChange(e)}
                className="h-10 rounded-lg border border-gray-300 bg-white px-5 pr-10 text-sm placeholder-gray-600 transition hover:border-[#004687] focus:border-[#004687] focus:outline-none max-md:w-50 max-sm:h-9 max-sm:w-30"
                type="search"
                name="search"
                placeholder="Search products ..."
              />
              <button
                type="submit"
                className="absolute top-1/2 right-0 mr-4 -translate-y-1/2 transform"
              >
                <svg
                  className="h-4 w-4 fill-current text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  xmlSpace="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
            <Dropdown onCategoryChange={onCategoryChange} />
          </div>
          <Card searchQuery={searchQuery} selectedCategory={selectedCategory} />
        </div>
      )}
    </div>
  );
};

export default Shop;
