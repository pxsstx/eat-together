// app/room/[pin]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function RoomPage() {
  const params = useParams();
  const { pin } = params;
  const [users, setUsers] = useState<string[]>([]);

  // เชื่อมต่อ WebSocket เมื่อคอมโพเนนต์ถูกเรนเดอร์
  useEffect(() => {
    const socket = io();

    // เข้าร่วมห้อง
    socket.emit("joinRoom", pin);

    // เมื่อมีผู้ใช้ใหม่เข้าร่วมห้อง
    socket.on("userJoined", (userId: string) => {
      setUsers((prevUsers) => [...prevUsers, userId]);
    });

    // เมื่อผู้ใช้ออกจากห้อง
    socket.on("userLeft", (userId: string) => {
      setUsers((prevUsers) => prevUsers.filter((user) => user !== userId));
    });

    // เมื่อห้องเต็ม
    socket.on("roomFull", () => {
      alert("Room is full or does not exist!");
    });

    // ปิดการเชื่อมต่อเมื่อคอมโพเนนต์ถูกยกเลิก
    return () => {
      socket.disconnect();
    };
  }, [pin]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Room PIN: {pin}</h1>
        <p className="text-center">Users in room:</p>
        <ul className="mt-4">
          {users.map((user, index) => (
            <li key={index} className="text-center">
              {user}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}