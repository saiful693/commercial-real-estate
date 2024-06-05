import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center">
            <div>
            <h2 className="text-5xl">Oops 404 !!!</h2>
             <h3 className="text-4xl">page not found</h3>
            <p >Go back to <Link className="text-blue-400">home</Link> </p>
            </div>
        </div>
    );
};

export default ErrorPage;