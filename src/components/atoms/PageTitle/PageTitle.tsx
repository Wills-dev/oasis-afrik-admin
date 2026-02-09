import React from "react";

const PageTitle = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div>
      <h1 className="sm:text-3xl text-2xl font-bold text-gray-800 dark:text-white">
        {title}
      </h1>
      {description && (
        <p className="dark:text-gray-400 text-gray-600 max-sm:text-sm mt-1">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageTitle;
