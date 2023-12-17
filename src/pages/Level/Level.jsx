import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";


const Level = () => {
    return (
        <div className="">
            <Navbar></Navbar>

            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-64 min-h-screen bg-blue-300 mr-[20px] space-y-10">

                    <ul className="menu">
                        <li><NavLink to="/level/level1">Level - 1</NavLink> </li>
                        <li><NavLink to="/level/level2">Level - 2</NavLink> </li>


                        <div className="divider"></div>


                        <li><NavLink to="/level/addLevelProblem">Add Level Problem </NavLink></li>
                    </ul>





                </div>

                <div className="flex-1">
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Level;