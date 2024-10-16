import { createSlice } from "@reduxjs/toolkit";
import { ShipmentDataI } from "../../services/types";

const initialState: {
  error: Error | null;
  isPending: boolean;
  data: ShipmentDataI;
} = {
  isPending: false,
  error: null,
  data: {
    provider: "Bosta",
    CurrentStatus: {
      state: "DELIVERED_TO_SENDER",
      timestamp: "",
    },
    PromisedDate: "",
    TrackingNumber: "",
    TrackingURL: "",
    SupportPhoneNumbers: [""],
    TransitEvents: [
      {
        state: "TICKET_CREATED",
        timestamp: "",
        hub: "",
      },
    ],
    CreateDate: "",
    isEditableShipment: false,
    nextWorkingDay: [
      {
        dayDate: "",
        dayName: "",
      },
    ],
  },
};

export const shipmentSLice = createSlice({
  name: "shipment",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setShipmentPending: (
      state: {
        error: Error | null;
        isPending: boolean;
        data: ShipmentDataI;
      },
      action: { payload: boolean }
    ) => {
      state.isPending = action.payload;
    },
    setShipmentError: (
      state: {
        error: Error | null;
        isPending: boolean;
        data: ShipmentDataI;
      },
      action: { payload: Error }
    ) => {
      state.error = action.payload;
    },
    setShipmentData: (
      state: {
        error: Error | null;
        isPending: boolean;
        data: ShipmentDataI;
      },
      action: { payload: ShipmentDataI }
    ) => {
      state.data = action.payload;
    },
  },
});

export const { setShipmentData, setShipmentPending, setShipmentError } =
  shipmentSLice.actions;
export default shipmentSLice.reducer;
