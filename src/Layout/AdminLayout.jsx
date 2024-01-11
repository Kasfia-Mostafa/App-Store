import { Outlet } from "react-router-dom";
import AdminHeader from "../Components/Admin/AdminHeader";


const AdminLayout = () => {
  return (
    <div className="w-screen h-auto flex flex-col justify-center items-center px-4 py-3">
     <AdminHeader />
      <Outlet></Outlet>
      
    </div>
  );
};

export default AdminLayout;