import { Outlet, Link } from "react-router-dom";
import '../Layout/Layout.css';

const Layout = () => {
  return (
    <>
      <nav className="header-container">
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/contact" className="nav-link">Features</Link>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;