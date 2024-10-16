import { useTranslation } from "react-i18next";
import SHIPPING_CAR from "../../../../assets/delivery-car-svgrepo-com.svg";
import DONE from "../../../../assets/done-v-svgrepo-com.svg";
import PACKAGE from "../../../../assets/package-check-svgrepo-com.svg";
import { useAppSelector } from "../../../../store/hooks";
import { StatusStepMapper } from "../../utils";

const useTimelineProgress = () => {
  const { CurrentStatus } = useAppSelector((state) => state.shipment.data);
  const { i18n } = useTranslation();

  const currentStep = StatusStepMapper[CurrentStatus.state].step;
  const currentColor = StatusStepMapper[CurrentStatus.state].color;
  const progress = StatusStepMapper[CurrentStatus.state].progress;
  const dir = i18n.language === "en" ? "ltr" : "rtl";

  const steps = [
    {
      step: 1,
      icon: DONE,
      color: currentColor,
      style: "done",
      parentStyle: "",
    },
    {
      step: 2,
      icon: currentStep > 2 ? DONE : SHIPPING_CAR,
      color: currentStep >= 2 ? currentColor : "greyBG",
      style: currentStep <= 2 ? "icon" : "done",
      parentStyle: currentStep <= 2 ? "padIcon" : "",
    },
    {
      step: 3,
      icon: currentStep > 3 ? DONE : SHIPPING_CAR,
      color: currentStep >= 3 ? currentColor : "greyBG",
      style: currentStep <= 3 ? "icon" : "done",
      parentStyle: currentStep <= 3 ? "padIcon" : "",
    },
    {
      step: 4,
      icon: currentStep === 4 ? DONE : PACKAGE,
      color: currentStep === 4 ? currentColor : "greyBG",
      style: currentStep < 4 ? "icon" : "done",
      parentStyle: currentStep < 4 ? "padIcon" : "",
    },
  ];

  return { steps, currentColor, progress, dir };
};

export default useTimelineProgress;
