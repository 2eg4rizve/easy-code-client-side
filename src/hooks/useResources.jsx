import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useResources = () => {
    const {refetch , data: resources =[] , isLoading} =useQuery({

        queryKey: ['Resources'],
        queryFn: async () =>{
          const res = await axios.get('http://localhost:5000/resources')
          return res.data;
        }
  
     })
  
     return [refetch,resources,isLoading];
};

export default useResources;