import { useLocation } from "react-router-dom";
import qs from "query-string";

const RouterPage2 = () => {
    let location = useLocation().search;
    let item = qs.parse(location).item;
    console.log(item);
    const fruit = ['μ¬κ³Όπ','λ°λλπ'];

     let tag = fruit.includes(item) ? "κ³ΌμΌμλλ€." :"κ³ΌμΌμ΄ μλλλ€."

    return(
        <>
            <h1>page2</h1>
            <p> {`${item}λ ${tag}`}</p>
        </>
    );
}
export default RouterPage2