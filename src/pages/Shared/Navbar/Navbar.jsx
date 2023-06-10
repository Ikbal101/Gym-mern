import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/Authproviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
        <Link to="/">
          <button className="btn gap-2 md:-mt-3">
            Inbox
            <div className="badge badge-warning">+99</div>
          </button>
        </Link>
      </li>
    </>
  );

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
                src={user.photoURL}
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



// import { useContext } from "react";
// import { Link } from "react-router-dom";
// // import { FaShoppingCart} from 'react-icons/fa';
// import { AuthContext } from "../../../Providers/Authproviders";

// // import useCart from "../../../hooks/useCart";

// const NavBar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   // const [cart] =useCart()

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch((error) => console.log(error));
//   };

//   const navOptions = (
//     <>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/menu">Our Menu</Link>
//       </li>
//       <li>
//         <Link to="/order/salad">Order Food</Link>
//       </li>
//       <li>
//         <Link to="/secret">Secret</Link>
//       </li>
//       <li>
//         <Link to='/dashboard/mycart'>
//           <button className="btn gap-2">
//             {/* <FaShoppingCart/> */}
//             <div className="badge badge-secondary">0</div>
//           </button>
//         </Link>
//       </li>
//       {user ? (
//         <>
//           <button onClick={handleLogOut} className="btn btn-ghost">
//             LogOut
//           </button>
//         </>
//       ) : (
//         <>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//         </>
//       )}
//     </>
//   );

//   return (
//     <>
//       <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               {navOptions}
//             </ul>
//           </div>
//           <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{navOptions}</ul>
//         </div>
//         <div className="navbar-end">
//           <a className="btn">Get started</a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavBar;
