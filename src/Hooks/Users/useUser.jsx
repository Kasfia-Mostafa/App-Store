import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const { data, isLoading, isError, refetch } = useQuery("user", async () => {
    try {
      const userDetails = await getAuthenticatedUser();
      return userDetails();
    } catch (error) {
      console.log(error);
    }
  },
  {
    refetchOnWindowFocus: false,
  }
  );
  return {
    data,isLoading,isError,refetch
  }
};

export default useUser;
