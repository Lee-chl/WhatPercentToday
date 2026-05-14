import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MyNutrients } from "../types/FoodType";

const initialState: MyNutrients = {
  carbohydrate: 0,
  protein: 0,
  fat: 0,
  sodium: 0,
};

const nutrients = createSlice({
  name: "myNutrients",
  initialState,
  reducers: {
    changeCarbohydrate: (state, action: PayloadAction<number>) => {
      state.carbohydrate = action.payload;
    },
    changeProtein: (state, action: PayloadAction<number>) => {
      state.protein = action.payload;
    },
    changeFat: (state, action: PayloadAction<number>) => {
      state.fat = action.payload;
    },
    changeSodium: (state, action: PayloadAction<number>) => {
      state.sodium = action.payload;
    },
  },
});

export const { changeCarbohydrate, changeProtein, changeFat, changeSodium } =
  nutrients.actions;
export default nutrients.reducer;
