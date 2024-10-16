import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ShipmentDetails from "./pages/ShipmentDetailsPage";
import { store } from "./store/store";

export enum RoutesEnum {
  SHIPMENT_PAGE = "/",
}

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route path={RoutesEnum.SHIPMENT_PAGE} element={<ShipmentDetails />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
