import { useTranslation } from "react-i18next";
import { ShipmentStatusEnum } from "../../../../services/types";
import { useAppSelector } from "../../../../store/hooks";
import { StatusStepMapper } from "../../utils";

const useTimelineComments = () => {
  const { t, i18n } = useTranslation();

  const shipmentCreated = t("shipment_created");
  const shipmentReceivedFromMerchant = t("shipment_received_from_merchant");
  const shipmentOutForDelivery = t("shipment_out_for_delivery");

  const delivered = t("delivered");

  const { CurrentStatus } = useAppSelector((state) => state.shipment.data);

  const currentStep = StatusStepMapper[CurrentStatus.state].step;
  const currentColor = StatusStepMapper[CurrentStatus.state].color;

  console.log("asafsddsa", currentColor, CurrentStatus.state);

  const dir = i18n.language === "en" ? "ltr" : "rtl";

  const comment =
    currentStep < 4 ? t(ShipmentStatusEnum[CurrentStatus.state]) : "";

  const steps = [
    {
      step: 1,
      text: shipmentCreated,
      comment: currentStep === 1 ? comment : "",
    },
    {
      step: 2,
      text: shipmentReceivedFromMerchant,
      comment: currentStep === 2 ? comment : "",
    },
    {
      step: 3,
      text: shipmentOutForDelivery,
      comment: currentStep === 3 ? comment : "",
    },
    {
      step: 4,
      text: delivered,
      comment: currentStep === 4 ? comment : "",
    },
  ];

  return {
    steps,
    currentColor,
    dir,
  };
};

export default useTimelineComments;
