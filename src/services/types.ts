export type ShipmentStatusI =
  | "TICKET_CREATED"
  | "PACKAGE_RECEIVED"
  | "OUT_FOR_DELIVERY"
  | "DELIVERED"
  | "DELIVERY_FAILED"
  | "IN_TRANSIT"
  | "AVAILABLE_FOR_PICKUP"
  | "NOT_YET_SHIPPED"
  | "CANCELLED"
  | "WAITING_FOR_CUSTOMER_ACTION"
  | "DELIVERED_TO_SENDER";

export interface ShipmentDataI {
  provider: "Bosta";
  CurrentStatus: {
    state: ShipmentStatusI;
    timestamp: string;
  };
  PromisedDate: string;
  TrackingNumber: string;
  TrackingURL: string;
  SupportPhoneNumbers: string[];
  TransitEvents: [
    {
      state: ShipmentStatusI;
      timestamp: string;
      hub?: string;
    }
  ];
  CreateDate: string;
  isEditableShipment: boolean;
  nextWorkingDay: [
    {
      dayDate: string;
      dayName: string;
    }
  ];
}

export enum ShipmentStatusEnum {
  TICKET_CREATED = "shipment_created",
  PACKAGE_RECEIVED = "shipment_received_from_merchant",
  OUT_FOR_DELIVERY = "shipment_out_for_delivery",
  DELIVERED = "delivered",
  DELIVERY_FAILED = "shipment_cancelled_by_merchant",
  IN_TRANSIT = "in_transit",
  NOT_YET_SHIPPED = "not_yet_shipped",
  DELIVERED_TO_SENDER = "delivered_to_sender",
  AVAILABLE_FOR_PICKUP = "available_for_pickup",
  WAITING_FOR_CUSTOMER_ACTION = "waiting_for_customer_action",
  CANCELLED = "cancelled",
}
