import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {MyNutrientType} from "../types/FoodType";

const localStorge = localStorage.getItem("myNutrients");

const initialState: MyNutrientType = localStorge ? JSON.parse(localStorge) : {
    calorie: 0,
    carbohydrate: 0,
    protein: 0,
    fat: 0,
    sodium: 0,
};

const nutrients = createSlice({
    name: "myNutrients",
    initialState,
    reducers: {
        changeNutrients: (state, action: PayloadAction<MyNutrientType>) => {
            const {calorie, carbohydrate, protein, fat, sodium} = action.payload;
            state.calorie = calorie;
            state.carbohydrate = carbohydrate;
            state.protein = protein;
            state.fat = fat;
            state.sodium = sodium;
            localStorage.setItem("myNutrients", JSON.stringify(state));
        },
    },
});

export const {changeNutrients} = nutrients.actions;
export default nutrients.reducer;
