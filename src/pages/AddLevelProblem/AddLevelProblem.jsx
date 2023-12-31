/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import Swal from "sweetalert2";
import useLevelTitle from "../../hooks/useLevelTitle";


const AddLevelProblem = () => {

    const [selectedItem, setSelectedItem] = useState('');

    const  [refetch,levelTitle,isloading] = useLevelTitle();

    if(isloading){
        return <p>Loading................</p>
    }
    
    console.log("LevelTitle : ",levelTitle);

    const handleSelectChange = (event) => {
        setSelectedItem(event.target.value);
        console.log(event.target.value)
    }

    const handleAdd = event => {
        event.preventDefault();

        const form = event.target;

        
        const levelName = selectedItem || "";
        const problemName = form?.problemName?.value || "";
        const problemUrl = form?.problemUrl?.value || "";

        // console.log("authorName : ", authorName);
        // console.log("levelName : ", levelName);

        const newCode = { levelName,problemName, problemUrl }

        console.log("newCode : ", newCode);



        fetch('https://easy-code-server.vercel.app/level', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCode)
        })
            .then(res => res.json())
            .then(data => {
                console.log("add  : ", data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Wow...',
                        text: 'Code add successfully',

                    })
                }
            })
    }


    return (
        <div>
           
          
            <div className="bg-[#EEEEEE] p-10 text-black">
            <p className="text-3xl font-bold text-center mb-[30px] "> Add Level Problem</p>

                <form onSubmit={handleAdd}>







                    {/* Category Name */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Category Name</span>
                        </label>
                        <div>
                            <select
                                onChange={handleSelectChange}
                                value={selectedItem}
                                required
                                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            >
                                <option value="">Select a Level </option>
                                
                                {
                                    levelTitle.map(item => <option value={item.levelName}> {item.levelName}</option>)

                                }
                             


                            </select>

                        </div>

                    </div>


                    {/*Problem Name */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Problem Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='problemName' placeholder="Problem Name" className="input input-bordered w-full" required />
                        </label>
                    </div>


                    {/*Problem Url */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Problem Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='problemUrl' placeholder="Problem Url" className="input input-bordered w-full" required />
                        </label>
                    </div>













                    <input type="submit" value="Add" className="btn btn-block btn-primary mt-[20px]" />


                </form>
            </div>


        </div>
    );
};

export default AddLevelProblem;