"use client";

import Button from "@/components/atoms/Button/Button";
import PostInsightModal from "../modals/PostInsightModal/PostInsightModal";

import { usePostInsight } from "@/features/insights/hooks/usePostInsight";

const CreateInsightActionPanel = () => {
  const {
    handleSubmit,
    isPending,
    open,
    setOpen,
    title,
    setTitle,
    content,
    setContent,
    removeFile,
    file,
    handleFileChange,
  } = usePostInsight();

  return (
    <div className="flex justify-end">
      <Button onClick={() => setOpen(true)}>Post Insight</Button>
      <PostInsightModal
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        isLoading={isPending}
        handleSubmit={handleSubmit}
        open={open}
        setOpen={setOpen}
        removeFile={removeFile}
        handleFileChange={handleFileChange}
        file={file}
      />
    </div>
  );
};

export default CreateInsightActionPanel;
