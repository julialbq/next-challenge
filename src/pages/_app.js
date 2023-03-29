import { InventoryProvider } from "@/application/providers/InventoryProvider";
import { ReservationsProvider } from "@/application/providers/ReservationsProvider";
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

const AppWithProviders = ({ ...props }) => (
  <ReservationsProvider>
    <InventoryProvider>
      <App {...props} />
    </InventoryProvider>
  </ReservationsProvider>
);

export default AppWithProviders;
