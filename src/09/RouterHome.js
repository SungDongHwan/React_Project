import { Link, useNavigate } from "react-router-dom";
const RouterHome= () => {
    const navigate = useNavigate();
    const url ={
        "μ¬κ³Όπ" : '/p2?item=μ¬κ³Όπ',
        "λ°λλπ" : '/p2?item=λ°λλπ',
        'λΉκ·Όπ₯' : '/p2?item=λΉκ·Όπ₯'
    }
    const gourl= (item)=>{
       // navigate(url[item]);
        let url = `/p2?item=${item}`;
        navigate(url);
    }
    return(
        <>
            <h1>ν</h1>

            <h2>νλΌλ―Έν° μ μ‘</h2>
            <ul>
                <li><Link to= '/p1/μ¬κ³Όπ'>μ¬κ³Όπ</Link></li>
                <li><Link to= '/p1/λ°λλπ'>λ°λλπ</Link></li>
                <li><Link to= '/p1/λΉκ·Όπ₯'>λΉκ·Όπ₯</Link></li>

            </ul>

            <h2>νλΌλ―Έν° μ μ‘ 2</h2>
            <button onClick={()=> gourl('μ¬κ³Όπ')}>μ¬κ³Όπ</button>
            <button onClick={()=> gourl('λ°λλπ')}>λ°λλπ</button>
            <button onClick={()=> gourl('λΉκ·Όπ₯')}>λΉκ·Όπ₯</button>

        </>
    );
}
export default RouterHome