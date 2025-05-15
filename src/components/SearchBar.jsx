import { FaSearchLocation } from 'react-icons/fa';

function SearchBar() {
  return (
    <div className="container mb-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div class="input-group input-group-lg shadow-sm">
            <input
              type="text"
              class="form-control py-2"
              placeholder="Search by address, city, or ZIP code..."
              aria-label="Search Properties"
            />
            <button className='btn btn-primary ' type="button"> 
                <FaSearchLocation/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
