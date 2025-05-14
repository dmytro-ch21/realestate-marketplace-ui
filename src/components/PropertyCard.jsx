import { Link } from 'react-router';

function PropertyCard({property}) {
  console.log('Rendering a property card');
  return (
    <Link to={'/listings'} className="text-decoration-none">
      <div className="card">
        {console.log(property.images[0].image_url)}
        <img src={property.images[0].image_url} className="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
