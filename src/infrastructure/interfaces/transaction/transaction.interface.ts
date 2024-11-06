export interface TransactionInitialState {
  transactionType: string;
  formInput: number;
  formOutput: number | string;
}

export interface TransactionFieldProps {
  isInput: boolean;
}

export interface ButtonTransactionProps {
  toggleTransaction: () => void;
}
