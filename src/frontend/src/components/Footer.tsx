import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025. Built with{" "}
            <Heart className="inline h-4 w-4 fill-destructive text-destructive" />{" "}
            using{" "}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-foreground"
            >
              caffeine.ai
            </a>
          </p>
          <p className="max-w-2xl text-xs text-muted-foreground">
            This educational resource is provided for informational purposes
            only. For severe infestations, please consult with professional pest
            control services.
          </p>
        </div>
      </div>
    </footer>
  );
}
