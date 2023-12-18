import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";



const Root = () => {
    return (
        <div className="max-w-screen-11/12 mx-auto ">

            <Navbar></Navbar>

            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;