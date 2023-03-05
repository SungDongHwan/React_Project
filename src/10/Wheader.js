import {Link} from "react-router-dom"

const Wheader = ({title})=>{

    return(
        <>
            <div className="whead">
                <h1>{title}</h1>
                <div className="whdiv"><Link to ='/'>⬆Main</Link></div>
            </div>
        </>
    );
}
export default Wheader