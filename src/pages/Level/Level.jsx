/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useLevelTitle from "../../hooks/useLevelTitle";


const Level = () => {

    const { currentLevel, setCurrentLevel, user } = useContext(AuthContext);

    const [refetch, levelTitle, isLoading] = useLevelTitle();

    if (isLoading) {
        return <p>Loading................</p>
    }

    return (
        <div className=" ">
            <Navbar></Navbar>

            <div className="flex flex-col lg:flex-row px-[20px]" >
                <div className="w-full lg:w-64 min-h-screen bg-blue-300 mr-[20px] space-y-10">

                    <ul className="p-[10px] ">
                       


                        {
                            levelTitle.map(item => <li
                                key={item._id}
                                className="pl-[10px]"
                                style={{ background: currentLevel == item.levelName ? "red" : "" }} >
                                <NavLink to="/level/levelX"><button onClick={() => setCurrentLevel(item.levelName)}> {item.levelName}</button></NavLink>
                            </li>)
                        }






                        <div className="divider"></div>

                        {
                            user?.email == "rizve@gmail.com" && <li><NavLink to="/level/addLevelProblem">Add Level Problem </NavLink></li>
                        }

                        {
                            user?.email == "rizve@gmail.com" && <li><NavLink to="/level/addLevel">Add Level  </NavLink></li>

                        }



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