import { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { dbFirebase } from "../../../config/firebase";
import { useRate } from "../../hooks";
import { ContainerTab } from "../tab";
import { ContainerForm } from "../form";

export const LandingCard = () => {
  const { updatePurchasePrice, updateSalePrice } = useRate();
  const docRef = doc(dbFirebase, "rates", "awaOMswZ8JGxjmHCpVZ4");

  useEffect(() => {
    const unsub = onSnapshot(
      docRef,
      (doc) => {
        if (!doc.exists()) return;

        const { purchase_price, sale_price } = doc.data();
        updatePurchasePrice(purchase_price);
        updateSalePrice(sale_price);
      },
      (error) => {
        console.log(error);
        // Al parecer me faltan permisos para que me devuelva una respuesta, por ello decidí colocarle unos valores por defecto,
        // de esta manera el app sigue funcionando hasta que la API pueda funcionar
        updatePurchasePrice(3.924);
        updateSalePrice(3.945);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  return (
    <section className="landing-card">
      <ContainerTab />
      <ContainerForm />
    </section>
  );
};
