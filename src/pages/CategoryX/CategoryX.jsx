/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useLevel from "../../hooks/useLevel";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const CategoryX = () => {

    const { currentCategory, user } = useContext(AuthContext);



    const [refetch, level, isLoading] = useLevel();

    if (isLoading) {
        return <p>Loading ..................</p>
    }

    console.log("currentCategory : ", { currentCategory })

    // const myLevel = level?.filter(item => item?.levelName == 'Level1')

    let myLevel = [];
    let title = "";

    if (currentCategory == "binarySearch") {
        myLevel = level?.filter(item => item?.levelName == 'binarySearch')
        title = "Binary Search"
    }


    if (currentCategory == "graphs") {
        myLevel = level?.filter(item => item?.levelName == 'graphs')
        title = "Graphs"
    }


    if (currentCategory == "dynamicProgramming") {
        myLevel = level?.filter(item => item?.levelName == 'dynamicProgramming')
        title = "Dynamic Program"
    }


    if (currentCategory == "greedy") {
        myLevel = level?.filter(item => item?.levelName == 'greedy')
        title = "Greedy"
    }


    // if (currentCategory == "Level2")
    //     myLevel = level?.filter(item => item?.levelName == "Level2")

    // console.log("level : ", level);
    console.log("my level : ", myLevel);

    const handleDelete = id => {
        console.log("delete id : ", id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/level/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div>




            <p className="text-center text-[30px] font-bold">{title}</p>

            <p className="mb-[15px]">Total  Problem :  {myLevel.length}</p>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className="font-bold">Problem Name</th>

                            
                            {
                                user?.email == "rizve@gmail.com" && <th>Action</th>
                            }


                        </tr>
                    </thead>
                    <tbody>
                        {
                            myLevel.map((item, index) => <tr key={item._id}>
                                <th className="w-[30px]">
                                    {index + 1}
                                </th>
                                <td>
                                    <Link className="text-blue-600 font-bold" to={item.problemUrl} target="_blank" > {item.problemName}</Link>
                                </td>

                                {
                                    user?.email == "rizve@gmail.com" && <td>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn btn-ghost btn-sm">
                                            Delete

                                        </button>
                                    </td>
                                }



                            </tr>)
                        }




                    </tbody>
                </table>
            </div>




        </div>
    );
};

export default CategoryX;
