import { Button } from "@/components/ui/button";
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
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

const data: { title: string; description: string; src: string }[] = [
  {
    title: "Roti Coffee",
    description:
      "Perpaduan rasa manis, asin, dan pahit khas kopi, menciptakan harmoni tradisional dan modern.",
    src: "/image.jpg",
  },
  {
    title: "Roti Coffee",
    description:
      "Perpaduan rasa manis, asin, dan pahit khas kopi, menciptakan harmoni tradisional dan modern.",
    src: "/image.jpg",
  },
];

export default function Menu() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <div className="flex min-h-screen flex-col items-center justify-center gap-8">
        <div className="mb-8 text-center">
          <h1>our menu</h1>
          <p>Setiap rasa punya cerita, dan kami siap menyajikannya untukmu.</p>
        </div>
        <Carousel className="w-full max-w-4xl" opts={{ loop: true }}>
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden shadow-lg">
                  <div className="flex flex-col sm:flex-row">
                    <CardContent className="p-0 sm:w-1/2">
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.title}
                        width={300}
                        height={300}
                        className="w-full object-cover h-full"
                      />
                    </CardContent>
                    <div className="flex flex-col justify-between sm:w-1/2">
                      <div className="flex-grow">
                        <CardHeader className="text-start">
                          <CardTitle className="text-2xl font-semibold">
                            {item.title}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {item.description}
                          </CardDescription>
                        </CardHeader>
                      </div>
                      <CardFooter className="justify-end pt-4">
                        <Button className="w-full sm:w-auto">Order Now</Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div>
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
