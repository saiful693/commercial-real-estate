import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";




const Register = () => {

    const { createUser, updateInfo } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [showPassword, setShowPassword] = useState(false);


    const onSubmit = async (data) => {

        const { name, photo, email, password } = data;

        // Create user with email and password

        await createUser(email, password)
            .then(() => {
                toast.success("User registered successfully!");
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                toast.error("Error registering user: " + error.message);
            })
        await updateInfo(name, photo)
            .then()
            .catch()


    };


    return (
        <div>
            <Helmet>
                <title>Benaa | Register</title>
            </Helmet>
            <div>
                <h2 className="text-3xl my-8 text-center">Please Register</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            {...register('name', { required: "Name is required" })}
                            type="text" placeholder="Name" className="input input-bordered" />
                        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register('email', {
                                required: "Email is required",
                            })}
                            type="email" placeholder="Email" className="input input-bordered" />
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            {...register('photo', {
                                required: "photo is required",
                            })}
                            type="text" placeholder="Photo URL" className="input input-bordered" />
                        {errors.photo && <span className="text-red-500">{errors.photo.message}</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                {...register('password', {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters"
                                    },
                                    validate: {
                                        hasUpperCase: (value) =>
                                            /[A-Z]/.test(value) || "Password must contain at least one uppercase letter",
                                        hasLowerCase: (value) =>
                                            /[a-z]/.test(value) || "Password must contain at least one lowercase letter"
                                    }
                                })}
                                type={showPassword ? 'text' : 'password'}
                                name="password" placeholder="Password" className="input input-bordered  w-full" required />
                            <span className="absolute  top-1/3 right-3" onClick={() => setShowPassword(!showPassword)}>{
                                showPassword ? <FaEyeSlash /> : <FaEye />
                            } </span>

                            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>

                <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-600 font-bold">Login</Link> </p>
            </div>

        </div>
    );
};

export default Register;