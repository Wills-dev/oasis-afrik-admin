const NewProductHeader = ({
  step,
  title = "Upload Product",
}: {
  step: number;
  title?: string;
}) => {
  const progressWidth = step === 1 ? "w-1/2" : step === 2 ? "w-full" : "w-0";
  return (
    <div className="space-y-2">
      <h6 className="sm:text-xl text-lg font-medium ">{title}</h6>
      <p className="text-gray-500 max-sm:text-sm">{step}/2</p>
      <div className="w-full h-1 rounded-full bg-gray-200">
        <div className={`h-full ${progressWidth} bg-black rounded-full`}></div>
      </div>
    </div>
  );
};

export default NewProductHeader;
