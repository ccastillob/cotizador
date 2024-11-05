import { useEffect } from "react";
import {
  convertDollarsToSoles,
  convertSolesToDollars,
} from "../helpers/calculate";
import { dbFirebase } from "../firebase/config";
import { doc } from "firebase/firestore";
import { useRate, useTransaction } from "../hooks";

export const ContainerTab = () => {
  const {
    transactionType,
    formInput,
    formOutput,
    updateFormOutput,
    updateTransactionType,
  } = useTransaction();
  const { purchasePrice, salePrice, updatePurchasePrice, updateSalePrice } =
    useRate();

  const docRef = doc(dbFirebase, "rates", "awaOMswZ8JGxjmHCpVZ4");

  useEffect(() => {
    // Al parecer me faltan permisos para que me devuelva una respuesta, por ello decidí colocarle unos valores por defecto,
    // de esta manera el app sigue funcionando hasta que la API pueda funcionar
    updatePurchasePrice(3.924);
    updateSalePrice(3.945);
  }, [docRef]);

  useEffect(() => {
    if (!purchasePrice || !salePrice) return;
    if (formOutput) return;

    const newFormOutput = convertDollarsToSoles({
      typeForm: "formInput",
      valueForm: formInput,
      purchasePrice,
    });

    updateFormOutput(newFormOutput);
  }, [formInput, formOutput, purchasePrice, salePrice]);

  useEffect(() => {
    if (!purchasePrice || !salePrice) return;

    if (transactionType === "PURCHASE") {
      const formOutput = convertDollarsToSoles({
        typeForm: "formInput",
        valueForm: formInput,
        purchasePrice,
      });

      updateFormOutput(formOutput);
      return;
    }

    const formOutput = convertSolesToDollars({
      typeForm: "formInput",
      valueForm: formInput,
      salePrice,
    });

    updateFormOutput(formOutput);
  }, [transactionType]);

  return (
    <article className="card-container__tab">
      <div
        onClick={() => updateTransactionType("PURCHASE")}
        className={`card-content__tab ${
          transactionType === "PURCHASE" ? "tab__active" : ""
        }`}
      >
        <h4 className="tab__text">Dólar compra</h4>
        <h5 className="tab__number">{purchasePrice ?? "--"}</h5>
      </div>
      <div
        onClick={() => updateTransactionType("SELL")}
        className={`card-content__tab ${
          transactionType === "SELL" ? "tab__active" : ""
        }`}
      >
        <h4 className="tab__text">Dólar venta</h4>
        <h5 className="tab__number">{salePrice ?? "--"}</h5>
      </div>
      <div className="border__tab"></div>
    </article>
  );
};
