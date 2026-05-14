import { useEffect, useState } from "react";
import { type FoodType } from "../types/FoodType";

export function useFetch(url: string) {
  const [foods, SetFood] = useState<FoodType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok)
          return setError(`서버 오류! 상태: ${response.statusText}`);
        const dataJson = await response.json();
        if (dataJson.body.totalCount <= 0)
          return setError("맞는 음식 데이터가 없습니다.");
        if (!dataJson.body.items) return setError("데이터가 없습니다.");
        SetFood(dataJson.body.items);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      }
    };
    load();
  }, [url]);
  return { foods, loading, error };
}
