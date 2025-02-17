"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Order() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  if (!isMobile) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="w-full md:w-fit text-lg py-6 rounded-full"
          >
            Order Now
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Pesan Menu</DialogTitle>
            <DialogDescription>
              Silakan isi formulir berikut untuk memesan menu favorit Anda.
            </DialogDescription>
          </DialogHeader>
          <OrderForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button size="lg" className="w-full md:w-fit text-lg py-6 rounded-full">
          Order Now
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Pesan Menu</DrawerTitle>
          <DrawerDescription>
            Silakan isi formulir berikut untuk memesan menu favorit Anda.
          </DrawerDescription>
        </DrawerHeader>
        <OrderForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Batal</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function OrderForm({ className }: React.ComponentProps<"form">) {
  const menuItems = [
    { name: "Latte Bunny (Roti Kopi)", price: 10000 },
    { name: "Slick Git Fluty (Dalgona Coffee)", price: 10000 },
    { name: "Roti Es Krim + Dalgona", price: 23000 },
    { name: "2 Dalgona + 1 Roti Es Krim", price: 33000 },
    { name: "3 Dalgona", price: 25000 },
    { name: "3 Roti Es Krim + 3 Dalgona", price: 62000 },
  ];

  const toppings = [
    { name: "Grass Jelly", price: 3000 },
    { name: "Oreo Crumble", price: 3000 },
    { name: "Boba Blast", price: 3000 },
    { name: "Ice Cream", price: 3000 },
  ];

  function createOrder(formData: FormData) {
    const adminNumber = process.env.NEXT_PUBLIC_ADMIN_NUMBER?.split(",") ?? [];

    const nama = formData.get("nama");
    const menu = formData.getAll("menu") as string[];
    const detail = formData.get("detail");

    const message = `*Pemesanan CO-IVE*
    
*Nama:* ${nama}
*Menu:* 
${menu.map((item, index) => `   ${index + 1}. ${item}`).join("\n")}
*Detail:* ${detail || "-"}`;

    const encodedMessage = encodeURIComponent(message);

    const waLink = `https://wa.me/${adminNumber[Math.floor(Math.random() * adminNumber.length)]}?text=${encodedMessage}`;

    window.open(waLink, "_blank");
  }

  return (
    <form
      className={cn("grid items-start gap-4 text-xs md:text-xs", className)}
      action={createOrder}
    >
      <div className="grid gap-2">
        <Label htmlFor="nama">Nama</Label>
        <Input
          type="text"
          id="nama"
          name="nama"
          placeholder="Masukkan nama Anda"
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="detail">Detail Pesanan (Opsional)</Label>
        <Textarea
          id="detail"
          name="detail"
          placeholder="Contoh: 2 Latte Bunny, 1 Slick Git Fluty + Oreo Crumble"
        />
      </div>

      <div className="grid gap-2">
        <Label>Pilihan Menu</Label>
        <div className="grid grid-cols-2 gap-2">
          {menuItems.map((item, index) => (
            <label key={index} className="flex items-center gap-2">
              <Checkbox name="menu" value={item.name} />
              {item.name} - {item.price.toLocaleString("id-ID")}
            </label>
          ))}
        </div>
      </div>

      <div className="grid gap-2">
        <Label>Pilihan Topping</Label>
        <div className="grid grid-cols-2 gap-2">
          {toppings.map((item, index) => (
            <label key={index} className="flex items-center gap-2">
              <Checkbox name="topping" value={item.name} />
              {item.name} - {item.price.toLocaleString("id-ID")}
            </label>
          ))}
        </div>
      </div>

      <Button type="submit">Pesan Sekarang</Button>
    </form>
  );
}
