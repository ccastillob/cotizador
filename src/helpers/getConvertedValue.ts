import { convertCurrency } from "./convertCurrency";
import { convertToDollars, convertToSoles } from "./convertOperations";

interface ConvertedValueProps {
  transactionType: string;
  isInput: boolean;
  value: number;
  purchasePrice: number;
  salePrice: number;
}

export const getConvertedValue = ({ transactionType, isInput, value, purchasePrice, salePrice }: ConvertedValueProps) => {

  const validTypeForm = isInput ? "formInput" : "formOutput";

  if (transactionType === "PURCHASE") {
    return convertCurrency({ typeForm: validTypeForm, valueForm: value, rate: purchasePrice, convertOperation: convertToSoles });
  }
  return convertCurrency({ typeForm: validTypeForm, valueForm: value, rate: salePrice, convertOperation: convertToDollars });
};