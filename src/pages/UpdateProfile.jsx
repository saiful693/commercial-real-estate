import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";



const UpdateProfile = () => {

    const {user,updateInfo}=useContext(AuthContext)
   const [userName,setUserName]=useState(user.displayName);
   const [userPhoto,setUserPhoto]=useState(user.photoURL);
   const navigate = useNavigate();
    const location = useLocation();
   
   

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit =async()=>{
        await updateInfo(userName,userPhoto)
        toast.success("User update successfully!");
        navigate(location?.state ? location.state : '/')

    }
       
    

    return (
        <div>
        <Helmet>
            <title>Benaa | Update user</title>
        </Helmet>
        <div>
            <h2 className="text-3xl my-8 text-center">Update Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
            <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            {...register('name', { required: "Name is required" })}
                            onChange={(e) => setUserName(e.target.value)} type="text" name="name" placeholder="Name" value={userName} className="input input-bordered" />
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
                        type="email" placeholder="Email" value={user.email} className="input input-bordered" />
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
                        onChange={(e) => setUserPhoto(e.target.value)}  type="text" placeholder="Photo URL" value={userPhoto}  className="input input-bordered" />
                    {errors.photo && <span className="text-red-500">{errors.photo.message}</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="relative">
                        <input  name="password" placeholder="Password"  className="input input-bordered  w-full"  disabled/>
                    </div>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update</button>
                </div>
            </form>

            
        </div>

    </div>
    );
};

export default UpdateProfile;