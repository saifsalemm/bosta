import { Link } from "react-router-dom";
import { RoutesEnum } from "../../App";
import "./navbar.module.css";
import AR_LOGO from "../../assets/ar-logo.svg";
import EN_LOGO from "../../assets/en-logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={AR_LOGO} alt="logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to={RoutesEnum.SHIPMENT_PAGE}>Home</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
