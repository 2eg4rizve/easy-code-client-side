/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import useLevel from "../../hooks/useLevel";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Level1 = () => {
    const { currentLevel, setCurrentLevel } = useContext(AuthContext);


    const [refetch, level, isLoading] = useLevel();

    if (isLoading) {
        return <p>Loading ..................</p>
    }

    console.log("currentLevel : ", { currentLevel })

    // const myLevel = level?.filter(item => item?.levelName == 'Level1')

    let myLevel = [];

    if (currentLevel == "level1")
        myLevel = level?.filter(item => item?.levelName == 'Level1')

    if (currentLevel == "level2")
        myLevel = level?.filter(item => item?.levelName == 'Level2')

    // if (currentLevel == "Level2")
    //     myLevel = level?.filter(item => item?.levelName == "Level2")

    // console.log("level : ", level);
    console.log("my level : ", myLevel);

    // const Level1 = level?.filter(item => item?.levelName == 'Level1')
    // const Level2 = level?.filter(item => item?.levelName == 'Level2')
    // const Level3 = level?.filter(item => item?.levelName == 'Level3')

    // if(currentLevel=="level1")
    //       myLevel=Level1





    return (
        <div>
            Level1

            <p>Total  :  {myLevel.length}</p>

            <p>currentLevel : {currentLevel}</p>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
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