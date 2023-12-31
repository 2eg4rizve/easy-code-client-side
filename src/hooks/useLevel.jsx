import { useQuery } from "@tanstack/react-query";
import axios from "axios";



const useLevel = () => {
   const {refetch , data: level =[] , isLoading} =useQuery({

      queryKey: ['level'],
      queryFn: async () =>{
        const res = await axios.get('https://easy-code-server.vercel.app/level')
        return res.data;
      }

   })

   return [refetch,level,isLoading];
};

export default useLevel;