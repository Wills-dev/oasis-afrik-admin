import Image from "next/image";

interface ProductImageWrapperProps {
  currentImage: string | null;
  setCurrentImage: (currentImage: string) => void;
  productImages: string[];
  productName: string;
}

const ProductImageWrapper = ({
  currentImage,
  setCurrentImage,
  productImages,
  productName,
}: ProductImageWrapperProps) => {
  return (
    <div className="min-w-[300px] max-w-[500px] w-full sm:space-y-2 space-y-1">
      <div className="w-full md:h-[490px] sm:h-[400px] h-[300px] rounded-md overflow-hidden">
        {currentImage && (
          <Image
            src={currentImage}
            alt={productName}
            width={592}
            height={586}
            unoptimized
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="flex sm:gap-1 overflow-x-auto">
        {productImages?.map((prodImage) => (
          <div
            key={prodImage}
            className="sm:w-[139px] sm:h-[141px] sm:min-w-[139px] sm:min-h-[141px] w-[100px] h-[100px] min-w-[100px] min-h-[100px]  hover:border-2 hover:border-green-600 transition-all duration-300 cursor-pointer rounded-md p-1"
            onClick={() => setCurrentImage(prodImage)}
          >
            <Image
              src={prodImage}
              alt={productName}
              width={139}
              height={141}
              unoptimized
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageWrapper;
