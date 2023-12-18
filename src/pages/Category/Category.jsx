import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Category = () => {

    const { currentCategory, setCurrentCategory, user } = useContext(AuthContext);



    return (
        <div className="">
            <Navbar></Navbar>

            <div className="flex flex-col lg:flex-row px-[20px] ">
                <div className="w-full lg:w-64 min-h-screen bg-blue-300 mr-[20px] space-y-10  ">

                    <ul className="p-[10px] ">

                        <li style={{ background: currentCategory == "binarySearch" ? "red" : "" }}><NavLink to="/category/categoryX"><button onClick={() => setCurrentCategory("binarySearch")}>Binary Search</button></NavLink> </li>

                        <li style={{ background: currentCategory == "graphs" ? "red" : "" }} ><NavLink to="/category/categoryX"><button onClick={() => setCurrentCategory("graphs")}>Graphs</button></NavLink> </li>

                        <li style={{ background: currentCategory == "dynamicProgramming" ? "red" : "" }} ><NavLink to="/category/categoryX"><button onClick={() => setCurrentCategory("dynamicProgramming")}>Dynamic Programming</button></NavLink> </li>

                        <li style={{ background: currentCategory == "greedy" ? "red" : "" }} ><NavLink to="/category/categoryX"><button onClick={() => setCurrentCategory("greedy")}>Greedy</button></NavLink> </li>


                        <div className="divider"></div>

                        {
                            user?.email == "rizve@gmail.com" && <li><NavLink to="/category/addCategoryProblem">Add Category Problem </NavLink></li>

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

export default Category;