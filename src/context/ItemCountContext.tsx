import React, { createContext, useContext, useState } from "react";

interface ItemCountContextType {
  itemCount: number;
  setItemCount: React.Dispatch<React.SetStateAction<number>>;
}

const ItemCountContext = createContext<ItemCountContextType | undefined>(
  undefined,
);

export const ItemCountProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <ItemCountContext.Provider value={{ itemCount, setItemCount }}>
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
