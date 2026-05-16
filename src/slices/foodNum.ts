import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {foodNumType} from "../types/FoodType";

const localStorge = localStorage.getItem("foodNum");

const initialState: foodNumType = localStorge ? JSON.parse(localStorge) : {
    fIdNum: {},
};

const foodNum = createSlice({
        name: "foodNum",
        initialState,
        reducers: {
            addFoodNum: (state, action: PayloadAction<{ id: number }>) => {
                const {id} = action.payload;
                if (!state.fIdNum[id] || state.fIdNum[id] < 0) state.fIdNum[id] = 0;
                state.fIdNum[id] += 1;
                localStorage.setItem("foodNum", JSON.stringify(state));
            }
            ,
            subFoodNum: (state, action: PayloadAction<{ id: number }>) => {
                const {id} = action.payload;
                if (state.fIdNum[id] <= 0) {
                    delete state.fIdNum[id];
                } else {
                    state.fIdNum[id] -= 1;
                }
                localStorage.setItem("foodNum", JSON.stringify(state));
            },
            delFoodNum: (state) => {
                state.fIdNum = {};
                localStorage.setItem("foodNum", JSON.stringify(state));
            }
        },
    })
;

export const {addFoodNum, subFoodNum, delFoodNum} = foodNum.actions;
export default foodNum.reducer;
