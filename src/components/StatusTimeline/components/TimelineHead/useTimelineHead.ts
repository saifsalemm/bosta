import { useTranslation } from "react-i18next";
import { ShipmentStatusEnum } from "../../../../services/types";
import { useAppSelector } from "../../../../store/hooks";
import { StatusStepMapper } from "../../utils";

const useTimelineHead = () => {
  const { t, i18n } = useTranslation();

  const {
    PromisedDate,
    CurrentStatus,
    TransitEvents,
    provider,
    TrackingNumber,
  } = useAppSelector((state) => state.shipment.data);

  const currentColor = StatusStepMapper[CurrentStatus.state].color;

  const lang = i18n.language === "en" ? "en-US" : "ar-EG";

  const shipmentId = `${t("shipment_id")} ${TrackingNumber}`;
  const lastEdit = t("last_updated");
  const merchant = t("merchant_name");
  const arrival = t("arrival_date");

  const shipmentIdValue = t(ShipmentStatusEnum[CurrentStatus.state]);
  const lastEditValue = new Date(
    TransitEvents[TransitEvents.length - 1].timestamp
  ).toLocaleDateString(lang, {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  const arrivalValue = new Date(PromisedDate).toLocaleDateString(lang, {
    hour12: true,
    hour: "numeric",
    weekday: "long",
    day: "numeric",
    year: "numeric",
    month: "numeric",
  });

  return {
    shipmentId,
    lastEdit,
    merchant,
    arrival,
    shipmentIdValue,
    lastEditValue,
    merchantValue: provider,
    arrivalValue,
    currentColor,
  };
};

export default useTimelineHead;
