/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useCategoryTitle from "../../hooks/useCategoryTitle";

const Category = () => {

    const { currentCategory, setCurrentCategory, user } = useContext(AuthContext);

    const [refetch, categoryTitle, isLoading] = useCategoryTitle();

    if (isLoading) {

        return <p>Loading..............</p>
    }



    return (
        <div className="">
            <Navbar></Navbar>

            <div className="flex flex-col lg:flex-row px-[20px] ">
                <div className="w-full lg:w-64 min-h-screen bg-blue-300 mr-[20px] space-y-10  ">

                    <ul className="p-[10px] ">

                       

                        {
                            categoryTitle.map(item =>
                                <li
                                    key={item._id}
                                    className="pl-[10px]"
                                    style={{ background: currentCategory == item.categoryName ? "red" : "" }} >
                                    <NavLink to="/category/categoryX">
                                        <button onClick={() => setCurrentCategory(item.categoryName)}>{item.categoryName}</button>
                                    </NavLink>
                                </li>)


                        }




                        <div className="divider"></div>

                        {
                            user?.email == "rizve@gmail.com" && <li ><NavLink to="/category/addCategoryProblem">Add Category Problem </NavLink></li>

                        }


                        {
                            user?.email == "rizve@gmail.com" && <li><NavLink to="/category/addCategory">Add Category </NavLink></li>

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