import { useTranslation } from "react-i18next";

const useAddressAndContactUs = () => {
  const { t } = useTranslation();
  const destination = t("shipment_destination");
  const somethingWorng = t("something_wrong_with_this_shipment");
  const reportProblem = t("report_a_problem");

  return { destination, somethingWorng, reportProblem };
};

export default useAddressAndContactUs;
