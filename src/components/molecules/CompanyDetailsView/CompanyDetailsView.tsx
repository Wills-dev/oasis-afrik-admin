"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

import { CompanyDetails } from "@/lib/types";
import { formatDate } from "@/lib/helpers/dateFormats";

import DocumentCard from "@/components/atoms/DocumentCard/DocumentCard";
import InfoRow from "@/components/atoms/InfoRow/InfoRow";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";

import InfoCardWrapper from "@/components/atoms/InfoCardWrapper/InfoCardWrapper";
import TimelineItem from "@/components/atoms/TimelineItem/TimelineItem";
import ImageModal from "@/components/atoms/ImageModal/ImageModal";

const CompanyDetailsView = ({ data }: { data: CompanyDetails }) => {
  const [selectedDocument, setSelectedDocument] = useState<string>("");
  const [showImageModal, setShowImageModal] = useState(false);

  const handleShowDoc = (doc: string) => {
    setSelectedDocument(doc);
    setShowImageModal(true);
  };

  return (
    <>
      <div className="">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <InfoCardWrapper title="Company Information">
              <div className="p-6 space-y-5">
                <StatusBubble status={data?.status} />
                <InfoRow
                  label="Company Name"
                  value={data?.companyName}
                  highlight
                />
                <InfoRow
                  label="Registration Number"
                  value={data?.businessRegistrationNumber}
                />
                <InfoRow label="Email Address" value={data?.companyEmail} />
                <InfoRow label="Phone Number" value={data?.phoneNumber} />
                <InfoRow
                  label="Business Address"
                  value={data?.companyAddress}
                />
                <div className="pt-5 border-t border-slate-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-green-600">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-medium text-slate-600">
                      Administrator
                    </p>
                  </div>
                  <p className="font-bold text-slate-900 text-lg ml-8">
                    {data?.adminName}
                  </p>
                </div>
              </div>
            </InfoCardWrapper>

            <InfoCardWrapper title="Verification Documents">
              <div className="p-6 grid sm:grid-cols-3 gap-4">
                <DocumentCard
                  title="CAC Document"
                  imageUrl={data?.cacDocumentUrl}
                  onClick={() => handleShowDoc(data?.cacDocumentUrl)}
                />
                <DocumentCard
                  title="Utility Bill"
                  imageUrl={data?.utilityDocumentUrl}
                  onClick={() => handleShowDoc(data?.utilityDocumentUrl)}
                />
                <DocumentCard
                  title="Valid ID"
                  imageUrl={data?.validIdUrl}
                  onClick={() => handleShowDoc(data?.validIdUrl)}
                />
              </div>
            </InfoCardWrapper>

            {data?.status === "REJECTED" && data?.rejectionReason && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-red-50 border-2 border-red-200 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">
                    !
                  </span>
                  Rejection Reason
                </h3>
                <p className="text-red-700 leading-relaxed">
                  {data?.rejectionReason}
                </p>
              </motion.div>
            )}
          </div>

          <div className="space-y-6">
            <InfoCardWrapper title="Status Summary">
              <div className="p-6 space-y-4">
                {data?.reviewedAt && (
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-600 mb-1">Reviewed On</p>
                    <p className="font-semibold text-slate-900">
                      {data?.reviewedAt && formatDate(data?.reviewedAt)}
                    </p>
                  </div>
                )}

                {data?.reviewedBy && (
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-600 mb-1">Reviewed By</p>
                    <p className="font-mono text-xs text-slate-900 break-all">
                      {data?.reviewedBy}
                    </p>
                  </div>
                )}
              </div>
            </InfoCardWrapper>
            <InfoCardWrapper title="Timeline">
              <div className="p-6 space-y-4">
                <TimelineItem
                  label="Submitted"
                  date={formatDate(data?.createdAt)}
                  active
                />
                {data?.reviewedAt && (
                  <TimelineItem
                    label={
                      data?.status === "APPROVED" ? "Approved" : "Reviewed"
                    }
                    date={formatDate(data?.reviewedAt)}
                    active
                  />
                )}
                <TimelineItem
                  label="Last Updated"
                  date={formatDate(data?.updatedAt)}
                  active
                />
              </div>
            </InfoCardWrapper>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-linear-to-br from-green-600 to-emerald-700 rounded-2xl shadow-lg p-6 text-white"
            >
              <h3 className="font-bold mb-4">Verification ID</h3>
              <p className="font-mono text-sm opacity-90 break-all">
                {data?.id}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <ImageModal
        showImageModal={showImageModal}
        setShowImageModal={setShowImageModal}
        currentImage={selectedDocument}
        name="Document preview"
      />
    </>
  );
};

export default CompanyDetailsView;
