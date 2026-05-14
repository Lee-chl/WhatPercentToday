import { useDispatch } from "react-redux";
import type { MyNutrients } from "../types/FoodType";

interface calculateProps {
  nutrients: MyNutrients;
  SERVING_SIZE: number;
  NUTRI_AMOUNT_SERVING: number;
}

export function calculationNutrients({
  nutrients,
  SERVING_SIZE,
  NUTRI_AMOUNT_SERVING,
}: calculateProps) {
  const dispatch = useDispatch();
  // dispatch 하기 전에 계산 해주기
  let carbohydrate,
    protein,
    fat,
    sodium = 0;
}
