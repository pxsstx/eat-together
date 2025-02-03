import { motion, useAnimation, PanInfo } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Card {
  id: number;
  name: string;
  image: string;
}

interface SwipeStackProps {
  swipeAction: "left" | "right" | "up" | null;
  onSwipeEnd: () => void;
  cards: Card[];
}

const SwipeStack = ({ swipeAction, onSwipeEnd, cards }: SwipeStackProps) => {
  const [remainingCards, setRemainingCards] = useState(cards);
  const controls = useAnimation();

  const handleSwipe = (direction: "left" | "right" | "up", card: Card) => {
    setRemainingCards(remainingCards.filter((item) => item.id !== card.id));
    onSwipeEnd();
    console.log(`Swiped ${direction} on ${card.name}`);
  };

  const triggerSwipeAction = (direction: "left" | "right" | "up") => {
    if (remainingCards.length > 0) {
      const card = remainingCards[0];
      handleSwipe(direction, card);
      controls.start({ x: direction === "left" ? -400 : direction === "right" ? 400 : 0, opacity: 0 });
    }
  };

  useEffect(() => {
    if (swipeAction) {
      triggerSwipeAction(swipeAction);
    }
  }, [swipeAction, triggerSwipeAction]);

  const handleDragEnd = (event: any, info: PanInfo, card: Card) => {
    const { offset } = info;
    const swipeThreshold = 100;

    if (offset.x > swipeThreshold) {
      handleSwipe("right", card);
      controls.start({ x: 400, opacity: 0 });
    } else if (offset.x < -swipeThreshold) {
      handleSwipe("left", card);
      controls.start({ x: -400, opacity: 0 });
    } else if (offset.y < -swipeThreshold) {
      handleSwipe("up", card);
      controls.start({ y: -400, opacity: 0 });
    } else {
      controls.start({ x: 0, y: 0, opacity: 1 });
    }
  };

  return (
    <div className="w-full flex justify-center mt-10 relative">
      {remainingCards.length > 0 &&
        remainingCards.map((card, index) => (
          <motion.div
            key={card.id}
            className="absolute w-[300px] h-[400px] shadow-lg flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            style={{
              transform: `translateY(${index * 20}px)`,
              zIndex: remainingCards.length - index,
            }}
          >
            <motion.div
              className="w-full h-full bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col items-center justify-center"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              onDragEnd={(event, info) => handleDragEnd(event, info, card)}
              animate={controls}
            >
              <Image
                src={card.image}
                alt={card.name}
                className="w-full h-3/4 object-cover"
                width={300}
                height={300}
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{card.name}</h3>
              </div>
            </motion.div>
          </motion.div>
        ))}
    </div>
  );
};

export default SwipeStack;
