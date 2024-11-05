interface CalculateDollarToSolesArgs {
  typeForm: string;
  valueForm: number;
  purchasePrice: number;
}

interface CalculateSolesToDollarArgs {
  typeForm: string;
  valueForm: number;
  salePrice: number;
}

export const convertDollarsToSoles = ({ purchasePrice, typeForm, valueForm }: CalculateDollarToSolesArgs): number => {

  if (typeForm === 'formInput') {
    const finalValue = valueForm * purchasePrice;
    return Number(finalValue.toFixed(3))
  }

  const finalValue = valueForm / purchasePrice
  return Number(finalValue.toFixed(3));

}

export const convertSolesToDollars = ({
  salePrice,
  typeForm,
  valueForm,
}: CalculateSolesToDollarArgs): number => {

  if (typeForm === 'formInput') {
    const finalValue = valueForm / salePrice
    return Number(finalValue.toFixed(3))
  }

  const finalValue = valueForm * salePrice
  return Number(finalValue.toFixed(3))
}
