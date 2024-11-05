import { useTransaction } from "../hooks";
import { ButtonTransaction } from "./ButtonTransaction";
import { TransactionInput } from "./TransactionInput";
import { TransactionOutput } from "./TransactionOutput";

export const ContainerForm = () => {
  const { toggleTransaction } = useTransaction();
  return (
    <article className="card-container__form">
      <form className="card-content__form">
        <TransactionInput />
        <ButtonTransaction toggleTransaction={toggleTransaction} />
        <TransactionOutput />
      </form>
      <button type="button" className="button">
        Iniciar operación
      </button>
    </article>
  );
};
