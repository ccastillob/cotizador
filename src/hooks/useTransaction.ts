import { setToggleTransaction, setUpdateFormInput, setUpdateFormOutput, setUpdateTransactionType } from "../store/slices/transaction";
import { useAppDispatch, useAppSelector } from "./store";

export const useTransaction = () => {
  const { transactionType, formInput, formOutput } = useAppSelector(
    (state) => state.transaction
  );
  const dispatch = useAppDispatch();

  const toggleTransaction = () => {
    dispatch(setToggleTransaction())
  }

  const updateTransactionType = (value: string) => {
    dispatch(setUpdateTransactionType(value))
  }

  const updateFormInput = (value: number) => {
    dispatch(setUpdateFormInput(value))
  }

  const updateFormOutput = (value: number) => {
    dispatch(setUpdateFormOutput(value))
  }

  return {
    transactionType,
    formInput,
    formOutput,
    toggleTransaction,
    updateTransactionType,
    updateFormInput,
    updateFormOutput,
  }
}
