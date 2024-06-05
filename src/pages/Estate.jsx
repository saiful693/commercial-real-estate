import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Estate = ({ property }) => {
    const {id, estate_title, segment_name, area, facilities, price, location, status, image } = property;

    return (
        <div className="card bg-white shadow-xl">
            <figure><img src={image} alt="" className="w-full h-52 object-cover" /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <div className="flex">
                    <p>{segment_name}</p>
                    <strong className="uppercase text-lg">{status}</strong> 
                </div>
                <p><strong className="mr-2">Area:</strong>{area} </p>
                <p><strong>Facilities:</strong> {facilities.map(facility => <span className="" key={facility.idx}>{facility}, </span>)}</p>
                <p><strong className="mr-2">Location:</strong>{location} </p>
                <p><strong>Price:</strong> {price} </p>
                <div className="card-actions justify-end">
                    <Link to={`/estate/${id}`} className="btn btn-primary">View Property</Link>
                </div>
            </div>
        </div>

    );
};


Estate.propTypes = {
    property: PropTypes.object,
}

export default Estate;