import { useContext } from "react";
import { InventoryContext } from "../providers/InventoryProvider";

export const useInventory = () => {
  const value = useContext(InventoryContext);

  if (value === undefined) {
    throw new Error("You forgot InventoryProvider!");
  }

  const { inventoryItems } = value;


  const isLoading = inventoryItems === undefined;

  return {
    inventoryItems,
    isLoading
  };
};
