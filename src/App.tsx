import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ShipmentDetails from "./pages/ShipmentDetailsPage";

export enum RoutesEnum {
  SHIPMENT_PAGE = "/",
}

const App: React.FC = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path={RoutesEnum.SHIPMENT_PAGE} element={<ShipmentDetails />} />
    </Routes>
  </Router>
);

export default App;
