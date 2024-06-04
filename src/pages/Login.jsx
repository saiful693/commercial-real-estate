import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const {logIn, logInWithGoogle}=useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const email=form.get('email');
        const password=form.get('password');

        logIn(email, password)
        .then(()=>{
            toast.success("User login successfully!");
        })
        .catch(error=>{
            toast.error("Error registering user: " + error.message);
        })
    }

    const handleGoogleLogin=()=>{
        logInWithGoogle()
        .then(()=>{
            toast.success("User google login successfully!");
        })
        .catch(error=>{
            toast.error("Error registering user: " + error.message);
        })
    }

    return (
        <div>
            <h2 className="text-3xl my-8 text-center">Please login</h2>
            <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <div className="p-3 mb-4 text-center space-x-2">
                <button onClick={handleGoogleLogin} className="mb-2 btn border border-blue-200">
                <FcGoogle />
                    Login with Google
                </button>
                <button className=" btn border border-blue-200">
                <FaGithub />
                    Login with Github
                </button>
            </div>

            <p className="text-center mt-4">Do not have an account. <Link to="/register" className="text-blue-600 font-bold">Register</Link> </p>
           
        </div>
        
    );
};

export default Login;