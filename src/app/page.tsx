import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero";
import About from "@/components/about";
import Tokenomics from "@/components/tokenomics";
import HowBuy from "@/components/howBuy";
import ViewOn from "@/components/viewOn";
import CTA from "@/components/CTA";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <HowBuy />
      <ViewOn />
      <CTA />
      <Footer />
    </div>
  );
}
