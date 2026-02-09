"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import AppBreadcrumb from "@/components/molecules/AppBreadcrumb/AppBreadcrumb";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import InfoRow from "@/components/atoms/InfoRow/InfoRow";
import DocumentCard from "@/components/atoms/DocumentCard/DocumentCard";
import TimelineItem from "@/components/atoms/TimelineItem/TimelineItem";
import ConfirmAction from "@/components/molecules/ConfirmAction/ConfirmAction";
import PreviewDocModal from "@/components/atoms/PreviewDocModal/PreviewDocModal";
import InfoSkeleton from "@/components/atoms/skeleton/InfoSkeleton";

import { formatDate } from "@/lib/helpers/dateFormats";
import { useGetVerificationInfo } from "@/lib/hooks/useGetVerificationInfo";
import { useApproveBusinessVerification } from "@/lib/hooks/useApproveBusinessVerification";
import { useRejectBusinessVerification } from "@/lib/hooks/useRejectBusinessVerification";

const VerificationInfoWrapper = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetVerificationInfo(id);
  const { handleApprove, isPending, isOpen, setIsOpen } =
    useApproveBusinessVerification();
  const {
    handleReject,
    isRejecting,
    rejectionReason,
    setRejectionReason,
    showRejectModal,
    setShowRejectModal,
  } = useRejectBusinessVerification();

  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);

  const verificationBreadcrumb = [
    { label: `All Verification Request`, href: `/verifications` },
    { label: "Verification Request Info" },
  ];

  console.log("data", data);

  return (
    <div className="space-y-6">
      <PageTitle
        title="Business Verification Request"
        description={`ID: #${id}`}
      />
      <AppBreadcrumb items={verificationBreadcrumb} />
      {isLoading ? (
        <InfoSkeleton />
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-start justify-end mb-4">
              <StatusBubble status={data?.status} />
            </div>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="px-6 py-4 border-b border-gray-100">
                  <h2 className="text-xl font-bold ">Company Information</h2>
                </div>
                <div className="p-6 space-y-4">
                  <InfoRow
                    label="Company Name"
                    value={data?.companyName}
                    highlight
                  />
                  <InfoRow
                    label="Registration Number"
                    value={data?.businessRegistrationNumber}
                  />
                  <InfoRow label="Company Email" value={data?.companyEmail} />
                  <InfoRow label="Phone Number" value={data?.phoneNumber} />
                  <InfoRow
                    label="Business Address"
                    value={data?.companyAddress}
                  />
                  <InfoRow label="Administrator Name" value={data?.adminName} />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="border-b border-gray-100 px-6 py-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    Account Owner
                  </h2>
                </div>
                <div className="p-6 space-y-4">
                  <InfoRow
                    label="Full Name"
                    value={`${data?.user.firstName} ${data?.user.lastName}`}
                  />
                  <InfoRow label="Email Address" value={data?.user.email} />
                  <InfoRow label="User ID" value={data?.user.id} mono />
                </div>
              </motion.div>

              {/* Submitted Documents */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="border-b border-gray-100 px-6 py-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    Verification Documents
                  </h2>
                </div>
                <div className="p-6 grid sm:grid-cols-3 gap-4">
                  <DocumentCard
                    title="CAC Document"
                    imageUrl={data?.cacDocumentUrl}
                    onClick={() => setSelectedDocument(data?.cacDocumentUrl)}
                  />
                  <DocumentCard
                    title="Utility Bill"
                    imageUrl={data?.utilityDocumentUrl}
                    onClick={() =>
                      setSelectedDocument(data?.utilityDocumentUrl)
                    }
                  />
                  <DocumentCard
                    title="Valid ID"
                    imageUrl={data?.validIdUrl}
                    onClick={() => setSelectedDocument(data?.validIdUrl)}
                  />
                </div>
              </motion.div>

              {data.status === "REJECTED" && data.rejectionReason && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-red-50 border border-red-200 rounded-2xl p-6"
                >
                  <h3 className="text-lg font-bold text-red-900 mb-2">
                    Rejection Reason
                  </h3>
                  <p className="text-red-700">{data.rejectionReason}</p>
                </motion.div>
              )}
            </div>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Request Timeline
                </h3>
                <div className="space-y-4">
                  <TimelineItem
                    label="Submitted"
                    date={data?.createdAt && formatDate(data?.createdAt)}
                    active
                  />
                  {data?.reviewedAt && (
                    <TimelineItem
                      label={
                        data?.status === "APPROVED" ? "Approved" : "Rejected"
                      }
                      date={formatDate(data?.reviewedAt)}
                      active
                    />
                  )}
                </div>
              </motion.div>

              {data?.status === "PENDING" && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-3"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Actions
                  </h3>

                  <button
                    onClick={() => setIsOpen(true)}
                    disabled={isPending || isRejecting}
                    className="w-full bg-linear-to-r from-green-600 to-green-700 text-white py-3 px-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {isPending ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Approving...
                      </span>
                    ) : (
                      "Approve Request"
                    )}
                  </button>

                  <button
                    onClick={() => setShowRejectModal(true)}
                    disabled={isPending || isRejecting}
                    className="w-full bg-white text-red-600 py-3 px-4 rounded-xl font-semibold border-2 border-red-600 hover:bg-red-50 transition-all duration-200
               disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Reject Request
                  </button>
                </motion.div>
              )}

              {data?.reviewedBy && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Review Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600">
                      <span className="font-medium text-gray-900">
                        Reviewed by:
                      </span>
                      <br />
                      {data?.reviewedBy}
                    </p>
                    {data?.reviewedAt && (
                      <p className="text-gray-600">
                        <span className="font-medium text-gray-900">
                          Reviewed on:
                        </span>
                        <br />
                        {formatDate(data?.reviewedAt)}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
          <ConfirmAction
            isPending={isPending}
            open={isOpen}
            setOpen={setIsOpen}
            onCancel={() => setIsOpen(false)}
            onConfirm={() => handleApprove(id)}
            title="Are You Sure You Want to Verify this Company?"
            description="Are you sure you want to verify this compnay? They will have access to post products an process orders on Oasis platform."
          />
          <ConfirmAction
            isPending={isRejecting}
            open={showRejectModal}
            setOpen={setShowRejectModal}
            onCancel={() => setShowRejectModal(false)}
            onConfirm={() => handleReject(id)}
            title="Are You Sure You Want to Reject This Company?"
            description="Are you sure you want to reject this company verification? They will not have access to post products or attend to orders."
            reason={rejectionReason}
            setReason={setRejectionReason}
          />
          <PreviewDocModal
            selectedDocument={selectedDocument}
            setSelectedDocument={setSelectedDocument}
          />
        </>
      )}
    </div>
  );
};

export default VerificationInfoWrapper;
