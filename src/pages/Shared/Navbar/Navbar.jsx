import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/Authproviders";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cart] = useCart();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };



  const navLists = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link className="md:-mt-3" to="/dashboard/mycart">
          <button className="btn gap-2 ">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-warning">{cart?.length || 0}</div>
          </button>
        </Link>
      </li>
    </>
  );
  console.log(user);

  return (
    <>
      <div className="navbar bg-base-100 fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
        <div className="navbar-start">
          {/* Dropdown menu */}
          <div className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 p-2 shadow text-black shadow-slate-700 bg-base-100 z-30 bg-opacity-60 rounded-box w-52 ${
                isDropdownOpen ? "block" : "hidden"
              }`}
            >
              {navLists}
            </ul>
          </div>

          {/* Logo */}
          <p className="btn btn-ghost normal-case text-xl text-amber-200">
            Fitcraft
          </p>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLists}</ul>
        </div>

        <div className="navbar-end flex items-center">
          {user ? (
            <>
              {/* User profile image */}
              <img
                src={user?.photoURL}
                alt="Profile"
                className="h-8 w-8 rounded-full lg:hidden mr-2"
              />

              {/* Logout button */}
              <button onClick={handleLogout} className="btn btn-ghost">
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Login link */}
              <Link to="/login" className="btn btn-ghost">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
