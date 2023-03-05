import { useParams } from "react-router-dom";
const RouterPage1 = () => {
    const item = useParams().item;
    console.log("p1 item", item);
    const fruit = ['사과🍎','바나나🍌'];
    let tag;
    if (fruit.includes(item)) tag = "은 과일입니다";
        else tag="과일이 아닙니다. ";
    // let tag = fruts.includes(item) ? "과일입니다." :"과일이 아닙니다."
    return(
        <>
            <p>{`${item}은 ${tag}`}</p>
            <h1>page1</h1>
        </>
    );
}
export default RouterPage1