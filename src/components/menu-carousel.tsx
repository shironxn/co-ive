"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Order } from "./order";

export function MenuCarousel({
  data,
}: {
  data: { title: string; description: string; src: string }[];
}) {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 1500, stopOnInteraction: true })]}
      className="w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-2xl"
    >
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index}>
            <Card className="flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-6 md:gap-8 justify-between">
              <CardContent className="p-0 w-full md:w-1/2 md:max-w-xs lg:max-w-sm">
                <div className="w-full aspect-[9/16] overflow-hidden rounded-lg">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={500}
                    height={889}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardContent>
              <div className="flex flex-col justify-between w-full md:w-1/2 gap-4 md:gap-6">
                <CardHeader className="p-0">
                  <CardTitle className="text-lg md:text-2xl">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm md:text-lg min-h-[80px]">
                    {item.description}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="p-0">
                  <Order />
                </CardFooter>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
