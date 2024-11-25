import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex min-h-[60vh] items-center py-1">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_400px] lg:gap-16 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-8">
          <div className="">
            <h1 className="animate-fade-up bg-gradient-to-br from-primary to-primary/70 bg-clip-text pb-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-transparent opacity-0 [animation-delay:100ms] [animation-duration:600ms] [animation-fill-mode:forwards] sm:text-5xl xl:text-6xl/none">
              Uplift older loved ones and caregivers
            </h1>
            <p className="animate-fade-up max-w-[600px] text-lg font-normal leading-relaxed tracking-wide text-muted-foreground/90 opacity-0 [animation-delay:200ms] [animation-duration:600ms] [animation-fill-mode:forwards] [text-wrap:pretty]">
              Beaver is a family-centered platform that provides personalized
              and culturally-tailored wellness solutions for older loved ones
              and those who care for them.
            </p>
          </div>
          <div className="animate-fade-up flex flex-col gap-4 opacity-0 [animation-delay:300ms] [animation-duration:600ms] [animation-fill-mode:forwards] min-[400px]:flex-row">
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
            >
              <Link href="/early-access">
                Join Early Access
                <span className="animate-shimmer absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="group relative rounded-2xl p-2">
          <div className="animate-fade-up absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/0 opacity-0 blur-2xl [animation-delay:400ms] [animation-duration:800ms] [animation-fill-mode:forwards]" />
          <Image
            alt="Hero"
            className="animate-fade-up relative z-10 mx-auto rounded-xl opacity-0 transition-transform duration-300 [animation-delay:500ms] [animation-duration:800ms] [animation-fill-mode:forwards] group-hover:scale-[1.02]"
            height={600}
            src="/family_drawing_beaver.png"
            width={600}
            priority
          />
        </div>
      </div>
    </section>
  );
}
