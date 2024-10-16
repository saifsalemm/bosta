import useNavbar from "../hooks/useNavbar";
import style from "../navbar.module.css";

const SwitchLanguage = () => {
  const { switchLang, toggleLanguage } = useNavbar();

  return (
    <span onClick={toggleLanguage} className={style.switchLang}>
      {switchLang}
    </span>
  );
};

export default SwitchLanguage;
