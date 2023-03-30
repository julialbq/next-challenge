import { fetchInventoryItems } from "@/infrastructure/inner/fetchInventoryItems";
const { Inventory } = require("@/ui/pages/Inventory");

const inventoryPage = ({ inventoryItems, isLoading }) => {
  if (isLoading) {
    return <>Loading...</>;
  }
  
  return <Inventory inventoryItems={inventoryItems} />;
};

export async function getServerSideProps() {
  const inventoryItems = await fetchInventoryItems();

  const isLoading = inventoryItems === undefined;

  return {
    props: { inventoryItems, isLoading },
  };
}

export default inventoryPage;
