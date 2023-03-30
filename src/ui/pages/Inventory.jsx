import { InventoryItem } from "../components/InventoryItem";
import cx from "./Inventory.module.scss";

export const Inventory = ({inventoryItems}) => {
  return (
    <div className={cx.inventoryContainer}>
      {inventoryItems.map((item) => (
        <InventoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};
