"use client";

import { motion } from "framer-motion";

import DataField from "@/components/atoms/DataField/DataField";

const UserSummary = ({
  firstName,
  lastName,
  email,
  emailVerified,
  title,
  id,
}: {
  firstName: string;
  lastName: string;
  email: string;
  emailVerified: boolean;
  title: string;
  id: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
    >
      <div className="border-b border-slate-200 px-6 py-4 bg-slate-50">
        <h3 className="font-bold text-slate-900">{title}</h3>
      </div>
      <div className="p-6 space-y-3">
        <DataField
          label="Name"
          value={`${firstName} ${lastName}`}
          href={`/users/info/${id}`}
        />
        <DataField label="Email" value={email} />
        <DataField label="Verified" value={emailVerified ? "Yes" : "No"} />
      </div>
    </motion.div>
  );
};

export default UserSummary;
