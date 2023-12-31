/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import Navbar from "../../components/Navbar/Navbar";
import useResources from "../../hooks/useResources";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Resources = () => {

    const { user } = useContext(AuthContext);

    const [refetch, resources, isLoading] = useResources();

    if (isLoading) {
        return <p>Loading..........</p>
    }

    const handleAdd = event => {
        event.preventDefault();

        const form = event.target;

        const resourcesTitle = form?.resourcesTitle?.value || "";
        const resourcesUrl = form?.resourcesUrl?.value || "";



        const newResources = { resourcesTitle, resourcesUrl }

        console.log("newResources  : ", newResources);



        fetch('http://localhost:5000/resources', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newResources)
        })
            .then(res => res.json())
            .then(data => {
                console.log("add  : ", data)
                if (data.insertedId) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'Wow...',
                        text: 'Resources add successfully',

                    })
                }
            })
    }

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

                fetch(`http://localhost:5000/resources/${id}`, {
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
            <Navbar></Navbar>
            <div className="bg-[#94e5f5]">

                {
                   user?.email == "rizve@gmail.com" &&  <div className="bg-[#E8FFFF] p-10 text-black">
                   <p className="text-3xl font-bold text-center mb-[30px] "> Add Resources</p>

                   <form onSubmit={handleAdd} >


                       {/*Title Name */}
                       <div className="form-control w-full mb-4">
                           <label className="label">
                               <span className="label-text">Resources Title</span>
                           </label>
                           <label className="input-group">
                               <input type="text" name='resourcesTitle' placeholder="Resources Title" className="input input-bordered w-full" required />
                           </label>
                       </div>


                       {/*Resources Url */}
                       <div className="form-control w-full mb-4">
                           <label className="label">
                               <span className="label-text">Resources Url</span>
                           </label>
                           <label className="input-group">
                               <input type="text" name='resourcesUrl' placeholder="Resources Url" className="input input-bordered w-full" required />
                           </label>
                       </div>


                       <input type="submit" value="Add" className="btn btn-block btn-primary mt-[20px]" />


                   </form>
               </div>
                }

               
                <div>
                    <p className="text-3xl font-bold text-center py-[30px] "> Resources</p>

                    <p className="mb-[15px] px-[50px]">Total  Problem :  {resources?.length}</p>


                    <div className="overflow-x-auto p-[50px]">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th className="font-bold">Resources Title</th>
                                    {
                                        user?.email == "rizve@gmail.com" && <th>Action</th>
                                    }

                                </tr>
                            </thead>
                            <tbody>
                                {
                                   resources.map((item, index) => <tr key={item._id}>
                                        <th>
                                           
                                                {index + 1}
                                               
                                        </th>

                                        <td>
                                            <Link className="text-blue-600 font-bold" to={item.resourcesUrl} target="_blank" > {item.resourcesTitle}</Link>
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

            </div>
        </div>
    );
};

export default Resources;