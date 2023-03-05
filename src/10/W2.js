import Wheader from "./Wheader";
import weather2 from "../DB/weather2.json"
import item from "../DB/item.json"
const W2 = ()=>{
    console.log(weather2);
    console.log(item);
    let items = weather2.response.body.items.item;
    let w2 = items.map((i)=>{
        let temp=[];
        temp.push(item[i.category][0]);
        temp.push(i.obsrValue);
        temp.push(item[i.category][1]);
        return temp;
    }
    );
    console.log(w2);

    return(
        <>
            <Wheader title={'일기예보-단기'}/>
            <div>
                <div>
                    <span className="sp0">강수량</span>
                    <span className="sp1">0</span>
                    <span className="sp2">mm</span>
                </div>
            </div>
        </>
    );
}
export default W2