import { useLocation } from "react-router-dom";
import qs from "query-string";

const RouterPage2 = () => {
    let location = useLocation().search;
    let item = qs.parse(location).item;
    console.log(item);
    const fruit = ['사과🍎','바나나🍌'];

     let tag = fruit.includes(item) ? "과일입니다." :"과일이 아닙니다."

    return(
        <>
            <h1>page2</h1>
            <p> {`${item}는 ${tag}`}</p>
        </>
    );
}
export default RouterPage2