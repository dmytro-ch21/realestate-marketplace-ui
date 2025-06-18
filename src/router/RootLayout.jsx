import { Outlet, useNavigate } from "react-router";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import NavButton from "../components/NavButton.jsx";
import { useGlobalStore } from "../hooks/useGlobalStore.js";
import { isTokenValid } from "../utils/auth.js";

function RootLayout() {
  const navigate = useNavigate();
  const { store, dispatch } = useGlobalStore();
  const handleLogOut = () => {
    console.log("Logging Out...");
    dispatch({type: "LOGOUT"});
    navigate("/login");
  }
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar>
        {!isTokenValid() ? (
          <>
            <button
              className="btn btn-outline-primary me-2"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            <NavButton to="/home" text="Listings" />
            <NavButton to="/landing" text="Landing" />
            <NavButton to="/wishlist" text="Wishlist" />
            <NavButton to="/profile" text="Profile" />
            <button className="btn btn-sm btn-primary" onClick={handleLogOut}>
              Log Out
            </button>
          </>
        )}
      </Navbar>
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
