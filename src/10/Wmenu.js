import Wheader from "./Wheader";
import {Link} from "react-router-dom"
const Wmenu = ()=>{

    return(
        <>
            <Wheader title={'일기예보'}/>
            <ul>
                <li><Link to="/w1">장기 예보</Link></li>
                <li><Link to="/w2">단기 예보</Link></li>
            </ul>
        </>
    );
}
export default Wmenu