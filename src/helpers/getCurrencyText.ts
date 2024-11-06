interface CurrencyTextProps {
  transactionType: string;
  isInput: boolean;
}

export const getCurrencyText = ({ transactionType, isInput }: CurrencyTextProps) => {
  if (transactionType === "PURCHASE") {
    return isInput ? "Dólares" : "Soles";
  }
  return isInput ? "Soles" : "Dólares";
};