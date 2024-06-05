import { Link, useLoaderData, useParams } from "react-router-dom";
import { LuAreaChart } from "react-icons/lu";
import { Helmet } from "react-helmet-async";


const EstateDetails = () => {

    const { id } = useParams();
    const properties = useLoaderData();

    const property = properties.find(property => property.id === parseInt(id));
    const { estate_title,description, segment_name, area, facilities, price, location, status, image } = property;




    return (
        <div className="mt-10 card bg-white shadow-xl">
            <Helmet>
                <title>Benaa | Estate Details | {id}</title>
            </Helmet>
            <figure className="rounded-none"><img src={image} alt="" className="w-full lg:h-[700px]  object-cover" /></figure>
            <div className="card-body">
                <p><span className="uppercase font-medium">Usdt</span> <strong className="text-xl">{price}</strong>  </p>
                <p className="font-medium">{location}</p>
                <p className="flex gap-2 items-center"><LuAreaChart className="font-semibold"/>{area}</p>
                <h2 className="card-title">{estate_title}</h2>
                <p>{description}</p>
                <div>
                    <h2 className="text-lg font-semibold">Property Information</h2>
                    <p className="flex gap-10 ml-10">Type     <span className="font-medium ">{segment_name}</span></p>
                    <p className="flex gap-10 ml-10">Purpose <span className="font-medium ">{status}</span></p>
                    <p className="flex gap-10 ml-10">Facilities <span className="font-medium ">{facilities.map(facility => <span className="" key={facility.idx}>{facility}, </span>)}</span></p>
                </div>
                <div className="flex">
                    <p></p>
                    <strong className="uppercase text-lg"></strong>
                </div>
                
                {/* <p><strong>Facilities:</strong> </p> */}
                

                <div className="card-actions justify-center">
                    <Link to="" className="btn btn-ghost w-full font-bold text-xl text-green-500">Book Property</Link>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;