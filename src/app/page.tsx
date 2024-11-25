import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-muted/30">
      <Header />
      <div className="relative w-full flex-grow">
        <Background />
        <div className="relative mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Hero />
          <TrustedBy />
          <Features />
          <Testimonials />
        </div>
      </div>
      <Footer />
    </main>
  );
}
