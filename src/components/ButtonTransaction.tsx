interface ButtonTransactionProps {
  toggleTransaction: () => void;
}

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
