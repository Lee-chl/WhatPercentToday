import Footer from "./Footer";
import Header from "./header";
import SearchArea from "./SearchArea.tsx";
import {MyNutrients} from "./MyNutrients.tsx";

export default function PercentToday() {
    return (
        <div>
            <Header/>
            <SearchArea/>
            <MyNutrients/>
            <Footer/>
        </div>
    );
}
