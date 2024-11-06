interface ConvertOperationProps {
  value: number;
  rate: number;
  typeForm: string;
}

export const convertToSoles = ({ value, rate, typeForm }: ConvertOperationProps): number => {
  const result = typeForm === "formInput" ? value * rate : value / rate;
  return Number(result.toFixed(3));
};

export const convertToDollars = ({ value, rate, typeForm }: ConvertOperationProps): number => {
  const result = typeForm === "formInput" ? value / rate : value * rate;
  return Number(result.toFixed(3));
};