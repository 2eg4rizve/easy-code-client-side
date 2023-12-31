/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import useLevel from "../../hooks/useLevel";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";


const Level1 = () => {
    const { currentLevel, setCurrentLevel, user } = useContext(AuthContext);


    const [refetch, level, isLoading] = useLevel();

    if (isLoading) {
        return <p>Loading ..................</p>
    }

    console.log("currentLevel : ", { currentLevel })

    // const myLevel = level?.filter(item => item?.levelName == 'Level1')

    let myLevel = [];
   

    myLevel = level?.filter(item => item?.levelName == currentLevel)


    
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

                fetch(`https://easy-code-server.vercel.app/level/${id}`, {
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


            <p className="text-center text-[30px] font-bold"> {currentLevel}</p>
            <p className="mb-[15px]">Total  Problem :  {myLevel?.length}</p>
          

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
                                <th>
                                    <div className="flex">
                                        {index + 1}
                                        <input type="checkbox" className="checkbox ml-4" />
                                    </div>
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

export default Level1;