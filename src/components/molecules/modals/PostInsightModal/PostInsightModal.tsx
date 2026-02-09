"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { FormEvent, useEffect, useState } from "react";

import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import Label from "@/components/atoms/Label/Label";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button/Button";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

import { Delete } from "lucide-react";

const PostInsightModal = ({
  open,
  setOpen,
  title,
  setTitle,
  content,
  setContent,
  handleSubmit,
  isLoading,
  handleFileChange,
  file,
  removeFile,
}: {
  open: boolean;
  title: string;
  setTitle: (item: string) => void;
  setOpen: (item: boolean) => void;
  content: string;
  setContent: (item: string) => void;
  handleSubmit: (e: FormEvent) => void;
  isLoading: boolean;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  file: File | null;
  removeFile: () => void;
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  const isAllFilled = title.trim() === "" && content.trim() === "";

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [file]);

  return (
    <ModalWrapper
      open={open}
      onClose={setOpen}
      title="Post Insight"
      className="max-w-3xl w-full"
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-1">
          <Label title="Subject" />
          <Input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <Label title="Content" />
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            className=""
            modules={{
              toolbar: [
                [{ size: [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image"],
                [{ align: [] }],
                ["clean"],
              ],
            }}
          />
        </div>
        <div className="space-y-2">
          <Label title="Upload Image (Optional)" />

          {!file && (
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleFileChange}
              className="bg-gray-200 px-4 py-1 rounded cursor-pointer"
            />
          )}

          {preview && (
            <div className="relative w-full max-w-xs">
              <Image
                src={preview}
                alt="Preview"
                width={100}
                height={100}
                className="rounded-lg object-cover w-full h-48 border"
              />

              <button
                type="button"
                onClick={removeFile}
                className="absolute top-2 right-2 text-red-600 p-2 rounded-full bg-white cursor-pointer"
              >
                <Delete className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
        <Button type="submit" disabled={isAllFilled} loading={isLoading}>
          Submit
        </Button>
      </form>
    </ModalWrapper>
  );
};

export default PostInsightModal;
