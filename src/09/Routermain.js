import RouterNV from "./RouterNV";
import RouterPage1 from "./RouterPage1";
import RouterHome from "./RouterHome";
import RouterPage2 from "./RouterPage2";
import { Route,Routes } from "react-router-dom";
const Routermain =() => {

    return(
        <>
            <RouterNV/>
            <Routes>
                <Route path="/" element={<RouterHome/>}/>
                <Route path="/p1/:item" element={<RouterPage1/>} />
                <Route path="/p2" element={<RouterPage2/>}/>
            </Routes>
        </>
    );
}
export default Routermain