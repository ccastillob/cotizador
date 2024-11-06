interface ConvertOperationProps {
  value: number;
  rate: number;
  typeForm: string;
}

interface ConvertCurrencyProps {
  typeForm: string;
  valueForm: number;
  rate: number;
  convertOperation: ({ value, rate, typeForm }: ConvertOperationProps) => number;
}


export const convertCurrency = ({
  typeForm,
  valueForm,
  rate,
  convertOperation,
}: ConvertCurrencyProps): number => {
  return convertOperation({ value: valueForm, rate, typeForm })
};