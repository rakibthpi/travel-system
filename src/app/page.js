import BestHotels from "@/components/best-hotel/BestHotels";
import Hero from "@/components/hero/Hero";
import PopularLocations from "@/components/popular-locations/PopularLocations";
import sea from "../../public/assets/sea.jpg"
import hotel_image from "../../public/assets/hr_10.jpg"

export default function Home() {
  return (
    <main>
      <Hero image={sea} mainHeader="Are you ready for an adventure?" secondaryHeader="Browse through the popular locations"></Hero>
      <PopularLocations></PopularLocations>
      <Hero  image={hotel_image} mainHeader="Get The Best offer for your hotel!" secondaryHeader="Pick your desired place."></Hero>
      <BestHotels></BestHotels>
    </main>
  );
}
