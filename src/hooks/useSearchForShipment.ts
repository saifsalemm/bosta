import { useTranslation } from "react-i18next";
import useShipmentDetails from "./useShipmentDetails";

const useSearchForShipment = () => {
  const { isPending, error, inputRef, fetchShipmentData } =
    useShipmentDetails();

  const { t } = useTranslation();

  const searchText = t("search_for_shipment");
  const searchButton = t("search_btn");

  return {
    isPending,
    error,
    inputRef,
    fetchShipmentData,
    searchText,
    searchButton,
  };
};

export default useSearchForShipment;
