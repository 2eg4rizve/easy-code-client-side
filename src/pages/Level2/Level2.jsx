/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Level2 = () => {
    const {currentLevel,setCurrentLevel} =useContext(AuthContext);
    return (
        <div>
            Level2
            <p>currentLevel : {currentLevel}</p>

            <p>sdddd</p>
        </div>
    );
};

export default Level2;