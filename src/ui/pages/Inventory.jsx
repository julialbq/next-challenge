import { useInventory } from "../../application/hooks/useInventory";
import { InventoryItem } from "../components/InventoryItem";
import cx from "./Inventory.module.scss";

export const Inventory = () => {
  const { inventoryItems, isLoading } = useInventory();

  return (
    <div className={cx.inventoryContainer}>
      {inventoryItems.map((item) => (
        <InventoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};
