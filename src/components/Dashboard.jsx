import { Outlet } from "react-router-dom";

function Dashbord(){
    return(<>
        <h1>Dashbord</h1>
        <Outlet/>
        </>
    );
}
export default Dashbord;