import { Outlet } from "react-router-dom";


const Admin = () => {
  return (
    <div>
      <h2>Header</h2>
      <Outlet></Outlet>
      <h2>Footer</h2>
    </div>
  );
};

export default Admin;