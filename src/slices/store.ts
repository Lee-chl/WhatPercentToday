import {configureStore} from "@reduxjs/toolkit";
import nutrients from "./myNutrients";
import foodNum from "./foodNum.ts";

export const store = configureStore({
    reducer: {
        nutrients: nutrients,
        foodNum: foodNum,
    },
});

export type RootState = ReturnType<typeof store.getState>; // 데이터를 읽어올 때(상태의 타입)
export type AppDispatch = typeof store.dispatch; // 데이터를 보낼 때(수정하는 함수의 타입)
