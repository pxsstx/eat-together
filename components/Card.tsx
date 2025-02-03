'use client'
import { motion } from "framer-motion";
import Image from "next/image";

interface CardProps {
  id: number;
  imageUrl: string;
  title: string;
  onSwipe: (direction: "left" | "right" | "up", card: { id: number; name: string; image: string }) => void;
}

const Card = ({ id, imageUrl, title, onSwipe }: CardProps) => {
  return (
    <motion.div
      key={id}
      className="relative w-full mx-auto max-w-[375px] aspect-[750/478] bg-white rounded-xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      drag="x"
      dragConstraints={{ left: -200, right: 200 }}
      dragElastic={0.2}
      onDragEnd={(event, info) => {
        if (info.offset.x > 100) onSwipe("right", { id, name: title, image: imageUrl });
        else if (info.offset.x < -100) onSwipe("left", { id, name: title, image: imageUrl });
        else if (info.offset.y < -100) onSwipe("up", { id, name: title, image: imageUrl });
      }}
    >
      <Image
        src={imageUrl}
        alt={title}
        className="absolute object-cover w-full h-full"
        fill
      />
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold">
        {title}
      </div>
    </motion.div>
  );
};

export default Card;
