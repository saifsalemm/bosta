import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Languages, savedLanguageKey } from "../../../i18n/i18n";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setShowNav } from "../../../store/slices/navbarSlice";

const useNavbar = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  const lang = i18n.language as Languages;
  const { showNavMenu } = useAppSelector((state) => state.navbar);

  const homePage = t("home_page_title");
  const pricingPage = t("pricing_page_title");
  const contactSalesPage = t("contact_sales_page_title");
  const trackShipmentPage = t("track_shipment_page_title");
  const loginPage = t("login_page_title");
  const switchLang = t("switch_lang");
  const oppositeLang = lang === Languages.EN ? Languages.AR : Languages.EN;

  const toggleLanguage = () => {
    i18n.changeLanguage(oppositeLang);
    localStorage.setItem(savedLanguageKey, oppositeLang);
  };

  const setShowNavMenu = () => {
    dispatch(setShowNav());
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "dir",
      lang === Languages.AR ? "rtl" : "ltr"
    );
    document.documentElement.setAttribute(
      "lang",
      lang === Languages.AR ? "ar" : "en"
    );
  }, [lang]);

  return {
    lang,
    homePage,
    pricingPage,
    contactSalesPage,
    trackShipmentPage,
    loginPage,
    switchLang,
    showNavMenu,
    openSearch,
    setOpenSearch,
    setShowNavMenu,
    toggleLanguage,
  };
};

export default useNavbar;
