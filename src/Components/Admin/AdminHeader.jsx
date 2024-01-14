import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Containers/Providers/AuthProvider";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { Menus } from "../../Utils/Menus";

const AdminHeader = () => {
  const { user, logOut } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.massage);
      });
  };

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
      <div className="flex justify-center item-center gap-4">
        {/* name content */}
        <div>
          <div className="flex flex-col justify-start items-start gap-1">
            <h2 className="text-lg font-bold text-textPrimary capitalize">
              {user?.displayName}
            </h2>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="w-6 h-6 rounded-full flex justify-center items-center bg-gray-800 border-2 border-secondary">
              <BsCurrencyDollar className="text-sm text-heroSecondary" />
            </div>
            <div>
              {user?.walletBalance ? (
                <React.Fragment>
                  <p className="text-lg font-semibold text-heroPrimary">
                    {user?.walletBalance}
                  </p>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <p className="text-lg font-semibold text-heroPrimary">0</p>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
        {/* image content */}
        <div>
          <div className="w-16 h-16 rounded-full p-1 flex justify-center items-center relative bg-gradient-to-b from-heroPrimary to bg-heroSecondary">
            {user ? (
              <img
                className="w-full h-full object-cover rounded-full"
                alt=""
                src={user?.photoURL}
              />
            ) : (
              <img
                className="w-full h-full object-cover rounded-full"
                alt=""
                src="https://i.postimg.cc/0y0C2TGn/avatar.jpg"
              />
            )}
            <div className="w-4 h-4 rounded-full bg-secondary absolute bottom-1 right-1 flex justify-center items-center border border-gray-600">
              <FaChevronDown className="text-[10px] text-textSecondary"></FaChevronDown>
            </div>

            {/* user dropdown */}
            <div className="absolute top-20 right-0 bg-secondary w-64 flex flex-col justify-start itm-start px-3 py-2 gap-4 rounded-md z-50">
              {Menus &&
                Menus.map((menu) => (
                  // eslint-disable-next-line react/jsx-key
                  <React.Fragment>
                    {menu.isAdmin ? (
                      <Link
                        className="px-1 py-2 font-semibold hover:text-heroSecondary"
                        key={menu.id}
                      >
                        {menu.menu}
                      </Link>
                    ) : (
                      <Link
                        className="px-1 py-2 font-semibold hover:text-heroSecondary"
                        key={menu.id}
                      >
                        {menu.menu}
                      </Link>
                    )}
                  </React.Fragment>
                ))}

              {/* sign in and out */}
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="px-4 py-3 w-full rounded-md text-primary bg-textPrimary active:scale-95 transition-all ease-in-out"
                >
                  Sign out
                </button>
              ) : (
                <Link to="/login">
                  <button className="px-4 py-3 w-full rounded-md text-primary bg-textPrimary active:scale-95 transition-all ease-in-out">
                    Sign in
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
