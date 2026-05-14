import {Button, TableCell, TableRow, Tooltip} from "@mui/material";
import React from "react";
import type {FoodType, MyNutrientType} from "../types/FoodType";
import {useDispatch, useSelector} from "react-redux";
import {inTakeNutrients} from "../util/inTakeNutrients.ts";
import type {RootState} from "../slices/store.ts";
import {changeNutrients} from "../slices/myNutrients.ts";

interface FoodProps {
    food: FoodType;
}

export default function FoodRow({food}: FoodProps) {
    const dispatch = useDispatch();
    const myNutrients = useSelector((state: RootState) => state.nutrients);

    const changeMyNutrients = (type: 'plus' | 'minus') => {

        const changeNutrient: MyNutrientType = {
            carbohydrate: Number(food.AMT_NUM6), protein: Number(food.AMT_NUM3),
            fat: Number(food.AMT_NUM4), sodium: Number(food.AMT_NUM13),
        }

        const nutrientsCalculation: MyNutrientType = inTakeNutrients({
            nutrients: changeNutrient,
            servingSize: Number(food.SERVING_SIZE.split('g')[0]),
            nutriAmountServing: Number(food.NUTRI_AMOUNT_SERVING?.split('g')[0]),
        })
        // 기존 값에서 더하거나 빼주기
        let carbohydrate, protein, fat, sodium = 0;
        switch (type) {
            case "plus":
                carbohydrate = myNutrients.carbohydrate + nutrientsCalculation.carbohydrate;
                protein = myNutrients.protein + nutrientsCalculation.protein;
                fat = myNutrients.fat + nutrientsCalculation.fat;
                sodium = myNutrients.sodium + nutrientsCalculation.sodium;
                break;
            case 'minus':
                carbohydrate = myNutrients.carbohydrate - nutrientsCalculation.carbohydrate;
                protein = myNutrients.protein - nutrientsCalculation.protein;
                fat = myNutrients.fat - nutrientsCalculation.fat;
                sodium = myNutrients.sodium - nutrientsCalculation.sodium;
        }

        dispatch(changeNutrients({carbohydrate, protein, fat, sodium}));
    }
    return (
        <React.Fragment>
            <TableRow>
                <TableCell align="center">{food.FOOD_NM_KR}</TableCell>
                <TableCell align="center">
                    {Math.round(Number(food.AMT_NUM1))}
                </TableCell>
                <TableCell align="center">
                    {Math.round(Number(food.AMT_NUM6))}
                </TableCell>
                <TableCell align="center">
                    {Math.round(Number(food.AMT_NUM3))}
                </TableCell>
                <TableCell align="center">
                    {Math.round(Number(food.AMT_NUM4))}
                </TableCell>
                <TableCell align="center">
                    {Math.round(Number(food.AMT_NUM13))}
                </TableCell>
                <TableCell align="center">
                    <Tooltip title="한 개 기준">
            <span>
              <Button onClick={() => changeMyNutrients('plus')}>+</Button>
              <Button onClick={() => changeMyNutrients('minus')}>-</Button>
            </span>
                    </Tooltip>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
