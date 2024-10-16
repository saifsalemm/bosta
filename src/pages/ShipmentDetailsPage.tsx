import DetailesSection from "../components/DetailesSection/DetailesSection";
import SearchForShipmentAtHome from "../components/SearchForShipmentAtHome/SearchForShipmentAtHome";
import StatusTimeline from "../components/StatusTimeline/StatusTimeline";
import { useAppSelector } from "../store/hooks";

const ShipmentDetailsPage = () => {
  const {
    data: { CreateDate },
    isPending,
    error,
  } = useAppSelector((state) => state.shipment);

  if (!CreateDate) return <SearchForShipmentAtHome />;

  if (isPending)
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    );
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <StatusTimeline />
      <DetailesSection />
    </>
  );
};

export default ShipmentDetailsPage;
