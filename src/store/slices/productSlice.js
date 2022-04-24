import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/products.json";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        list: data.products
    },
    reducers: {
        toggleProduct: (state, action) => {
            state.list = state.list.map((product) => {
                return product.id === action.payload
                    ? { ...product, checked: !product.checked }
                    : product
            });
        },
        clearList: (state) => {
            state.list = state.list.map((product) => {
                return { ...product, checked: false }
            });
        }
    },
});

export const { toggleProduct, clearList } = productSlice.actions;

export default productSlice.reducer;