import { useState } from "react";
import { FaTrash } from "react-icons/fa6";

const ListOfApp = ({ newApp }) => {
  const { appIcon, title, company } = newApp || [];
  const [deleteApp, setDeleteApp] = useState();
  return (
   
      <div className="border-2 border-heroPrimary rounded-md px-3 py-2 flex items-center justify-start gap-3 relative h-24">
       
        <img
          src={appIcon}
          className="w-16 h-16 object-cover rounded-md"
          alt=""
        />

        <h2 className="text-textPrimary text-xl font-semibold">
          {title}
          <span className="block font-normal text-base">{company}</span>
        </h2>

        <div className="w-6 h-6 rounded-md absolute bg-red-500 bottom-2 right-2 flex justify-center items-center cursor-pointer">
          <FaTrash className="text-sm text-white"></FaTrash>
        </div>

        <div className="fixed insert-0 backdrop-blur-md flex justify-center item-center">
          <div className="border rounded-md border-x-heroPrimary p-4 flex flex-col justify-center items-center gap-4">
          <h2 className="text-2xl font-medium">Are you sure, Do you want to delete it ?</h2>
          </div>
        </div>

      </div>
       

  );
};

export default ListOfApp;
