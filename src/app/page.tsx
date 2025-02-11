import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-center justify-center items-center gap-8">
      <div>
        <h1>welcome to</h1>
        <h1>
          <span className="text-primary">co-ive</span>: sip, savour, repeat!
        </h1>
        <p>
          Menemani setiap momenmu dengan rasa kopi yang unik dan tak terlupakan.
        </p>
      </div>
      <div className="flex gap-4">
        <Button size={"lg"}>Order Now</Button>
        <Button variant={"ghost"} size={"lg"}>
          About Us
        </Button>
      </div>
    </div>
  );
}
