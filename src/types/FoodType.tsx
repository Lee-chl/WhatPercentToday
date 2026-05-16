// 푸드 이름, 영양성분함량기준량 , 칼로리, 탄수화물, 단백질, 지방, 나트륨, 1회 섭취참고량
export interface FoodType {
    NUM: number;
    FOOD_NM_KR: string;
    SERVING_SIZE: string;
    AMT_NUM1: string;
    AMT_NUM6: string;
    AMT_NUM3: string;
    AMT_NUM4: string;
    AMT_NUM13: string;
    NUTRI_AMOUNT_SERVING?: string;
    MAKER_NM: string;
}

export interface MyNutrientType {
    calorie: number;
    carbohydrate: number;
    protein: number;
    fat: number;
    sodium: number;
}

export interface foodNumType {
    fIdNum: {
        [foodId: number]
            : number
    }
}