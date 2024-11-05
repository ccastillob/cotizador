import {
  convertDollarsToSoles,
  convertSolesToDollars,
} from "../helpers/calculate";
import { useTransaction, useRate } from "../hooks";

export const TransactionInput = () => {
  const { transactionType, formInput, updateFormInput, updateFormOutput } =
    useTransaction();
  const { purchasePrice, salePrice } = useRate();

  const currentText = transactionType === "PURCHASE" ? "Dólares" : "Soles";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFormInput = Number(event.target.value);

    updateFormInput(newFormInput);

    if (!purchasePrice || !salePrice) return;

    if (transactionType === "PURCHASE") {
      const formOutput = convertDollarsToSoles({
        typeForm: "formInput",
        valueForm: newFormInput,
        purchasePrice,
      });

      updateFormOutput(formOutput);
      return;
    }

    const formOutput = convertSolesToDollars({
      typeForm: "formInput",
      valueForm: newFormInput,
      salePrice,
    });

    updateFormOutput(formOutput);
  };

  return (
    <div className="input-container__form">
      <div className="input-content__left">{currentText}</div>
      <div className="input-content__right">
        <h4 className="input__text">Envías</h4>
        <input
          type="number"
          onChange={handleInputChange}
          className="input__number"
          value={formInput}
        />
      </div>
    </div>
  );
};
