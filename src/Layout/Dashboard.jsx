import { NavLink, Outlet } from "react-router-dom";
import {FaHome,FaBookReader,FaShoppingCart,FaWallet,FaCashRegister, FaPhone} from 'react-icons/fa'
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        
        <div className="drawer-side bg-[#5D017D]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full text-base-content">
            <li><NavLink to="/dashboard/home"><FaHome></FaHome>User Home</NavLink></li>
            <li><NavLink to="/dashboard/enroll"><FaCashRegister></FaCashRegister>My Enroll Class</NavLink></li>
            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payment History</NavLink></li>
            <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>My Selected Class <span className="badge badge-warning">{cart?.length || 0}</span></NavLink>
            </li>

            <div className="divider"></div>
            <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
            <li><NavLink to='/classes'> <FaBookReader></FaBookReader> Classes</NavLink></li>
            <li><NavLink to='/contact'><FaPhone></FaPhone> Contact</NavLink></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;