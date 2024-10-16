import { Link } from "react-router-dom";
import useNavbar from "../hooks/useNavbar";
import styles from "../navbar.module.css";
import SearchFromNav from "./SearchFromNav";
import SwitchLanguage from "./SwitchLanguage";

const SideLinks = () => {
  const {
    trackShipmentPage,
    loginPage,
    showNavMenu,
    openSearch,
    setOpenSearch,
  } = useNavbar();

  return (
    <ul
      className={`${styles.sideNavLinks} ${
        showNavMenu ? "" : styles.showNavMenu
      }`}
    >
      <li className={styles.searchFromNavLink}>
        <Link to="#" onClick={() => setOpenSearch((prev) => !prev)}>
          <p className={openSearch ? styles.red : ""}>{trackShipmentPage}</p>
        </Link>
        {openSearch && <SearchFromNav />}
      </li>
      <li>
        <Link to="#">{loginPage}</Link>
      </li>
      <li>
        <SwitchLanguage />
      </li>
    </ul>
  );
};

export default SideLinks;
