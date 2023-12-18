import { Link } from "react-router-dom";


const HomePage = () => {
    return (
        <div className="p-[50px] font-bold text-[20px]">

            <p>Hello coders</p>

            <p>Here, you can find coding problems based on level and category.</p>

            <p>This problem will help you improve your coding skills.</p>

            <p>So try it.</p>

            <p>Never give up.</p>

            <p>You Can Do It</p>

            <div className=" mt-[20px]">
                <Link className="text-blue-700 font-bold" to="https://www.linkedin.com/in/ifthikhar-ahmed-rizve-2787322a1/" target="_blank">Linkedin Profile</Link>

            </div>




        </div>
    );
};

export default HomePage;