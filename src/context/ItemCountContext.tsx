import React, { createContext, useContext, useState } from "react";

interface CartItem {
  title: string;
  price: number;
  quantity: number;
}

interface ItemCountContextType {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const ItemCountContext = createContext<ItemCountContextType | undefined>(
  undefined,
);

export const ItemCountProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <ItemCountContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </ItemCountContext.Provider>
  );
};

export const useItemCount = (): ItemCountContextType => {
  const context = useContext(ItemCountContext);
  if (!context) {
    throw new Error("useItemCount must be used within an ItemCountProvider");
  }
  return context;
};
