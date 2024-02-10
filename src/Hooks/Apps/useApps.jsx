import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAxiosPublic from "../Axios/useAxiosPublic";

const useApps = ({ queryKey, queryFn = { refetchOnWindowFocus: false } }) => {
  const axiosPublic = useAxiosPublic();
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [queryKey], 
    queryFn: async () => {
      try {
        const response = await axiosPublic.get(`/allApps`);
        return response.data;
      } catch (error) {
        toast.error(`Error: ${error.message}`);
        return null;
      }
    },
  });
  return { data, isLoading, isError, refetch };
};

export default useApps;
