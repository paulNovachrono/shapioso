import AboutHero from "../components/AboutHero";
import ProcessSteps from "../components/ProcessSteps";
import TechStack from "../components/TechStack";
import Testimonials from "../components/Testimonials";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutHero />
      <ProcessSteps />
      <TechStack />
      <Testimonials />
    </main>
  );
}
