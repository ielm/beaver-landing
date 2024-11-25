import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="relative w-full border-t py-16 md:py-24" id="footer">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Newsletter Section */}
        <div className="mb-16 flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Stay Connected
            </h2>
            <p className="mx-auto max-w-[600px] text-base text-muted-foreground md:text-lg">
              Join our newsletter to get the latest updates and offers.
            </p>
          </div>
          <div className="w-full max-w-md space-y-2">
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/60 backdrop-blur-sm"
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Links and Social Section */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link
              href="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Our Story
            </Link>
            <Link
              href="/#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Early Access
            </Link>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/mybeaverhealth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/mybeaverhealth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </a>
          </div>

          <p className="text-xs text-muted-foreground/80">
            © 2024 Beaver Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
