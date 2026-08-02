import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import TechStack from "../../components/common/TechStack";
import Features from "../../components/common/Features";
import Pipeline from "../../components/common/Pipeline";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Features />
      <Pipeline />
    </>
  );
}