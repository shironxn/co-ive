"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function CTA() {
  const router = useRouter();

  return (
    <div className="flex gap-4">
      <Button size={"lg"} onClick={() => router.push("/menu")}>
        Order Now
      </Button>
      <Button
        variant={"ghost"}
        size={"lg"}
        onClick={() => router.push("/about")}
      >
        About Us
      </Button>
    </div>
  );
}
