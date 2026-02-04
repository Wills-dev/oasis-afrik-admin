"use client";

import Button from "@/components/atoms/Button/Button";
import { useEditProduct } from "../../hooks/useEditProduct";

import NewProductHeader from "../NewProductHeader/NewProductHeader";
import NewProductStepOne from "../NewProductStepOne/NewProductStepOne";
import NewProductStepTwo from "../NewProductStepTwo/NewProductStepTwo";
import ProductInfoLoader from "@/components/atoms/skeletonLoader/ProductInfoLoader";

const EditProductWrapper = ({ productId }: { productId: string }) => {
  const {
    step,
    isPending,
    nextStep,
    prevStep,
    product,
    handleChange,
    selectedImages,
    onSelectFile,
    handleImageDelete,
    handleDropdownChange,
    handleSubmit,
    fetchedImages,
    isLoading,
  } = useEditProduct(productId);

  const showPrevButton = step !== 1;
  const showNextButton = step !== 2;
  const showSubmitButton = step === 2;

  return (
    <div className="space-y-6 max-w-5xl w-full">
      <NewProductHeader step={step} title="Edit product" />
      {isLoading ? (
        <div className="flex max-sm:flex-col gap-6">
          <ProductInfoLoader />
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          {step === 1 && (
            <NewProductStepOne
              product={product}
              handleChange={handleChange}
              handleDropdownChange={handleDropdownChange}
            />
          )}
          {step === 2 && (
            <NewProductStepTwo
              selectedImages={selectedImages}
              onSelectFile={onSelectFile}
              handleImageDelete={handleImageDelete}
              fetchedImages={fetchedImages}
            />
          )}
          <div className="flex justify-end flex-wrap gap-2">
            {showPrevButton && (
              <Button
                onClick={prevStep}
                width="w-fit"
                bgColor="bg-gray-200 text-gray-600"
                bgHoverColor="hover:bg-gray-300"
              >
                Prev step
              </Button>
            )}{" "}
            {showNextButton && (
              <Button onClick={nextStep} width="w-fit">
                Next step
              </Button>
            )}
            {showSubmitButton && (
              <Button width="w-fit" type="submit" loading={isPending}>
                Submit
              </Button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default EditProductWrapper;
