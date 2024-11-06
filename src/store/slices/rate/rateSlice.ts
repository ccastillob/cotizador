import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RateInitialState } from '../../../infrastructure/interfaces'

const initialState: RateInitialState = {
  purchasePrice: null,
  salePrice: null,
}

export const rateSlice = createSlice({
  name: 'rates',
  initialState,
  reducers: {
    setUpdatePurchasePrice: (state, action: PayloadAction<number>) => {
      state.purchasePrice = action.payload
    },
    setUpdateSalePrice: (state, action: PayloadAction<number>) => {
      state.salePrice = action.payload
    },
  },
})

export const { setUpdatePurchasePrice, setUpdateSalePrice } =
  rateSlice.actions
