import { useEffect } from "react";
import { useRate, useTransaction } from "../hooks";
import { Tab } from "./Tab";
import { convertCurrency } from "../helpers/convertCurrency";
import { convertToDollars, convertToSoles } from "../helpers/convertOperations";

export const ContainerTab = () => {
  const {
    transactionType,
    formInput,
    formOutput,
    updateFormOutput,
    updateTransactionType,
  } = useTransaction();
  const { purchasePrice, salePrice } = useRate();

  useEffect(() => {
    if (!purchasePrice || !salePrice) return;
    if (formOutput) return;

    const newFormOutput = convertCurrency({
      typeForm: "formInput",
      valueForm: formInput,
      rate: purchasePrice,
      convertOperation: convertToSoles,
    });

    updateFormOutput(newFormOutput);
  }, [formInput, formOutput, purchasePrice, salePrice]);

  useEffect(() => {
    if (!purchasePrice || !salePrice) return;

    const isPurchaseTransaction = transactionType === "PURCHASE";

    const newFormOutput = isPurchaseTransaction
      ? convertCurrency({
          typeForm: "formInput",
          valueForm: formInput,
          rate: purchasePrice,
          convertOperation: convertToSoles,
        })
      : convertCurrency({
          typeForm: "formInput",
          valueForm: formInput,
          rate: salePrice,
          convertOperation: convertToDollars,
        });

    updateFormOutput(newFormOutput);
  }, [transactionType]);

  return (
    <article className="card-container__tab">
      <Tab
        isActive={transactionType === "PURCHASE"}
        label="Dólar compra"
        onClick={() => updateTransactionType("PURCHASE")}
        price={purchasePrice}
      />
      <Tab
        isActive={transactionType === "SELL"}
        label="Dólar venta"
        onClick={() => updateTransactionType("SELL")}
        price={salePrice}
      />
      <div className="border__tab"></div>
    </article>
  );
};
