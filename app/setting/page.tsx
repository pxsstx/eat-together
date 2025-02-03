import ThemeToggle from "@/components/ThemeToggle";
import { Separator } from "@/components/ui/separator";
import { User } from "lucide-react";

function setting() {
  return (
    <main className="jun-content top-10 w-[90svw] md:w-[40svw]">
      <div className="justify-center items-center">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-center">Setting</h1>
          <ThemeToggle />
        </div>
        <Separator className="my-3" />

        <div className="flex items-center gap-x-3">
          <User size={30} />
          <h2 className="text-xl">Profile</h2>
        </div>
      </div>
    </main>
  );
}
export default setting;
