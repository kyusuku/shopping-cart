import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useItemCount } from "../context/ItemCountContext";

const Nav = () => {
  const { cartItems } = useItemCount();
  const location = useLocation();
  const totalItems = cartItems.length;

  return (
    <div className="fixed top-0 z-2 flex w-full items-center justify-between bg-white px-8 py-4 shadow-[0_2px_5px_-2px_gray]">
      <Link to="/" className="text-3xl font-bold text-[#004687]">
        Threadware
      </Link>
      <div className="text-md absolute left-1/2 flex -translate-x-1/2 transform gap-8 font-semibold">
        <Link
          to="/"
          className={`rounded-md px-4 py-2 transition hover:-translate-y-1 hover:bg-[#bdddfa] ${
            location.pathname === "/" ? "bg-[#bdddfa] text-[#004687]" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/shop"
          className={`rounded-md px-4 py-2 transition hover:-translate-y-1 hover:bg-[#bdddfa] ${
            location.pathname === "/shop" ? "bg-[#bdddfa] text-[#004687]" : ""
          }`}
        >
          Shop
        </Link>
      </div>
      <Link to="/checkout">
        <div
          className={`flex items-center gap-4 rounded-md px-4 py-2 transition hover:scale-105 hover:bg-[#bdddfa] ${
            location.pathname === "/checkout" ? "bg-[#bdddfa]" : ""
          }`}
        >
          <FontAwesomeIcon icon={faCartShopping} />
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#004687]">
            <p className="font-bold text-white">
              {totalItems > 99 ? "99" : totalItems}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Nav;
