import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAxiosPublic from "../Axios/useAxiosPublic";

const useApps = (queryKey, queryFn, options = { refetchOnWindowFocus: false }) => {
  const axiosPublic = useAxiosPublic();
  const { data, isLoading, isError, refetch } = useQuery(
    queryKey,
    async () => {
      try {
        const response = await axiosPublic.get(queryFn);
        return response.data;
      } catch (error) {
        console.log(error);
        toast.error(`Error: ${error.message}`);
        return null;
      }
    },
    options
  );

  return { data, isLoading, isError, refetch };
};

export default useApps;
