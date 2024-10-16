import { Link } from "react-router-dom";
import { RoutesEnum } from "../../../App";
import useNavbar from "../hooks/useNavbar";
import styles from "../navbar.module.css";

const MidLinks = () => {
  const { homePage, pricingPage, contactSalesPage, showNavMenu } = useNavbar();

  return (
    <ul
      className={`${styles.midNavLinks} ${
        showNavMenu ? "" : styles.showNavMenu
      }`}
    >
      <li>
        <Link to={RoutesEnum.SHIPMENT_PAGE}>{homePage}</Link>
      </li>
      <li>
        <Link to="#">{pricingPage}</Link>
      </li>
      <li>
        <Link to="#">{contactSalesPage}</Link>
      </li>
    </ul>
  );
};

export default MidLinks;
