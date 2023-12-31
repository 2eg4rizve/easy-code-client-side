import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCategoryTitle = () => {
    const {refetch,data:categoryTitle=[], isLoading} = useQuery({
        queryKey: ['levelTitle'],
        queryFn: async()=>{
            const res= await axios.get('http://localhost:5000/categoryTitle');
            return res.data;
        }
     }) 

     return [refetch,categoryTitle, isLoading];
};

export default useCategoryTitle;