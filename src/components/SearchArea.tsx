// 서치바 리스트 페이지네이션

import Pagination from "./Pagination";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";

export default function SearchArea() {
  // 서치 된 것 받아다가 내려주기
  return (
    <div>
      <SearchBar />
      <ProductList />
      <Pagination />
    </div>
  );
}
