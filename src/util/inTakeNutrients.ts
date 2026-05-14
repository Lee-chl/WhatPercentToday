import type {MyNutrientType} from "../types/FoodType";

interface calculateProps {
    nutrients: MyNutrientType;
    servingSize: number;
    nutriAmountServing: number;
}

export const
    inTakeNutrients = ({
                           nutrients,
                           servingSize,
                           nutriAmountServing,
                       }: calculateProps)

        : MyNutrientType => {
        // dispatch 하기 전에 계산 해주기

        // 탄수화물 계산
        const carbohydrate = intake(nutrients.carbohydrate, servingSize, nutriAmountServing);
        // 단백질 계산
        const protein = intake(nutrients.protein, servingSize, nutriAmountServing);
        // 지방 계산
        const fat = intake(nutrients.fat, servingSize, nutriAmountServing)
        // 나트륨 계산
        const sodium = intake(nutrients.sodium, servingSize, nutriAmountServing);

        return ({
            carbohydrate, protein, fat, sodium
        })

    }

const intake = (nutrient: number, servingSize: number, nutriAmountServing: number) => {
    //  1회 섭취참고량이 없을 때는 그냥 영양소로
    if (!nutriAmountServing || !servingSize || nutriAmountServing === 0) return nutrient

    return nutrient * (nutriAmountServing / servingSize);
}


export const percent = (nutrients: MyNutrientType) => {

    //에너지: 2,000 kcal 탄수화물: 250g 단백질: 100g 지방: 65g
    // TODO: 나트륨 목표: 1,500~2,000mg 안전

    // 탄수화물 계산
    const carbohydrate = (nutrients.carbohydrate / 250) * 100;
    // 단백질 계산
    const protein = (nutrients.protein / 100) * 100;
    // 지방 계산
    const fat = (nutrients.fat / 65) * 100
    // 나트륨 계산
    const sodium = (nutrients.sodium / 2000) * 100

    return {carbohydrate, protein, fat, sodium}
}