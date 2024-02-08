import { useState } from "react";
import { FaTrash } from "react-icons/fa6";
import useAxiosPublic from "../../../Hooks/Axios/useAxiosPublic";
import Swal from "sweetalert2";

const ListOfApp = ({ newApp }) => {
  const { appIcon, title, company,_id } = newApp || [];
  const [deleteApp, setDeleteApp] = useState(false);
  const axiosPublic = useAxiosPublic();

  const handleDeleteApp = () => {
    axiosPublic
      .delete(`/allApps/${_id}`)
      .then((response) => {
        setDeleteApp(true);
        Swal.fire({
          title: "Are you sure?",
          showCancelButton: true,
          confirmButtonColor: "#2acec7",
          cancelButtonColor: "#f76565",
          confirmButtonText: "Yes, remove it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "App has been deleted.",
              icon: "success"
            });
          }
        });
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  return (
    <div className="border-2 border-heroPrimary rounded-md px-3 py-2 flex items-center justify-start gap-3 relative h-24">
      <img src={appIcon} className="w-16 h-16 object-cover rounded-md" alt="" />

      <h2 className="text-textPrimary text-xl font-semibold">
        {title}
        <span className="block font-normal text-base">{company}</span>
      </h2>

      {deleteApp ? (
        <p>Data was successfully deleted.</p>
      ) : (
        <div
          className="w-6 h-6 rounded-md absolute bg-red-500 bottom-2 right-2 flex justify-center items-center cursor-pointer
        "
        >
          <FaTrash
            onClick={handleDeleteApp}
            className="text-sm text-white"
          ></FaTrash>
        </div>
      )}

       {/* <div
        className="fixed insert-0 backdrop-blur-md
      flex justify-center items-center"
      >
        <div
          className="border rounded-md
         border-heroPrimary p-4 flex flex-col 
         justify-center items-center gap-4"
        >
          <h2 className="text-2xl font-medium">
            Are you sure, Do you want to delete it ?
          </h2>
          <div className="flex justify-center items-center gap-4">
            <button className="outline-none px-6 py-2 rounded-md border border-heroPrimary hover:bg-teal-500 hover:border-none hover:text-black">
              Yes
            </button>
            <button className="outline-none px-6 py-2 rounded-md border border-heroPrimary hover:bg-red-500 hover:border-none hover:text-black">
              No
            </button>
          </div>
        </div>
      </div>  */}
    </div>
  );
};

export default ListOfApp;
