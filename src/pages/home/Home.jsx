import PropertyListing from '../../components/PropertyListing.jsx';
import SearchBar from '../../components/SearchBar.jsx'
import { useGlobalStore } from '../../hooks/useGlobalStore.js';

function Home() {
  const { store, _ } = useGlobalStore();

  return (
    <div className="container my-4 p-0">
      <h2 className="fw-bold mb-4">Listings Page</h2>
      <SearchBar className="mx-0"/>
      <PropertyListing properties={store.listings} />
    </div>
  );
}

export default Home;
