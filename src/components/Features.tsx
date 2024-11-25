import Image from "next/image";

export default function Features() {
  return (
    <section className="rounded-3xl bg-muted/10 py-24" id="features">
      <div className="mx-auto mb-16 max-w-[800px] text-center">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Comprehensive Care Support
        </h2>
        <p className="text-lg font-normal leading-relaxed tracking-wide text-muted-foreground">
          Our platform combines clinical expertise with meaningful family
          connection, delivering personalized care that respects cultural values
          and traditions.
        </p>
      </div>

      <div className="grid gap-y-20 lg:grid-cols-3 lg:gap-x-12">
        {[
          {
            title: "Culturally Personalized",
            description:
              "Beaver tailors evidence-based cognitive stimulation, physical, and mindfulness exercises to the unique life experiences and cultural context of each older adult and caregiver.",
            image: "/culturally-personalized.png",
          },
          {
            title: "Family-Powered",
            description:
              "Our platform integrates daily photos and messages from family members, transforming clinical activities into meaningful family interactions for both older adults and caregivers.",
            image: "/family-powered.png",
          },
          {
            title: "Accessible",
            description:
              "Beaver provides affordable, on-demand professional support directly from the comfort of your home. Our platform features an easy-to-use interface designed for older adults.",
            image: "/accessible.png",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center text-center"
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl transition-all duration-500 group-hover:bg-primary/20" />
              <Image
                width={160}
                height={160}
                src={feature.image}
                alt={feature.title}
                className="relative h-40 w-40 rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mb-3 text-xl font-semibold tracking-tight">
              {feature.title}
            </h3>
            <p className="text-base leading-relaxed tracking-wide text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
