import Link from "next/link";

interface AlternativeProps {
  descriptions: string;
  link: string;
  title: string;
}
const Alternative = ({ descriptions, title, link }: AlternativeProps) => {
  return (
    <div className="flex items-center justify-center gap-2 max-sm:text-sm">
      <p className="text-gray-800 dark:text-gray-500">{descriptions}</p>
      <Link
        href={link}
        className="text-green-700 hover:text-green-900 transition-all font-medium duration-300"
      >
        {title}
      </Link>
    </div>
  );
};

export default Alternative;
