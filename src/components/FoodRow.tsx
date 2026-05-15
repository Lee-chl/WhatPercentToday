import { Button, TableCell, TableRow, Tooltip } from "@mui/material";
import React from "react";
import type { FoodType, MyNutrientType } from "../types/FoodType";
import { useDispatch, useSelector } from "react-redux";
import { inTakeNutrients } from "../util/inTakeNutrients.ts";
import type { RootState } from "../slices/store.ts";
import { changeNutrients } from "../slices/myNutrients.ts";

interface FoodProps {
  food: FoodType;
}

export default function FoodRow({ food }: FoodProps) {
  const dispatch = useDispatch();
  const myNutrients = useSelector((state: RootState) => state.nutrients);

  const changeMyNutrients = (type: "plus" | "minus") => {
    const changeNutrient: MyNutrientType = {
      calorie: Number(food.AMT_NUM1.replace(",", "")),
      carbohydrate: Number(food.AMT_NUM6.replace(",", "")),
      protein: Number(food.AMT_NUM3.replace(",", "")),
      fat: Number(food.AMT_NUM4.replace(",", "")),
      sodium: Number(food.AMT_NUM13.replace(",", "")),
    };

    const nutrientsCalculation: MyNutrientType = inTakeNutrients({
      nutrients: changeNutrient,
      servingSize: Number(food.SERVING_SIZE.split("g")[0].replace(",", "")),
      nutriAmountServing: Number(
        food.NUTRI_AMOUNT_SERVING?.split("g")[0].replace(",", ""),
      ),
    });

    // 기존 값에서 더하거나 빼주기
    let calorie,
      carbohydrate,
      protein,
      fat,
      sodium = 0;
    switch (type) {
      case "plus":
        calorie = myNutrients.calorie + nutrientsCalculation.calorie;
        carbohydrate =
          myNutrients.carbohydrate + nutrientsCalculation.carbohydrate;
        protein = myNutrients.protein + nutrientsCalculation.protein;
        fat = myNutrients.fat + nutrientsCalculation.fat;
        sodium = myNutrients.sodium + nutrientsCalculation.sodium;
        break;
      case "minus":
        calorie = myNutrients.calorie - nutrientsCalculation.calorie;
        carbohydrate =
          myNutrients.carbohydrate - nutrientsCalculation.carbohydrate;
        protein = myNutrients.protein - nutrientsCalculation.protein;
        fat = myNutrients.fat - nutrientsCalculation.fat;
        sodium = myNutrients.sodium - nutrientsCalculation.sodium;
    }

    dispatch(changeNutrients({ calorie, carbohydrate, protein, fat, sodium }));
  };
  return (
    <React.Fragment>
      <TableRow>
        <TableCell align="center" sx={{bgcolor:'rgba(240, 245, 255, 1)'}}>{food.FOOD_NM_KR}</TableCell>
        <TableCell align="center" sx={{bgcolor:'rgba(240, 245, 255, 1)'}}>
          {Math.round(Number(food.AMT_NUM1.replace(",", "")))}
        </TableCell>
        <TableCell align="center" sx={{bgcolor:'rgba(240, 245, 255, 1)'}}>
          {Math.round(Number(food.AMT_NUM6.replace(",", "")))}
        </TableCell>
        <TableCell align="center" sx={{bgcolor:'rgba(240, 245, 255, 1)'}}>
          {Math.round(Number(food.AMT_NUM3.replace(",", "")))}
        </TableCell>
        <TableCell align="center" sx={{bgcolor:'rgba(240, 245, 255, 1)'}}>
          {Math.round(Number(food.AMT_NUM4.replace(",", "")))}
        </TableCell>
        <TableCell align="center" sx={{bgcolor:'rgba(240, 245, 255, 1)'}}>
          {Math.round(Number(food.AMT_NUM13.replace(",", "")))}
        </TableCell>
        <TableCell align="center" sx={{bgcolor:'rgba(221, 232, 255, 1)'}}>
          <Tooltip title="한 개 기준">
            <span>
              <Button onClick={() => changeMyNutrients("plus")} sx={{marginRight:'10px', padding:'4px 8px',minWidth:'auto',bgcolor:'rgba(60, 104, 199, 1)',borderRadius:'90px',color:'#FFFFFF'}}>+</Button>
              <Button onClick={() => changeMyNutrients("minus")} sx={{padding:'4px 8px',minWidth:'auto',bgcolor:'rgba(60, 104, 199, 1)',borderRadius:'90px',color:'#FFFFFF'}}>-</Button>
            </span>
          </Tooltip>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
