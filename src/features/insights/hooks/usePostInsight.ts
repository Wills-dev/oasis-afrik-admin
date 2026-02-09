import { ChangeEvent, FormEvent, useState } from "react";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { postInsight } from "../api";

export const usePostInsight = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: postInsight,
    onSuccess: () => {
      toast.success("Insight posted successfully.");
      setContent("");
      setOpen(false);
      setTitle("");
      queryClient.invalidateQueries({
        queryKey: ["all insights"],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error creating admin", error);
      promiseErrorFunction(error);
    },
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    const maxSize = 2 * 1024 * 1024;

    if (!allowedTypes.includes(selectedFile.type)) {
      toast.error("Only JPG, JPEG and PNG files are supported.");
      return;
    }

    if (selectedFile.size > maxSize) {
      toast.error("File size must not exceed 2MB.");
      return;
    }

    setFile(selectedFile);
  };

  const removeFile = () => {
    setFile(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title) {
      return toast.error("Title is required");
    } else if (!content) {
      return toast.error("Content is required");
    }
    mutate({
      title,
      content,
      isPublished: true,
      file,
    });
  };

  return {
    handleSubmit,
    isPending,
    open,
    setOpen,
    title,
    setTitle,
    content,
    setContent,
    handleFileChange,
    file,
    removeFile,
  };
};
