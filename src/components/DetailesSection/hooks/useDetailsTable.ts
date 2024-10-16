import { useTranslation } from "react-i18next";
import { ShipmentStatusEnum } from "../../../services/types";
import { useAppSelector } from "../../../store/hooks";

const useDetailsTable = () => {
  const { t, i18n } = useTranslation();
  const { TransitEvents } = useAppSelector((state) => state.shipment.data);
  const lang = i18n.language === "en" ? "en-US" : "ar-EG";

  const shipmentDetails = t("shipment_details");
  const branch = t("branch");
  const date = t("date");
  const time = t("time");
  const details = t("details");

  const tableRows = TransitEvents.map((item) => {
    return {
      ...item,
      state: t(ShipmentStatusEnum[item.state]),
      time: new Date(item.timestamp)
        .toLocaleTimeString(lang, {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        })
        .toLowerCase(),
      date: new Date(item.timestamp).toLocaleDateString(lang, {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      }),
    };
  });

  return { shipmentDetails, branch, date, time, details, tableRows };
};

export default useDetailsTable;
