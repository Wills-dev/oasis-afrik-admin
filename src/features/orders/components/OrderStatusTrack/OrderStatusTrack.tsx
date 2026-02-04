import OrderStatus from "../OrderStatus/OrderStatus";
import PaymentWarning from "@/components/molecules/PaymentWarning/PaymentWarning";

const OrderStatusTrack = ({
  status,
  isUserBuyer,
}: {
  status: string;
  isUserBuyer: boolean;
}) => {
  const ORDER_FLOW = ["processing", "in_transit", "delivered", "received"];

  const isActive = (step: string) =>
    ORDER_FLOW.indexOf(step) <= ORDER_FLOW.indexOf(status);

  return (
    <div className="border border-gray-200 rounded-lg p-[24px] space-y-6">
      <h6 className="sm:text-xl text-lg font-medium">Order status</h6>
      <div className="flex xl:items-center max-xl:flex-col">
        <OrderStatus
          bgColor={
            isActive("processing")
              ? "bg-green-500 text-white"
              : "bg-gray-100 text-gray-400"
          }
          textColor={
            isActive("processing") ? "text-green-500" : "text-gray-400"
          }
          status="Processing"
          icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          description="Packing up  order"
        />
        <OrderStatus
          bgColor={
            isActive("in_transit")
              ? "bg-green-500 text-white"
              : "bg-gray-100 text-gray-400"
          }
          textColor={
            isActive("in_transit") ? "text-green-500" : "text-gray-400"
          }
          status="In transit"
          icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 2V12C15 13.1 14.1 14 13 14H2V6C2 3.79 3.79 2 6 2H15Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39001 18.58 6.01001L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          description="Order shipped"
        />
        <OrderStatus
          bgColor={
            isActive("delivered")
              ? "bg-green-500 text-white"
              : "bg-gray-100 text-gray-400"
          }
          textColor={isActive("delivered") ? "text-green-500" : "text-gray-400"}
          status="Delivered"
          icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.16992 7.44043L11.9999 12.5504L20.7699 7.47043"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 21.61V12.54"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.92965 2.48028L4.58965 5.44028C3.37965 6.11028 2.38965 7.79028 2.38965 9.17028V14.8203C2.38965 16.2003 3.37965 17.8803 4.58965 18.5503L9.92965 21.5203C11.0696 22.1503 12.9396 22.1503 14.0796 21.5203L19.4196 18.5503C20.6296 17.8803 21.6196 16.2003 21.6196 14.8203V9.17028C21.6196 7.79028 20.6296 6.11028 19.4196 5.44028L14.0796 2.47028C12.9296 1.84028 11.0696 1.84028 9.92965 2.48028Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          description="Order is at destination"
        />
        <OrderStatus
          bgColor={
            isActive("received")
              ? "bg-green-500 text-white"
              : "bg-gray-100 text-gray-400"
          }
          textColor={isActive("received") ? "text-green-500" : "text-gray-400"}
          status="Received"
          icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 13.7502C9.5 14.7202 10.25 15.5002 11.17 15.5002H13.05C13.85 15.5002 14.5 14.8202 14.5 13.9702C14.5 13.0602 14.1 12.7302 13.51 12.5202L10.5 11.4702C9.91 11.2602 9.51001 10.9402 9.51001 10.0202C9.51001 9.18023 10.16 8.49023 10.96 8.49023H12.84C13.76 8.49023 14.51 9.27023 14.51 10.2402"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 7.5V16.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 6V2H18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 7L22 2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          description="Received by buyer"
        />
      </div>
      {!isUserBuyer && <PaymentWarning />}
    </div>
  );
};

export default OrderStatusTrack;
