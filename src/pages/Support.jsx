
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const Support = () => {

    const services = useLoaderData();
    // const {service_title,service_type}=services

    return (
        <div>
            <Helmet>
                <title>Benaa | Support</title>
            </Helmet>
            {/* banner */}
            <div className="hero rounded-lg" style={{ backgroundImage: 'url(https://cdn-ckdap.nitrocdn.com/ibkjcADpOVHAMmMGABlekNLKmOeXxucL/assets/images/optimized/rev-cc56d95/www.baymgmtgroup.com/wp-content/uploads/2017/09/top-reasons-choose-property-management-company.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-full py-32">
                        <h1 className="mb-5 text-5xl font-bold">LEGAL SERVICES SUPPORT</h1>
                        <p className="mb-5 text-2xl font-bold">MUTATION | PERMISSION | DEED | PLAN & AMP | NEC | C.S. S.A. R.S. | MOUZA MAP | CERTIFICATIONS</p>
                        <button className="mr-10 btn btn-lg bg-green-800 border-none text-2xl text-white">Apply For Legal Services</button>
                        <button className="btn btn-lg text-green-800 border-none text-2xl bg-white">View All Services</button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 py-15 px-10 h-40 mt-10 flex items-center rounded-xl rounded-b-none">
                <p className="text-xl">There are many legal documents and processes that need to be managed and handled during any property transaction. This can range from formally having your name appear against the government’s records to even having the permission to sell a property in the first place. Bproperty Legal services take care of all this to ensure you do not get lost in the paperwork and can focus entirely on the property transaction.</p>
            </div>

            {/*  */}
            <div className="hero h-52 rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/mqwrB7G/service.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-full ">
                        <h1 className="mb-5 text-5xl font-bold"><span className="text-2xl mb-3">All Services</span><br />ASSISTANCE</h1>

                    </div>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-2xl mb-2">Document Withdrawl Services</h2>
                <ul className="grid grid-cols-2">
                    {

                        services.map(service =>
                            <li key={service.id}>-{service.service_title}</li>
                        )

                    }
                </ul>

            </div>

            {/* collapse */}
            <div className="mt-16">
                <h1 className="text-4xl text-gray-500 font-bold">Services Details</h1>
                <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3"  />
                    <div className="collapse-title text-xl font-medium">
                        Legal Document Vetting
                    </div>
                    <div className="collapse-content">
                        <p>Ensure every document is exactly how and where it is supposed to be for carefree living and investment possibilities with the best property legal services in Bangladesh.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus ">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    Changing Property Ownership
                    </div>
                    <div className="collapse-content">
                        <p>Benaa helps provides the property legal services in Dhaka required for changing title ownership from one person to another.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    Deed Acquisition:
                    </div>
                    <div className="collapse-content">
                        <p>Benaa helps you in the acquisition of various deeds required for a multitude of approvals and as proof of ownership.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    Need Professional Management?
                    </div>
                    <div className="collapse-content">
                        <p>Benaa can act as an authorized representative working to help you achieve your requirements without you needing to take part in the activities.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    Need Construction Approval?
                    </div>
                    <div className="collapse-content">
                        <p>Benaa will help you ensure you are legally allowed to occupy and use a property with all the approval necessary from governing bodies such as RAJUK.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    Occupancy Certificate:
                    </div>
                    <div className="collapse-content">
                        <p>Benaa will help you ensure you are legally allowed to occupy and use a property with all the approval necessary from governing bodies such as RAJUK..</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;