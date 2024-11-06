import { useTransaction } from "../hooks";
import { ButtonTransaction } from "./ButtonTransaction";
import { TransactionField } from "./TransactionField";

export const ContainerForm = () => {
  const { toggleTransaction } = useTransaction();
  return (
    <article className="card-container__form">
      <form className="card-content__form">
        <TransactionField isInput={true} />
        <ButtonTransaction toggleTransaction={toggleTransaction} />
        <TransactionField isInput={false} />
      </form>
      <button type="button" className="button">
        Iniciar operación
      </button>
    </article>
  );
};
