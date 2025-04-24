import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface propTypes {
  onCategoryChange: (category: string) => void;
}

export default function Dropdown({ onCategoryChange }: propTypes) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full cursor-pointer justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
          Categories
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <div
              onClick={() => onCategoryChange("")}
              className="block px-4 py-2 text-sm text-gray-700 select-none data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              All Products
            </div>
          </MenuItem>
          <MenuItem>
            <div
              onClick={() => onCategoryChange("electronics")}
              className="block px-4 py-2 text-sm text-gray-700 select-none data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Electronics
            </div>
          </MenuItem>
          <MenuItem>
            <div
              onClick={() => onCategoryChange("jewelery")}
              className="block px-4 py-2 text-sm text-gray-700 select-none data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Jewelery
            </div>
          </MenuItem>
          <MenuItem>
            <div
              onClick={() => onCategoryChange("men's clothing")}
              className="block px-4 py-2 text-sm text-gray-700 select-none data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Men's Clothing
            </div>
          </MenuItem>
          <MenuItem>
            <div
              onClick={() => onCategoryChange("women's clothing")}
              className="block px-4 py-2 text-sm text-gray-700 select-none data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Women's Clothing
            </div>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
