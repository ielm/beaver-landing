import Image from "next/image";

const testimonials = [
  {
    quote:
      "My mom is 99 years old and doesn't use keyboards or smartphones. Beaver can be used hands-free via voice and was so easy for my mom to use. She loves Beaver.",
    author: "Carlos",
    role: "Son, Pennsylvania",
    avatar: "/avatars/Carlos.png",
  },
  {
    quote:
      "I was raised by my grandmother who was diagnosed with stage two dementia this year. I was anxious and worried about how to help her and prevent accidents. Beaver reduced my anxiety and helps the entire family. We are grateful and feel supported by Beaver.",
    author: "Amahle",
    role: "Granddaughter, California",
    avatar: "/avatars/Amahle.png",
  },
  {
    quote:
      "Grandpa likes how Beaver's activities are tailored to our culture and that he can see the grandkids daily. He uses Beaver every day and says it's fun. Beaver brings the family together for \"healthy fun\" and helps grandpa and me feel loved and supported.",
    author: "Huong",
    role: "Caregiver, New York",
    avatar: "/avatars/Huong.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24" id="testimonials">
      <h2 className="mb-16 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
        Stories from Our Community
      </h2>
      <div className="grid gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="group relative rounded-2xl bg-background/50 p-8 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
          >
            <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-background-secondary/30 via-background-secondary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-80" />
            <div className="relative space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={56}
                    height={56}
                    className="relative rounded-full object-cover ring-2 ring-background"
                  />
                </div>
                <div>
                  <p className="font-semibold tracking-wide text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm tracking-wide text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="relative">
                <svg
                  className="absolute -left-2 -top-2 h-6 w-6 text-primary/30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="pl-6 text-base leading-relaxed tracking-wide text-muted-foreground">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
