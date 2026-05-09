import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { StatsBar } from "../components/StatsBar";
import { About } from "../components/About";
import { Metrics } from "../components/Metrics";
import { Testimonials } from "../components/Testimonials";
import { Equipment } from "../components/Equipment";
import { Programs } from "../components/Programs";
import { Plans } from "../components/Plans";
import { Team } from "../components/Team";
import { FAQ } from "../components/FAQ";
import { Location } from "../components/Location";
import { CTAFinal } from "../components/CTAFinal";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <StatsBar />
      <About />
      <Metrics />
      <Testimonials />
      <Equipment />
      <Programs />
      <Plans />
      <Team />
      <FAQ />
      <Location />
      <CTAFinal />
      <Footer />
    </>
  );
}
