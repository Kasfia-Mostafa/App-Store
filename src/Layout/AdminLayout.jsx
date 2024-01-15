import { Link, NavLink, Outlet } from "react-router-dom";
import AdminHeader from "../Components/Admin/AdminHeader";
import {  FaHouseChimney } from "react-icons/fa6";

const AdminLayout = () => {
  return (
    <div className="w-screen h-auto flex flex-col justify-center items-center px-4 py-3">
      <AdminHeader />
      {/* navigational container */}
      <div className="w-full h-auto flex  justify-center items-center p-4 gap-12">
        {/* Navigation container */}
        <Link to='/'>
          <FaHouseChimney className="text-2xl hover:text-heroPrimary"></FaHouseChimney>
        </Link>
        <NavLink className={({isActive})=> `text-lg font-semibold ${isActive && 'text-heroPrimary'}`} to={'/admin/AdminHome'}>Dashboard</NavLink>
        <NavLink className={({isActive})=> `text-lg font-semibold ${isActive && 'text-heroPrimary'}`} to={'/admin/apps'}>Apps</NavLink>
        <NavLink className={({isActive})=> `text-lg font-semibold ${isActive && 'text-heroPrimary'}`} to={'/admin/users'}>Users</NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default AdminLayout;
