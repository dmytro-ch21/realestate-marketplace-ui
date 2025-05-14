import Hero from '../../components/hero/Hero';
import PropertyCard from '../../components/PropertyCard';
import PropertyListing from '../../components/PropertyListing'
import { useGlobalStore } from '../../hooks/useGlobalStore';

function Landing() {
  const { store, dispatch } = useGlobalStore();
  console.log("Accessed store:", store)
  return (
    <div className="container-fluid">
      <div>
        <Hero />
      </div>
      <div className='container mt-4'>
      <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="h3 mb-1">Homes For You</h2>
            <p className="text-muted mb-0">Based on homes you recently viewed</p>
          </div>
        </div>
        <PropertyListing properties={store.listings.slice(0, 4)}/>
      </div>
    </div>
  );
}

export default Landing;
