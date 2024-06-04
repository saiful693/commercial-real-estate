import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user)

    const handleLogOut=()=>{
        logOut()
        .then(()=>{
            toast.success("User LogOut successfully!");
        })
        .catch(()=>{
            toast.error("Error in user LogOut: ");
        })
    }

    const navLinks =
        < >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/update-profile">Update Profile</NavLink></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
        </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu space-x-4  menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <a className="text-4xl font-bold uppercase text-green-500">Benaa</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal space-x-4  px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} alt="user-icon" src={user.photoURL} />
                                    <Tooltip id="my-tooltip" />
                                </div>
                            </div>
                            <button onClick={handleLogOut} className="btn bg-green-400 text-white text-lg font-semibold">LogOut</button>
                        </div>

                        :
                        <Link to="/login">
                            <button className="btn bg-green-400 text-white text-lg font-semibold">Login</button>
                        </Link>

                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar;