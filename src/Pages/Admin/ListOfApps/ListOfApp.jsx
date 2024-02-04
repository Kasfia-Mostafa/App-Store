import { FaTrash } from "react-icons/fa6";

const ListOfApp = ({ newApp }) => {
  const { appIcon,title,company } = newApp || [];
  return (
    <div>
      <div className="border-2 border-heroPrimary rounded-md px-3 py-2 flex items-start justify-center gap-3">
        <img
          src={appIcon}
          className="w-16 h-16 object-cover rounded-md"
          alt=""
        />
        <h2 className="text-textPrimary text-xl font-semibold">{title}
        <span className="block font-normal text-base">{company}</span>
        </h2>
        <div className="w-6 h-6 rounded-md absolute bg-red-500 bottom-2 right-2 flex justify-center items-center">
          <FaTrash className="text-sm text-white"></FaTrash>
        </div>
      </div>
    </div>
  );
};

export default ListOfApp;
