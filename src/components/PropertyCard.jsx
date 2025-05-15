import { Link } from 'react-router';
import { CiShoppingTag } from 'react-icons/ci';

function PropertyCard({ property }) {
  console.log('Rendering a property card');

  const formatPriceUS = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(property.price);

  const fullAddress = `${property.address}, ${property.city}, ${property.state}, ${property.zip_code}`;

  return (
    <Link to={`/listings/${property.id}`} className="text-decoration-none">
      <div className="card">
        {console.log(property.images[0].image_url)}
        <img
          src={property.images[0].image_url}
          className="card-img-top"
          alt="..."
        />
        <div class="card-body">
          {/* Title as price */}
          <h5 className="card-title fw-bold">{formatPriceUS}</h5>
          {/* Specs */}
          <div className="d-flex gap-2 mb-2">
            <span>{property.bedrooms} beds</span>
            <span>|</span>
            <span>{property.bathrooms} baths</span>
            <span>|</span>
            <span>{property.area_sqft} sqft</span>
          </div>
          {/* Title, Address, Type */}
          <p class="card-text fw-bolder mb-2 text-truncate">{property.title}</p>
          <p class="card-text small text-muted mb-2 text-truncate">{fullAddress}</p>

          <div>
          <CiShoppingTag/>
            <span className='text-capitalize ms-2'>
              {property.property_type}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
