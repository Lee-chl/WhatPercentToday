import { FooterMemo } from "./Footer";
import { HeaderMemo } from "./header";
import SearchArea from "./SearchArea.tsx";
import { MyNutrients } from "./MyNutrients.tsx";
import { Provider } from "react-redux";
import { store } from "../slices/store.ts";

export default function PercentToday() {
  return (
    <div>
      <HeaderMemo />
      <Provider store={store}>
        <SearchArea />
        <MyNutrients />
      </Provider>
      <FooterMemo />
    </div>
  );
}
