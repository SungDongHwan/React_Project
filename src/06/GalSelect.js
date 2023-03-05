import data from "../DB/data.json"
import Galdata from "../06/Galdata"
import "./Gal.css";
import GalCard2 from "./GalCard2";
import { useRef, useEffect, useState } from "react";
const Galselect= ()=>{
    //데이터 가져오는거
    const items= data.response.body.items.item

    const select= items.map((obj)=>obj.galTitle);
    let selTags =  select.map((i)=>
        <option key={i} value={i}>{i}</option>)
    
    console.log(select);
    // select box 제어
    const selR = useRef()
    
    //component의 처음 렌더링이 일어났을때
    useEffect(()=>{    
        selR.current.focus();
    },[]);
    const handleSel = (e)=>{
        e.preventDefault();
        console.log(selR.current.value);
            let temp=items.filter((item)=> item.galTitle === selR.current.value);
            console.log("temp", temp);
            setSelItem(temp[0]);
            console.log(selItem);
    }
    //렌더링 제어변수
    const [selItem,setSelItem] = useState();

    return(
        <>
            <form>
                <select name="sel1" ref={selR} onChange = {handleSel}>
                    <option value="">항목을 선택하세요</option>
                    {selTags}
                </select>
            </form>
            <div>
                {selItem && <GalCard2 cardItem={selItem}/>}
             </div>
        </>
    )
}
export default Galselect;