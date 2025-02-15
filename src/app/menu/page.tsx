import { MenuCarousel } from "@/components/menu-carousel";

const data: { title: string; description: string; src: string }[] = [
  {
    title: "Roti Coffee",
    description:
      "Perpaduan rasa manis, asin, dan pahit khas kopi, menciptakan harmoni tradisional dan modern.",
    src: "/menu/1.jpeg",
  },
  {
    title: "Roti Coffee",
    description:
      "Perpaduan rasa manis, asin, dan pahit khas kopi, menciptakan harmoni tradisional dan modern.",
    src: "/menu/2.jpeg",
  },
];

export default function Menu() {
  return (
    <div className="flex flex-col items-center gap-8 md:gap-16">
      <div className="text-center lg:max-w-lg px-8">
        <h1>
          our <span className="text-primary">menu</span>
        </h1>
        <p>Setiap rasa punya cerita, dan kami siap menyajikannya untukmu.</p>
      </div>
      <MenuCarousel data={data} />
    </div>
  );
}
