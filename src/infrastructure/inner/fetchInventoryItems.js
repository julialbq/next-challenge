import { differenceInDays } from "date-fns";
import { getInventory } from "../outer/api/getInventory";

export const fetchInventoryItems = async () => {
  const response = await getInventory();

  const inventory = response.data;

  const itemsBySector = inventory.map((sector) => mapAllItems(sector));
  const allItems = itemsBySector.flatMap((itemsArray) => itemsArray);

  return allItems;
};

const mapAllItems = (inventoryBySector) => {
  const sector = inventoryBySector.sector;

  const itemsBySector = inventoryBySector.items;

  const item = itemsBySector.map((item) => ({
    id: item.id,
    type: item.type,
    brand: item.brand,
    model: item.model,
    sector: sector,
    fragility: item.fragility,
    lastMaintenance: `${item.last_maintenance.day}/${item.last_maintenance.month}/${item.last_maintenance.year}`,
    wear: calculateWear(item.fragility, item.last_maintenance),
  }));

  return item;
};

const calculateWear = (fragility, lastMaintenance) => {
  const fragilityMultiplier = [0.5, 3, 6, 11, 27];

  const daysSinceLastMaintenance = differenceInDays(
    new Date(),
    new Date(
      parseInt(lastMaintenance.year),
      parseInt(lastMaintenance.month),
      parseInt(lastMaintenance.day)
    )
  );

  const wear = fragilityMultiplier[fragility - 1] * daysSinceLastMaintenance;

  return Math.min(1000, wear);
};
