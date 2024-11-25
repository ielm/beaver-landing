import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center space-x-3 transition-opacity hover:opacity-90"
        >
          <Image
            src="/logo.svg"
            alt="Beaver Health Logo"
            width={48}
            height={48}
            className="p-1"
          />
          <span className="bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-lg font-bold text-transparent">
            Beaver Health
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-6">
          <Link
            href="#features"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
          >
            Testimonials
          </Link>
          <Button
            asChild
            className="relative overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
          >
            <Link href="/#">
              Early Access
              <span className="absolute inset-0 animate-shimmer bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0" />
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
