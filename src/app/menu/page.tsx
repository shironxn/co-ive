import { MenuCarousel } from "@/components/menu-carousel";

const data: { title: string; description: string; src: string }[] = [
  {
    title: "Slick Git Fluty",
    description:
      "Dalgona Coffee dengan tekstur creamy dan aroma khas, menghadirkan keseimbangan rasa manis, pahit, dan gurih yang sempurna.",
    src: "/menu/1.jpeg",
  },
  {
    title: "Latte Bunny",
    description:
      "Roti kopi dengan aroma khas dan tekstur renyah di luar, lembut di dalam. Perpaduan sempurna dengan rasa manis dan sedikit pahit yang khas.",
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
