import { Link } from "react-router-dom";

const Navbar = () => {
    const navLists = <>
          <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
               <Link to='/instructors'>Instructors</Link>
               
              </li>
              <li>
               <Link to='/classes'>Classes</Link>
              </li></>
  return (
    <>
      <div className="navbar bg-base-100 fixed z-40 bg-opacity-30 bg-black text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
                {navLists}
            </ul>
          </div>
          <p className="btn btn-ghost normal-case text-xl text-amber-200">Fitcraft</p> <br />
         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navLists}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/login' className="mr-6">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
