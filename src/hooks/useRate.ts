import { setUpdatePurchasePrice, setUpdateSalePrice } from "../store/slices/rate";
import { useAppDispatch, useAppSelector } from "./store";

export const useRate = () => {
  const { purchasePrice, salePrice } = useAppSelector((state) => state.rates);
  const dispatch = useAppDispatch();

  const updatePurchasePrice = (value: number) => {
    dispatch(setUpdatePurchasePrice(value))
  }

  const updateSalePrice = (value: number) => {
    dispatch(setUpdateSalePrice(value))
  }

  return {
    purchasePrice,
    salePrice,
    updatePurchasePrice,
    updateSalePrice,
  }

}
