/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import useLevel from "../../hooks/useLevel";
import { useEffect } from "react";


const Level1 = () => {


    const [refetch, level, isLoading] = useLevel();

    if (isLoading) {
        return <p>Loading ..................</p>
    }

    const myLevel = level?.filter(item => item?.levelName == 'Level1')

    console.log("level : ", level);
    console.log("my level : ", myLevel);



    return (
        <div>
            Level1

            <p>Total  :  {myLevel.length}</p>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Problem Name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            myLevel.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <Link to={item.problemUrl} target="_blank" > {item.problemUrl}</Link>
                                </td>


                            </tr>)
                        }




                    </tbody>
                </table>
            </div>




        </div>
    );
};

export default Level1;