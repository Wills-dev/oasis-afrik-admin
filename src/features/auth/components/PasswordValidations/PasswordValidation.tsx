import { motion, AnimatePresence } from "framer-motion";

const PasswordValidation = ({
  password,
  validations,
}: {
  password: string;
  validations: {
    hasLowerCase: boolean;
    hasNumber: boolean;
    hasSpecialChar: boolean;
    hasUpperCase: boolean;
    minLength: boolean;
  };
}) => {
  const validationRules = [
    { label: "At least 8 characters", isValid: validations.minLength },
    { label: "Lowercase letter", isValid: validations.hasLowerCase },
    { label: "Uppercase letter", isValid: validations.hasUpperCase },
    {
      label: "Number ",
      isValid: validations.hasNumber,
    },
    {
      label: "Special character",
      isValid: validations.hasSpecialChar,
    },
  ];

  return (
    <div
      className={`flex flex-col gap-2 pt-1 ${
        !password ? "opacity-45" : "opacity-100"
      }`}
    >
      {validationRules.map(({ label, isValid }, index) => (
        <div key={index} className="flex items-center gap-2">
          <AnimatePresence>
            {!password ? (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.span>
            ) : !isValid ? (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.span>
            ) : (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.span>
            )}
          </AnimatePresence>
          <span className="text-gray-600 dark:text-gray-300 text-xs">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PasswordValidation;
