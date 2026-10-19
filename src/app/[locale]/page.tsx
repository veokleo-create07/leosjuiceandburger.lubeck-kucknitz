import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Specialties } from "@/components/home/specialties";
import { Visit } from "@/components/home/visit";
import { ReservationCta } from "@/components/home/reservation-cta";

export default function LocaleHomePage() {
  return (
    <>
      <Hero />
      <Specialties />
      <About />
      <Visit />
      <ReservationCta />
    </>
  );
}
