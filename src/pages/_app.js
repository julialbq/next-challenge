import { InventoryProvider } from "@/application/providers/InventoryProvider";
import { Header } from "@/ui/components/Header";
import "../ui/styles/global.scss";

export function App({ Component, pageProps }) {
  return (
    <>
      <Header />

      <Component {...pageProps} />
    </>
  );
}

export default App;
