import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Specialties } from "@/components/home/specialties";

export default function LocaleHomePage() {
  return (
    <>
      <Hero />
      <Specialties />
      <About />
    </>
  );
}
