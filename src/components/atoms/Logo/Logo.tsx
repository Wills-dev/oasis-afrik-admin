import Image from "next/image";
import Link from "next/link";

const Logo = ({
  imgUrl = "/assets/images/logo.png",
  url = "/",
  width = 120,
  height = 20,
}: {
  imgUrl?: string;
  url?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Link href={url}>
      <Image
        src={imgUrl}
        alt="logo"
        width={width}
        height={height}
        priority
        className="object-fit w-auto h-auto"
      />
    </Link>
  );
};

export default Logo;
