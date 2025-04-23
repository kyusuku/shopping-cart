import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

interface propTypes {
  itemCount: number;
}

const Nav = ({ itemCount }: propTypes) => {
  const location = useLocation();

  return (
    <div className="absolute top-0 flex w-full items-center justify-between bg-white px-8 py-4 shadow-[0_2px_5px_-2px_gray]">
      <Link to="/" className="text-3xl font-bold text-[#004687]">
        Threadware
      </Link>
      <div className="text-md flex gap-8 font-semibold">
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
        <div className="flex items-center gap-4 rounded-md px-4 py-2 transition hover:scale-105 hover:bg-[#bdddfa]">
          <FontAwesomeIcon icon={faCartShopping} />
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#004687]">
            <p className="font-bold text-white">{itemCount}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Nav;
