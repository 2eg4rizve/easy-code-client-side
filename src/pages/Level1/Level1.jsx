/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import useLevel from "../../hooks/useLevel";


const Level1 = () => {


    const [refetch, level, isLoading] = useLevel();

    if (isLoading) {
        return <p>Loading ..................</p>
    }

    return (
        <div>
            Level1

            <p>Len  :  {level.length}</p>

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
                            level.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {item.problemUrl}
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