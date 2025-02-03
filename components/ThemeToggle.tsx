// components/ThemeToggle.tsx
"use client"; // ระบุว่าเป็น Client Component

import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false); // สถานะเพื่อตรวจสอบว่า mounted แล้วหรือไม่

  // ตั้งค่า mounted เป็น true เมื่อคอมโพเนนต์ถูกเรนเดอร์บนไคลเอนต์
  useEffect(() => {
    setMounted(true);
  }, []);

  // หากยังไม่ mounted ให้เรนเดอร์เป็น null เพื่อป้องกันการไม่ตรงกัน
  if (!mounted) {
    return null;
  }

  // สลับธีมระหว่าง Light และ Dark
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Toggle
      pressed={theme === "dark"}
      onPressedChange={toggleTheme}
      className="accent-foreground bg-transparent"
      size="lg"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Toggle>
  );
}