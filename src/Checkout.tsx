import Nav from "./components/Nav.tsx";
import { useItemCount } from "./context/ItemCountContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartItems, setCartItems } = useItemCount();
  const [inputCounts, setInputCounts] = useState<{
    [key: string]: string | number;
  }>({});

  useEffect(() => {
    const initialCounts = cartItems.reduce(
      (acc, item) => {
        acc[item.title] = item.quantity;
        return acc;
      },
      {} as { [key: string]: number },
    );
    setInputCounts(initialCounts);
  }, [cartItems]);

  const handleDeleteItem = (title: string) => {
    setCartItems((current) => current.filter((item) => item.title !== title));
    setInputCounts((prev) => {
      const newCounts = { ...prev };
      delete newCounts[title];
      return newCounts;
    });
  };

  const handleClickDecrease = (title: string) => {
    const currentCount = Number(inputCounts[title]) || 1;
    const newCount = currentCount - 1 === 0 ? 1 : currentCount - 1;
    setInputCounts((prev) => ({
      ...prev,
      [title]: newCount,
    }));
    setCartItems((current) =>
      current.map((item) =>
        item.title === title ? { ...item, quantity: newCount } : item,
      ),
    );
  };

  const handleClickIncrease = (title: string) => {
    const currentCount = Number(inputCounts[title]) || 1;
    const newCount = Math.min(currentCount + 1, 99);
    setInputCounts((prev) => ({
      ...prev,
      [title]: newCount,
    }));
    setCartItems((current) =>
      current.map((item) =>
        item.title === title ? { ...item, quantity: newCount } : item,
      ),
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    title: string,
  ) => {
    const newVal = e.target.value;
    if (newVal.length <= 2) {
      setInputCounts((prev) => ({
        ...prev,
        [title]: newVal === "" ? "" : Math.max(1, Number(newVal)),
      }));
    }
  };

  const handleInputBlur = (title: string) => {
    setInputCounts((prev) => ({
      ...prev,
      [title]: prev[title] === "" || Number(prev[title]) <= 0 ? 1 : prev[title],
    }));
    setCartItems((current) =>
      current.map((item) =>
        item.title === title
          ? {
              ...item,
              quantity: Number(inputCounts[title]),
            }
          : item,
      ),
    );
  };

  return (
    <div className="relative">
      <Nav />
      <div className="flex min-h-screen flex-col items-center justify-center gap-16 p-8 pb-16">
        <div className="animate-float mt-32 flex max-w-[70ch] flex-col items-center gap-6">
          <h1 className="text-center text-5xl font-bold text-[#1E293E]">
            Almost <span className="text-[#004687] italic">There</span>
          </h1>
          <p className="text-center text-gray-600 italic">
            You've curated style with intention &mdash; now it's time to make it
            yours. Our streamlined checkout is designed for ease, speed, and
            total confidence
          </p>
          <p className="text-center text-gray-600 italic">
            Secure. Seamless. Effortless from cart to closet
          </p>
        </div>
        <div className="card-shadow flex w-full max-w-[50vw] flex-col items-center justify-center bg-white p-4 px-8 pb-8 max-xl:max-w-[90vw]">
          <h2 className="text-2xl font-bold max-md:max-w-[20ch] max-md:text-center">
            REVIEW YOUR ORDER{" "}
            <span className="text-[#004687]">({cartItems.length} ITEMS)</span>
          </h2>
          <hr className="mt-4 mb-8 w-full border-t-2 border-solid border-[#004687]" />
          {cartItems.length === 0 ? (
            <p className="text-bold text-center text-gray-600 italic">
              Your cart is empty. Start shopping to fill it up!
            </p>
          ) : (
            <div className="flex w-full max-w-[50vw] flex-col items-center justify-center gap-12 max-xl:max-w-full">
              {cartItems.map((cartItem) => (
                <div
                  key={cartItem.title}
                  className="grid w-full grid-cols-4 gap-x-6 gap-y-4 max-md:grid-cols-5"
                >
                  <img
                    src={cartItem.image}
                    alt={cartItem.title}
                    className="col-span-1 h-48 w-48 self-center justify-self-center rounded-md border-2 border-gray-300 object-contain p-2 max-md:col-span-2 max-md:size-34"
                  />
                  <div className="col-span-3 flex flex-col items-start justify-between max-md:col-span-3">
                    <div className="flex w-full items-center justify-between">
                      <h3 className="text-lg font-bold">{cartItem.title}</h3>
                      <button
                        onClick={() => handleDeleteItem(cartItem.title)}
                        type="button"
                        className="inline-flex items-center justify-center rounded-md bg-white p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                      >
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className="text-pretty max-md:hidden">
                      {cartItem.description.charAt(0).toUpperCase() +
                        cartItem.description.slice(1)}
                    </p>
                    <div className="flex w-full items-center justify-between gap-2 max-md:grid max-md:grid-rows-2">
                      <div className="flex items-center justify-start gap-2 max-md:row-2 max-sm:col-span-3 max-sm:justify-start">
                        <p className="max-sm:hidden">Quantity: </p>
                        <div className="flex items-center justify-center gap-2">
                          <div
                            onClick={() => handleClickDecrease(cartItem.title)}
                            className="flex size-7 cursor-pointer items-center justify-center rounded-lg bg-[#004687] px-2 py-2 font-bold text-white transition select-none active:scale-90"
                          >
                            -
                          </div>
                          <input
                            type="number"
                            value={inputCounts[cartItem.title]}
                            onChange={(e) =>
                              handleInputChange(e, cartItem.title)
                            }
                            onBlur={() => handleInputBlur(cartItem.title)}
                            className="w-7 appearance-none rounded-md border-2 border-[#004687] text-center font-semibold text-black outline-0"
                            max="99"
                            min="1"
                          />
                          <div
                            onClick={() => handleClickIncrease(cartItem.title)}
                            className="flex size-7 cursor-pointer items-center justify-center rounded-lg bg-[#004687] px-2 py-2 font-bold text-white transition select-none active:scale-90"
                          >
                            +
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        <p className="text-2xl font-bold">
                          $
                          {cartItem.price * Number(inputCounts[cartItem.title])}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {cartItems.length > 0 && (
            <div className="flex w-full flex-col items-center justify-center">
              <hr className="mt-8 mb-4 w-full border-t-2 border-solid border-[#004687]" />
              <h2 className="flex w-full items-center justify-between text-2xl font-bold">
                <div>SUBTOTAL</div>
                <div>
                  {cartItems.length > 0
                    ? ` $${cartItems
                        .reduce(
                          (acc, item) =>
                            acc + item.price * Number(inputCounts[item.title]),
                          0,
                        )
                        .toFixed(2)}`
                    : "0.00"}
                </div>
              </h2>
              <Link to="/exit">
                <button
                  type="button"
                  className="mt-4 rounded-lg bg-[#004687] px-6 py-4 text-3xl font-bold text-white transition hover:-translate-y-2 hover:scale-105 hover:shadow-2xl max-md:mt-6 max-md:text-2xl"
                >
                  Check Out
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
