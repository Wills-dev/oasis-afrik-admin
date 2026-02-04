const EmptyStateContent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="text-center space-y-3">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        {title}
      </h2>
      <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base">
        {description}
      </p>
    </div>
  );
};

export default EmptyStateContent;
