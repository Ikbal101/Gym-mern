import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUsers, FaBookReader, FaShoppingCart, FaWallet, FaCashRegister, FaPhone, FaBook } from 'react-icons/fa';
import useCart from "../hooks/useCart";

const AdminDashboard = () => {
  return (
    <>
      <li><NavLink to="/dashboard/home"><FaHome />Admin Home</NavLink></li>
      <li><NavLink to="/dashboard/manageclasses"><FaBook />Manage Classes</NavLink></li>
      <li><NavLink to="/dashboard/manageusers"><FaUsers />Manage Users</NavLink></li>
    </>
  );
};

const UserDashboard = () => {
  const [cart] = useCart();

  return (
    <>
      <li><NavLink to="/dashboard/home"><FaHome />User Home</NavLink></li>
      <li><NavLink to="/dashboard/enroll"><FaCashRegister />My Enroll Class</NavLink></li>
      <li><NavLink to="/dashboard/history"><FaWallet />Payment History</NavLink></li>
      <li>
        <NavLink to="/dashboard/mycart">
          <FaShoppingCart />My Selected Class <span className="badge badge-warning">{cart?.length || 0}</span>
        </NavLink>
      </li>
    </>
  );
};

const InstructorDashboard = () => {
  return (
    <>
     <li><NavLink to="/dashboard/addClass"><FaBook />Add Class</NavLink></li>
      <li><NavLink to="/dashboard/myClass"><FaBook />My Class</NavLink></li>
    </>
  );
};

const Dashboard = () => {
  const isAdmin = true;
  const isInstructor = true;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      </div>

      <div className="drawer-side bg-[#5D017D]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-base-content">
          {isAdmin && <AdminDashboard />}
          {!isAdmin && isInstructor && <InstructorDashboard />}
          {!isAdmin && !isInstructor && <UserDashboard />}

          <div className="divider"></div>
          <li><NavLink to='/'><FaHome />Home</NavLink></li>
          <li><NavLink to='/classes'> <FaBookReader />Classes</NavLink></li>
          <li><NavLink to='/contact'><FaPhone />Contact</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
