import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FaStar } from "react-icons/fa";
import { useItemCount } from "../context/ItemCountContext";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Card = () => {
  const [productArr, setProductArr] = useState<Product[]>([]);
  const [inputCounts, setInputCounts] = useState<{
    [key: number]: number | string;
  }>({});
  const { setItemCount } = useItemCount();

  const stars = Array(5).fill(0);

  const handleAddToCart = (id: number) => {
    const count = Number(inputCounts[id] || 1);
    setItemCount((prev) => prev + count);
  };

  const handleClickDecrease = (id: number) => {
    setInputCounts((prev) => ({
      ...prev,
      [id]: (Number(prev[id]) || 1) - 1 === 0 ? 1 : (Number(prev[id]) || 1) - 1,
    }));
  };

  const handleClickIncrease = (id: number) => {
    setInputCounts((prev) => ({
      ...prev,
      [id]: Math.min(Number(prev[id] || 1) + 1, 99),
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
  ) => {
    const value = e.target.value;
    if (value.length <= 2) {
      setInputCounts((prev) => ({
        ...prev,
        [id]: value === "" ? "" : Math.max(1, Number(value)),
      }));
    }
  };

  const handleInputBlur = (id: number) => {
    setInputCounts((prev) => ({
      ...prev,
      [id]: prev[id] === "" || Number(prev[id]) <= 0 ? 1 : prev[id],
    }));
  };

  useEffect(() => {
    const fetchProductData = async () => {
      const promises = [];
      for (let i = 1; i <= 20; i++) {
        promises.push(
          fetch(`https://fakestoreapi.com/products/${i}`).then((response) => {
            if (response.status >= 400) {
              throw new Error("server error");
            }
            return response.json();
          }),
        );
      }

      try {
        const products = await Promise.all(promises);
        setProductArr(products);
      } catch (error) {
        console.error("Error fetching products data:", error);
      }
    };

    fetchProductData();
  }, []);

  return (
    <div className="grid max-w-[75vw] grid-cols-4 gap-4">
      {productArr.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center justify-between gap-4 rounded-xl border-1 border-gray-300 bg-white p-6 shadow-xl"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full object-contain"
          />
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <div className="flex w-full flex-col items-center justify-center gap-6">
            <div className="flex w-full items-center justify-between">
              <div className="text-2xl font-bold">${product.price}</div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  {stars.map((_, index) => {
                    return (
                      <FaStar
                        key={index}
                        size={24}
                        color={
                          product.rating.rate > index ? "#F2C265" : "a9a9a9"
                        }
                      ></FaStar>
                    );
                  })}
                </div>
                <div className="text-lg font-semibold">
                  {product.rating.rate}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div
                onClick={() => handleClickDecrease(product.id)}
                className="flex size-8 cursor-pointer items-center justify-center rounded-lg bg-[#004687] px-4 py-2 font-bold text-white transition select-none active:scale-90"
              >
                -
              </div>
              <input
                onChange={(e) => handleInputChange(e, product.id)}
                onBlur={() => handleInputBlur(product.id)}
                type="number"
                className="size-8 appearance-none rounded-md border-2 border-[#004687] text-center font-semibold text-black outline-0"
                value={inputCounts[product.id] ?? 1}
                max="99"
                min="1"
              />
              <div
                onClick={() => handleClickIncrease(product.id)}
                className="flex size-8 cursor-pointer items-center justify-center rounded-lg bg-[#004687] px-4 py-2 font-bold text-white transition select-none active:scale-90"
              >
                +
              </div>
            </div>
            <button
              onClick={() => handleAddToCart(product.id)}
              type="button"
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#004687] px-4 py-2 font-semibold text-white transition active:scale-95"
            >
              <FontAwesomeIcon icon={faCartShopping} />
              <div>Add To Cart</div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
