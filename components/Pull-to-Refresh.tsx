'use client'

import { useEffect, useState } from "react";

export default function PullToRefresh({ children }: { children: React.ReactNode }) {
  const [startY, setStartY] = useState<number | null>(null);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      setStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!startY) return;
      const currentY = e.touches[0].clientY;
      if (currentY - startY > 80) {
        // Trigger refresh when user pulls down more than 80px
        window.location.reload();
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [startY]);

  return <div>{children}</div>;
}
