import { Link, useNavigate } from "react-router-dom";
const RouterHome= () => {
    const navigate = useNavigate();
    const url ={
        "사과🍎" : '/p2?item=사과🍎',
        "바나나🍌" : '/p2?item=바나나🍌',
        '당근🥕' : '/p2?item=당근🥕'
    }
    const gourl= (item)=>{
       // navigate(url[item]);
        let url = `/p2?item=${item}`;
        navigate(url);
    }
    return(
        <>
            <h1>홈</h1>

            <h2>파라미터 전송</h2>
            <ul>
                <li><Link to= '/p1/사과🍎'>사과🍎</Link></li>
                <li><Link to= '/p1/바나나🍌'>바나나🍌</Link></li>
                <li><Link to= '/p1/당근🥕'>당근🥕</Link></li>

            </ul>

            <h2>파라미터 전송 2</h2>
            <button onClick={()=> gourl('사과🍎')}>사과🍎</button>
            <button onClick={()=> gourl('바나나🍌')}>바나나🍌</button>
            <button onClick={()=> gourl('당근🥕')}>당근🥕</button>

        </>
    );
}
export default RouterHome