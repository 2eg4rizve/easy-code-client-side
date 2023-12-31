import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useLevelTitle = () => {
     const {refetch,data:levelTitle=[], isLoading} = useQuery({
        queryKey: ['levelTitle'],
        queryFn: async()=>{
            const res= await axios.get('http://localhost:5000/levelTitle');
            return res.data;
        }
     }) 

     return [refetch,levelTitle, isLoading];
};

export default useLevelTitle;