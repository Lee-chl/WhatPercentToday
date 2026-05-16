import {Button, TableCell, TableRow, Tooltip} from "@mui/material";
import type {FoodType, MyNutrientType} from "../types/FoodType";
import {useDispatch, useSelector} from "react-redux";
import {inTakeNutrients} from "../util/inTakeNutrients.ts";
import type {RootState} from "../slices/store.ts";
import {changeNutrients} from "../slices/myNutrients.ts";
import React from "react";
import {addFoodNum, subFoodNum} from "../slices/foodNum.ts";

interface FoodProps {
    food: FoodType;
}

export default function FoodRow({food}: FoodProps) {
    const dispatch = useDispatch();
    const myNutrients = useSelector((state: RootState) => state.nutrients);
    const clickNum = useSelector((state: RootState) => state.foodNum.fIdNum);

    const currFoodNum = clickNum[food.NUM] || 0;
    const addCurrFoodNum = (type: string) => {
        switch (type) {
            case "add":
                return dispatch(addFoodNum({id: food.NUM}));
            case 'sub':
                return dispatch(subFoodNum({id: food.NUM}));
        }
        dispatch(addFoodNum({id: food.NUM}));
    }

    // 마이너스 체크
    const minusCheck = (nutrients: MyNutrientType) => {
        nutrients.calorie = Math.max(0, nutrients.calorie);
        nutrients.carbohydrate = Math.max(0, nutrients.carbohydrate);
        nutrients.protein = Math.max(0, nutrients.protein);
        nutrients.fat = Math.max(0, nutrients.fat);
        nutrients.sodium = Math.max(0, nutrients.sodium);
        return nutrients;
    }

    // 영양소 한 개 값으로 계산
    const nutrientsCalculationFun = (): MyNutrientType => {
        // 영양소들 number와 replace로 바꿔주기
        const changeNutrient: MyNutrientType = {
            calorie: Number(food.AMT_NUM1.replace(",", "")),
            carbohydrate: Number(food.AMT_NUM6.replace(",", "")),
            protein: Number(food.AMT_NUM3.replace(",", "")),
            fat: Number(food.AMT_NUM4.replace(",", "")),
            sodium: Number(food.AMT_NUM13.replace(",", "")),
        };

        return inTakeNutrients({
            nutrients: changeNutrient,
            servingSize: Number(food.SERVING_SIZE.split("g")[0].replace(",", "")),
            nutriAmountServing: Number(
                food.NUTRI_AMOUNT_SERVING?.split("g")[0].replace(",", ""),
            ),
        });
    }

    const changeMyNutrients = (type: "plus" | "minus") => {

        const nutrientsCalculation = nutrientsCalculationFun();

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
                addCurrFoodNum('add');
                break;
            case "minus":
                calorie = myNutrients.calorie - nutrientsCalculation.calorie;
                carbohydrate =
                    myNutrients.carbohydrate - nutrientsCalculation.carbohydrate;
                protein = myNutrients.protein - nutrientsCalculation.protein;
                fat = myNutrients.fat - nutrientsCalculation.fat;
                sodium = myNutrients.sodium - nutrientsCalculation.sodium;
                addCurrFoodNum('sub');
        }
        // 마이너스 체크
        const checkNutrient: MyNutrientType = minusCheck({calorie, carbohydrate, protein, fat, sodium})

        dispatch(changeNutrients(checkNutrient));
    };

    return (
        <React.Fragment>
            <TableRow>
                <TableCell align="center" sx={{bgcolor: 'rgba(240, 245, 255, 1)'}}>{food.FOOD_NM_KR}</TableCell>
                <TableCell align="center" sx={{bgcolor: 'rgba(240, 245, 255, 1)'}}>{food.MAKER_NM}</TableCell>
                <TableCell align="center" sx={{bgcolor: 'rgba(240, 245, 255, 1)'}}>
                    {Math.round(Number(food.AMT_NUM1.replace(",", "")))}
                </TableCell>
                <TableCell align="center" sx={{bgcolor: 'rgba(240, 245, 255, 1)'}}>
                    {Math.round(Number(food.AMT_NUM6.replace(",", "")))}
                </TableCell>
                <TableCell align="center" sx={{bgcolor: 'rgba(240, 245, 255, 1)'}}>
                    {Math.round(Number(food.AMT_NUM3.replace(",", "")))}
                </TableCell>
                <TableCell align="center" sx={{bgcolor: 'rgba(240, 245, 255, 1)'}}>
                    {Math.round(Number(food.AMT_NUM4.replace(",", "")))}
                </TableCell>
                <TableCell align="center" sx={{bgcolor: 'rgba(240, 245, 255, 1)'}}>
                    {Math.round(Number(food.AMT_NUM13.replace(",", "")))}
                </TableCell>
                <TableCell align="center" sx={{bgcolor: 'rgba(221, 232, 255, 1)', width: '12%'}}>
                    <Tooltip title="한 개 기준">
                        <span>
                            <Button onClick={() => changeMyNutrients("plus")} sx={{
                                marginRight: '15px',
                                padding: '4px 8px',
                                minWidth: 'auto',
                                bgcolor: 'rgba(60, 104, 199, 1)',
                                borderRadius: '90px',
                                color: '#FFFFFF'
                            }}>+</Button>
                            {currFoodNum}
                            <Button onClick={() => changeMyNutrients("minus")} sx={{
                                marginLeft: '15px',
                                padding: '4px 8px',
                                minWidth: 'auto',
                                bgcolor: 'rgba(60, 104, 199, 1)',
                                borderRadius: '90px',
                                color: '#FFFFFF'
                            }} disabled={currFoodNum === 0}>-</Button>
                        </span>
                    </Tooltip>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
