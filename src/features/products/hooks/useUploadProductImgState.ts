import { useState } from "react";

import toast from "react-hot-toast";

import { ProductImageType } from "../types";
import { toastOption } from "@/lib/helpers/toast";

export const useUploadProductImgState = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [fetchedImages, setFetchedImages] = useState<string[] | []>([]);
  const [selectedImageFiles, setSelectedImageFiles] = useState<File[]>([]);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;

    const validExtensions = ["image/jpeg", "image/jpg", "image/png"];
    const maxSizeInMB = 2 * 1024 * 1024;
    const maxImages = 5;

    // Check if adding new files would exceed the limit
    const totalImages = selectedImageFiles.length + selectedFiles.length;
    if (totalImages > maxImages) {
      toast(
        `You can only upload a maximum of ${maxImages} images. Currently selected: ${selectedImageFiles.length}`,
        toastOption,
      );
      return;
    }

    // Check if user already has maximum images
    if (selectedImageFiles.length >= maxImages) {
      toast(
        `Maximum of ${maxImages} images allowed. Please remove some images before adding new ones.`,
        toastOption,
      );
      return;
    }

    const newImages: File[] = [];
    const newImageUrls: string[] = [];

    Array.from(selectedFiles).forEach((file: File) => {
      // Stop processing if we've reached the limit
      if (selectedImageFiles.length + newImages.length >= maxImages) {
        return;
      }

      if (file.size > maxSizeInMB) {
        toast(`File ${file.name} exceeds the 2MB size limit.`, toastOption);
        return;
      }
      if (!validExtensions.includes(file.type)) {
        toast(
          `Unsupported file type for ${file.name}. Only jpg, jpeg, and png are allowed.`,
          toastOption,
        );
        return;
      }
      newImages.push(file);
      newImageUrls.push(URL.createObjectURL(file));
    });

    // Show warning if some files were not added due to limit
    if (
      selectedFiles.length > newImages.length &&
      selectedImageFiles.length + newImages.length === maxImages
    ) {
      toast(
        `Only ${newImages.length} image(s) were added. Maximum of ${maxImages} images allowed.`,
        toastOption,
      );
    }
    setSelectedImages((prev) =>
      prev ? prev.concat(newImageUrls) : newImageUrls,
    );
    setSelectedImageFiles((prev) => [...prev, ...newImages]);
  };

  const handleImageDelete = (index: number) => {
    const newImages = [...selectedImageFiles];
    newImages.splice(index, 1);
    setSelectedImageFiles(newImages);
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    selectedImages,
    selectedImageFiles,
    onSelectFile,
    handleImageDelete,
    setSelectedImageFiles,
    setSelectedImages,
    fetchedImages,
    setFetchedImages,
  };
};
