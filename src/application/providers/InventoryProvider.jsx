import { createContext, useEffect, useMemo, useState } from "react";
import { fetchInventoryItems } from "../../infrastructure/inner/fetchInventoryItems";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {
    fetchInventoryItems().then((data) => setInventoryItems(data));
  }, []);

  const value = useMemo(
    () => ({ inventoryItems, setInventoryItems }),
    [inventoryItems, setInventoryItems]
  );

  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  )
};
