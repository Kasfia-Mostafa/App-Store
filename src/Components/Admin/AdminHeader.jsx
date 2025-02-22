import { Link } from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile";

const AdminHeader = () => {
 
  return (
    <div className="w-full flex justify-between items-center">
      {/* logo */}
      <Link to={"/"}>
        <img
          className="w-16 h-auto object-contain"
          src="https://i.ibb.co/ryW9xZh/logo.png"
          alt=""
        />
      </Link>
      {/* user profile section */}
     <UserProfile></UserProfile>
    </div>
  );
};

export default AdminHeader;
