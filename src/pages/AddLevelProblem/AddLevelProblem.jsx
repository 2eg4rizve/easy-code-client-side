import { useState } from "react";
import Swal from "sweetalert2";


const AddLevelProblem = () => {

    const [selectedItem, setSelectedItem] = useState('');

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



        fetch('http://localhost:5000/level', {
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
           
            <p className="text-5xl font-bold text-center mb-[30px] "> Add Level Problem</p>

            <div className="bg-[#EEEEEE] p-10 text-black">
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
                                <option value="Level1">Level - 1</option>
                                <option value="Level2">Level - 2</option>
                                <option value="Level3">Level - 3</option>
                                <option value="Level3">Level - 4</option>


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