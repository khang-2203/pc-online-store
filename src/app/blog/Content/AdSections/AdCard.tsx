"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface AdCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  link: string;
}

const AdCard: React.FC<AdCardProps> = ({
  image,
  title,
  description,
  price,
  link,
}) => {
  const router = useRouter();

  return (
    <div
      className="relative cursor-pointer bg-* rounder-lg overflow-hidden transition-transform hover:scale-105"
      onClick={() => router.push(link)}
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default AdCard;
