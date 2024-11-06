import { getConvertedValue, getCurrencyText } from "../../../../config/helpers";
import { useTransaction, useRate } from "../../../hooks";
import { TransactionFieldProps } from "../../../../infrastructure/interfaces";

export const TransactionField = ({ isInput }: TransactionFieldProps) => {
  const {
    transactionType,
    formInput,
    formOutput,
    updateFormInput,
    updateFormOutput,
  } = useTransaction();
  const { purchasePrice, salePrice } = useRate();

  const currencyText = getCurrencyText({ transactionType, isInput });
  const label = isInput ? "Envías" : "Recibes";
  const value = isInput ? formInput : formOutput;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);

    if (isInput) {
      updateFormInput(newValue);
    } else {
      updateFormOutput(newValue);
    }

    if (!purchasePrice || !salePrice) return;

    const convertedValue = getConvertedValue({
      transactionType,
      isInput,
      value: newValue,
      purchasePrice,
      salePrice,
    });

    if (isInput) {
      updateFormOutput(convertedValue);
    } else {
      updateFormInput(convertedValue);
    }
  };

  return (
    <div className="input-container__form">
      <div className="input-content__left">{currencyText}</div>
      <div className="input-content__right">
        <h4 className="input__text">{label}</h4>
        <input
          type="number"
          onChange={handleChange}
          className="input__number"
          value={value ?? ""}
          min={0}
        />
      </div>
    </div>
  );
};
