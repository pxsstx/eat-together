// app/join-room/page.tsx
"use client"; // ระบุว่าเป็น Client Component

import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

type FormData = {
  pin: string;
};

export default function JoinRoomPage() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      pin: "", // ตั้งค่าเริ่มต้นของ PIN
    },
  });

  // เมื่อฟอร์มถูกส่ง
  const onSubmit = (data: FormData) => {
    const { pin } = data;
    router.push(`/room/${pin}`); // นำผู้ใช้ไปยังหน้าห้องด้วย PIN ที่ป้อน
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-y-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-foreground">EatTogether</h1>
      </div>

      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Join Room</CardTitle>
          <CardDescription>Enter 6-Digit PIN</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col justify-center items-center">
              {/* ใช้ Controller เพื่อเชื่อม InputOTP กับ react-hook-form */}
              <Controller
                name="pin"
                control={control}
                rules={{
                  required: "PIN is required",
                  pattern: {
                    value: /^\d{6}$/,
                    message: "PIN must be exactly 6 digits",
                  },
                }}
                render={({ field }) => (
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                )}
              />

              {errors.pin && (
                <p className="mt-2 text-sm text-red-600 text-center">
                  {errors.pin.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Join Room
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
