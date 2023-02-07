import { useState , useEffect } from "react";
const Mycom = ()=>{
    // 컴퍼넌트 내부 변수
    let cnt1 = 0;
    // 인수가 있을떄는 

    //state 변수
    const [cnt2 , setCnt2] = useState(0);
    // 함수
    const showCnt =() =>{
        console.log(`cnt1 = ${cnt1}`);
        console.log(`cnt2 = ${cnt2}`);
    }
    const addCnt1 =() =>{
        cnt1 = cnt1 +1;
        showCnt();
    }
    const addCnt2 =() =>{
        setCnt2(cnt2+1);
    }
    useEffect(() => {showCnt()}, [cnt2]);
return(
    <>
        <ul>
            <li> cnt1 = {cnt1}</li>
            <li> cnt2 = {cnt2}</li>
        </ul>
        <form>
            <input type="button" value="cnt1증가" onClick={addCnt1}/>
            <input type="button" value="cnt2증가" onClick={addCnt2}/>
        </form>
    </>
)
}
export default Mycom
