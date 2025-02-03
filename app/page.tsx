"use client";

import { useState } from "react";
import ActionButtons from "@/components/ActionButtons";
import SwipeStack from "@/components/SwipeStack";
import {cards} from '@/data/cards'

const Home = () => {
  const [swipeAction, setSwipeAction] = useState<"left" | "right" | "up" | null>(null);

  const handleLike = () => setSwipeAction("right");
  const handleUnlike = () => setSwipeAction("left");
  const handleSuperLike = () => setSwipeAction("up");

  const handleSwipeEnd = () => {
    // Handle the end of a swipe action (e.g., update history or load new card)
    setSwipeAction(null)
    console.log("Swipe Ended");
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Swipe Your Favorite Meal 🍽️</h1>

      {/* Pass swipe action state and cards data to SwipeStack */}
      <SwipeStack
        swipeAction={swipeAction}
        onSwipeEnd={handleSwipeEnd}
        cards={cards}
      />
      {/* Action Buttons Component */}
      <ActionButtons
        onLike={handleLike}
        onUnlike={handleUnlike}
        onSuperLike={handleSuperLike}
      />
    </div>
  );
};

export default Home;
