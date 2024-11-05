import {
  convertDollarsToSoles,
  convertSolesToDollars,
} from "../helpers/calculate";
import { useTransaction } from "../hooks";
import { useRate } from "../hooks";

export const TransactionOutput = () => {
  const { transactionType, formOutput, updateFormOutput, updateFormInput } =
    useTransaction();
  const { purchasePrice, salePrice } = useRate();

  const currencyText = transactionType === "PURCHASE" ? "Soles" : "Dólares";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFormOutput = Number(event.target.value);

    updateFormOutput(newFormOutput);

    if (!purchasePrice || !salePrice) return;

    if (transactionType === "PURCHASE") {
      const formInput = convertDollarsToSoles({
        typeForm: "formOutput",
        valueForm: newFormOutput,
        purchasePrice,
      });

      updateFormInput(formInput);
      return;
    }
    const formInput = convertSolesToDollars({
      typeForm: "formOutput",
      valueForm: newFormOutput,
      salePrice,
    });

    updateFormInput(formInput);
  };

  return (
    <div className="input-container__form">
      <div className="input-content__left">{currencyText}</div>
      <div className="input-content__right">
        <h4 className="input__text">Recibes</h4>
        <input
          type="number"
          onChange={handleChange}
          className="input__number"
          value={formOutput === null ? 0 : formOutput}
        />
      </div>
    </div>
  );
};
