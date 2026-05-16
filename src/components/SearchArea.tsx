import {ENV} from "../util/env";
import {useFetch} from "../hook/useFetch";
import Pagination from "./Pagination";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
import {useState} from "react";

export default function SearchArea() {
    const [foodName, setFoodName] = useState<string>("");
    const [pageNum, setPageNum] = useState<number>(1);
    // 한글일 경우 encoding해야지 되므로 encodeURIComponent 사용해서 만들어준다.
    const encodedName = encodeURIComponent(foodName);
    const url = `${ENV.API_URL}${ENV.API_KEY}&type=json&FOOD_NM_KR=${encodedName}&numOfRows=10&pageNo=${pageNum.toString()}`;
    // 서치 된 것 받아다가 내려주기
    const {foods, loading, error} = useFetch(url);

    const onChangeFoodName = (foodName: string) => {
        setFoodName(foodName);
    };

    const onChangePageNum = (pageNum: number) => {
        setPageNum(pageNum);
    };

    if (error) return <div>{error}</div>;
    if (loading) return <div>로딩 중입니다...</div>;

    return (
        <div>
            <SearchBar onChangeFoodName={onChangeFoodName} onChangePageNum={onChangePageNum}/>
            <ProductList foods={foods}/>
            <Pagination pageNum={pageNum} onChangePageNum={onChangePageNum}/>
        </div>
    );
}
