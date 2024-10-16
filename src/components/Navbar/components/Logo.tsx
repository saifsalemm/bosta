import AR_LOGO from "../../../assets/ar-logo.svg";
import EN_LOGO from "../../../assets/en-logo.svg";
import { Languages } from "../../../i18n/i18n";
import useNavbar from "../hooks/useNavbar";
import style from "../navbar.module.css";

const Logo = () => {
  const { lang } = useNavbar();
  return (
    <div className={style.logo}>
      {lang === Languages.EN ? (
        <img src={EN_LOGO} alt="Bosta" />
      ) : (
        <img src={AR_LOGO} alt="Bosta" />
      )}
    </div>
  );
};

export default Logo;
