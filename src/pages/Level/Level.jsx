/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Level = () => {
    
    const {currentLevel,setCurrentLevel,user} =useContext(AuthContext);

    return (
        <div className=" ">
            <Navbar></Navbar>

            <div className="flex flex-col lg:flex-row px-[20px]" >
                <div className="w-full lg:w-64 min-h-screen bg-blue-300 mr-[20px] space-y-10">

                    <ul className="p-[10px] ">
                        <li  style={{ background: currentLevel == "level1"? "red" : "" }}><NavLink to="/level/levelX"><button onClick={()=>setCurrentLevel("level1")}>Level - 1</button></NavLink> </li>
                        
                        <li style={{ background: currentLevel == "level2"? "red" : "" }} ><NavLink to="/level/levelX"><button onClick={()=>setCurrentLevel("level2")}>Level - 2</button></NavLink> </li>
                        
                        <li style={{ background: currentLevel == "level3"? "red" : "" }} ><NavLink to="/level/levelX"><button onClick={()=>setCurrentLevel("level3")}>Level - 3</button></NavLink> </li>
                        
                        <li style={{ background: currentLevel == "level4"? "red" : "" }} ><NavLink to="/level/levelX"><button onClick={()=>setCurrentLevel("level4")}>Level - 4</button></NavLink> </li>


                        <div className="divider"></div>

                         {
                            user?.email == "rizve@gmail.com" &&  <li><NavLink to="/level/addLevelProblem">Add Level Problem </NavLink></li>
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