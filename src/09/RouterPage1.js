import { useParams } from "react-router-dom";
const RouterPage1 = () => {
    const item = useParams().item;
    console.log("p1 item", item);
    const fruit = ['μ¬κ³Όπ','λ°λλπ'];
    let tag;
    if (fruit.includes(item)) tag = "μ κ³ΌμΌμλλ€";
        else tag="κ³ΌμΌμ΄ μλλλ€. ";
    // let tag = fruts.includes(item) ? "κ³ΌμΌμλλ€." :"κ³ΌμΌμ΄ μλλλ€."
    return(
        <>
            <p>{`${item}μ ${tag}`}</p>
            <h1>page1</h1>
        </>
    );
}
export default RouterPage1