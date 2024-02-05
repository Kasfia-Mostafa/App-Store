import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/Axios/useAxiosPublic";
import ListOfApp from "./ListOfApp";
// import Loader from "../../Utils/Loader/Loader"

const ListOfApps = () => {
  const axiosPublic = useAxiosPublic();
  const [newApps, setNewApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosPublic.get("/allApps");

        // Set the data in the state
        setNewApps(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
      {newApps.map((newApp) => (
        <ListOfApp key={newApp._id} newApp={newApp}></ListOfApp>
      ))}
    </div>
  );
};

export default ListOfApps;
