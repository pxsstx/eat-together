// components/SwipeStack.tsx
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

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
//   const [swipedCards, setSwipedCards] = useState<Card[]>([]);
  const [remainingCards, setRemainingCards] = useState(cards);
  const controls = useAnimation();

  // Handle swipe logic when swipe buttons are clicked
  const handleSwipe = (direction: "left" | "right" | "up", card: Card) => {
    setRemainingCards(remainingCards.filter((item) => item.id !== card.id));
    // setSwipedCards((prevCards) => [...prevCards, card]);
    onSwipeEnd();
    console.log(`Swiped ${direction} on ${card.name}`);
  };

  // Trigger swipe when swipeAction state changes
  const triggerSwipeAction = (direction: "left" | "right" | "up") => {
    if (remainingCards.length > 0) {
      const card = remainingCards[0]; // Get the first card
      handleSwipe(direction, card);
    }
  };

  // Handle drag end to detect swipe direction
  const handleDragEnd = (event: any, info: any, card: Card) => {
    const { offset } = info;
    const swipeThreshold = 100; // Minimum distance to consider a swipe

    if (offset.x > swipeThreshold) {
      // Swiped right
      handleSwipe("right", card);
    } else if (offset.x < -swipeThreshold) {
      // Swiped left
      handleSwipe("left", card);
    } else if (offset.y < -swipeThreshold) {
      // Swiped up
      handleSwipe("up", card);
    } else {
      // Return to original position
      controls.start({ x: 0, y: 0 });
    }
  };

  useEffect(() => {
    if (swipeAction) {
      triggerSwipeAction(swipeAction);
    }
  }, [swipeAction]);

  return (
    <div className="w-full flex justify-center mt-10 relative">
      {/* Map through remaining cards and display them */}
      {remainingCards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute w-[300px] h-[400px] flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          style={{
            transform: `translateY(${index * 20}px)`, // Adjust the Y position for stack effect
            zIndex: remainingCards.length - index, // Make sure the top card has the highest zIndex
          }}
        >
          {/* Draggable card */}
          <motion.div
            className="w-full h-full bg-white  rounded-2xl overflow-hidden flex flex-col items-center justify-center"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onDragEnd={(event, info) => handleDragEnd(event, info, card)}
            animate={controls}
          >
            <img src={card.image} alt={card.name} className="w-full h-3/4 object-cover" />
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