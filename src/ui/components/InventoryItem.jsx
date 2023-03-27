import { representFragilityByTerm } from "../../domain/representFragilityByTerm";
import { representWearByTerm } from "../../domain/representWearByTerm";
import cx from "./InventoryItem.module.scss";

export const InventoryItem = ({ item }) => {
  const itemFragility = representFragilityByTerm(item.fragility);
  const itemWear = representWearByTerm(item.wear);
  const iWear = itemWear.toLowerCase().replace(" h", "H");

  return (
    <div className={`${cx.itemContainer} ${cx[iWear]}`}>
      <h2>
        {item.type} | {item.brand} {item.model}
      </h2>
      <p>Sector: {item.sector}</p>
      <p>Fragility: {itemFragility}</p>
      <p>Last Maintenance: {item.lastMaintenance}</p>
      <p>Wear: {itemWear}</p>
    </div>
  );
};
