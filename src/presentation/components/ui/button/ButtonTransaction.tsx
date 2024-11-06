import { ButtonTransactionProps } from "../../../../infrastructure/interfaces";

export const ButtonTransaction = ({
  toggleTransaction,
}: ButtonTransactionProps) => {
  return (
    <button
      onClick={toggleTransaction}
      type="button"
      className="button-change"
    ></button>
  );
};
