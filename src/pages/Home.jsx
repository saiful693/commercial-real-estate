import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Estate from "./Estate";


const Home = () => {
    const propertys = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="mt-16">
                <h1 className="text-4xl font-bold text-green-400 uppercase mt-20 mb-10 text-center">Commercial</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    propertys.map(property=> <Estate key={property.id} property={property}></Estate>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;