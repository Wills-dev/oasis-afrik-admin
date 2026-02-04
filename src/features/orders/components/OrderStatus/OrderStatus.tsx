interface OrderStatusProps {
  bgColor?: string;
  textColor?: string;
  icon: React.ReactElement;
  status: string;
  description: string;
}

const OrderStatus = ({
  bgColor = "bg-gray-100 text-gray-400",
  textColor = "text-gray-400",
  icon,
  status,
  description,
}: OrderStatusProps) => {
  return (
    <div className="flex flex-col xl:items-end items-center">
      <div className="flex max-xl:flex-col items-center">
        <div
          className={`xl:w-[180px] xl:min-w-[180px] xl:h-1 w-1 h-[150px] ${bgColor}`}
        />
        <div
          className={`w-[60px] h-[60px] min-w-[40px] min-h-[40px] rounded-full flex items-center justify-center ${bgColor}`}
        >
          {icon}
        </div>
      </div>
      <div className="w-fit">
        <p className={`${textColor} font-medium max-sm:text-sm text-center`}>
          {status}
        </p>
        <p className="sm:text-sm text-xs text-gray-600 text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default OrderStatus;
