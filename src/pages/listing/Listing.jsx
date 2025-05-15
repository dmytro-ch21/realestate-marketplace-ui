import { useNavigate, useParams } from 'react-router';
import { useGlobalStore } from '../../hooks/useGlobalStore';
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapLocation,
  FaHouseChimney,
} from 'react-icons/fa6';

function Listing() {
  const { store, _ } = useGlobalStore();
  const { id } = useParams();
  const propertyId = parseInt(id);
  const navigate = useNavigate()

  // fetch to api
  // mocked - get it from the store
  const property = store.listings.find((p) => p.id === propertyId);

  const fullAddress = `${property.address}, ${property.city}, ${property.state}, ${property.zip_code}`;

  const query = encodeURIComponent(fullAddress);

  const formatPriceUS = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(property.price);

  if (!property) {
    return (
      <div className="container mt-5">
        <h2>Property with id {propertyId} not found</h2>
        <p>
          The property you're looking for does not exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="container my-4">
      {/* heading and go back button */}
      <div className="d-flex justify-content-between">
        <h2>Listing Page</h2>
        {/* button to go back */}
        <button className="btn btn-link text-decoration-none"
            onClick={() => navigate(-1)}
        >
          &larr; Go back
        </button>
      </div>
      {/* Image */}
      <div className="row g-3">
        <div className="col-12">
          <div className="card border">
            <img
              src={property.images[0].image_url}
              alt="..."
              className="card-img-top"
            />
          </div>
        </div>
        {/* Price */}
        <div className="col-md-6">
          <div className="card border">
            <div className="card-body py-2">
              <p className="m-0"> Price: {formatPriceUS}</p>
            </div>
          </div>
        </div>
        {/* Specs */}
        <div className="col-md-6">
          <div className="card border">
            <div className="card-body py-2">
              <div className="d-flex justify-content-between">
                <span>
                  <FaBed className="me-2" />
                  {property.bedrooms}
                </span>
                <span>
                  <FaBath className="me-2" />
                  {property.bathrooms}
                </span>
                <span>
                  <FaRulerCombined className="me-2" />
                  {property.area_sqft}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Address and Constact Field */}
        <div className="col-md-8">
          <div className="card border">
            <div className="card-body py-2">
              <p className="m-0">
                {' '}
                <FaMapLocation className="me-2" /> {fullAddress}{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border">
            <div className="card-body d-flex justify-content-between py-1">
              <input
                type="text"
                className="border-0 w-75"
                placeholder="Send a message to the real estate agent.."
              />
              <button className="btn btn-primary btn-sm">Contact</button>
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="col-12">
          <div className="card border">
            <div className="card-body">
              <p className="mb-2">
                <FaHouseChimney className="me-1" />
                <span className="text-capitalize">
                  {property.property_type}
                </span>
              </p>
              <p className="fw-bolder mb-2">{property.title}</p>
              <p className="mb-0">{property.description}</p>
            </div>
          </div>
        </div>
        {/* Include a map */}
        {/* https://www.google.com/maps?q=your+query&output=embed */}
        <div className="col-12">
          <div className="card border">
            <div className="card-body py-2">
              <h5>Location</h5>
              <iframe
                title="Property Location"
                width="100%"
                height="300"
                src={`https://www.google.com/maps?q=${query}&output=embed`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
