export const StatusStepMapper = {
  TICKET_CREATED: { step: 1, color: "orangeBG", progress: "stepOne" },
  PACKAGE_RECEIVED: { step: 3, color: "orangeBG", progress: "stepThree" },
  OUT_FOR_DELIVERY: { step: 3, color: "orangeBG", progress: "stepThree" },
  DELIVERED: { step: 4, color: "greenBG", progress: "stepFour" },
  DELIVERY_FAILED: { step: 3, color: "redBG", progress: "stepThree" },
  IN_TRANSIT: { step: 2, color: "orangeBG", progress: "stepTwo" },
  NOT_YET_SHIPPED: { step: 1, color: "orangeBG", progress: "stepOne" },
  DELIVERED_TO_SENDER: { step: 3, color: "orangeBG", progress: "stepThree" },
  AVAILABLE_FOR_PICKUP: { step: 3, color: "orangeBG", progress: "stepThree" },
  WAITING_FOR_CUSTOMER_ACTION: {
    step: 3,
    color: "orangeBG",
    progress: "stepThree",
  },
  CANCELLED: { step: 3, color: "redBG", progress: "stepThree" },
};
