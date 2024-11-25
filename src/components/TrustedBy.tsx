import Image from "next/image";

export default function TrustedBy() {
  return (
    <section className="pb-4" id="trusted-by">
      <p className="mb-12 text-center text-lg font-medium tracking-wide text-foreground/60">
        Trusted By Leading Healthcare Organizations
      </p>
      <div className="flex animate-fade-up flex-wrap items-center justify-center gap-12 opacity-0 grayscale transition-all duration-500 [animation-delay:600ms] [animation-duration:800ms] [animation-fill-mode:forwards] hover:opacity-100 hover:grayscale-0">
        <Image
          src="/NIA-logo-p-500.png"
          alt="NIA logo"
          className="h-24 w-auto"
          width={100}
          height={100}
        />
        <Image
          src="/harvard-innovation-labs-logo-p-500.png"
          alt="Harvard Innovation Labs logo"
          className="h-24 w-auto"
          width={100}
          height={100}
        />
        <Image
          src="/sba-logo-p-500.png"
          alt="SBA logo"
          className="h-24 w-auto"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}
