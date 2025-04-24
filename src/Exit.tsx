import Nav from "./components/Nav.tsx";
import { useState, useEffect } from "react";

const Exit = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  });

  return (
    <div className="relative">
      <Nav />
      {loading ? (
        <div className="flex min-h-screen items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-[#004687]"></div>
        </div>
      ) : (
        <div className="flex min-h-screen items-center justify-center">
          <div className="animate-float flex max-w-[70ch] flex-col items-center gap-6">
            <h1 className="text-center text-5xl font-bold text-[#1E293E]">
              You're all <span className="text-[#004687] italic">Set!</span>
            </h1>
            <p className="text-center text-gray-600 italic max-md:max-w-[70vw]">
              Your order is being processed and will be shipped to you shortly.
            </p>
            <p className="text-center text-gray-600 italic">
              Thank you for shopping with us!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Exit;
