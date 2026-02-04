const Container = ({
  children,
  className = "xl:px-14",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={` 2xl:max-w-[1400px] w-full mx-auto px-4 sm:px-6  ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
