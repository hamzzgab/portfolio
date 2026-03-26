import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 py-12 max-w-3xl mx-auto border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>&copy; 2026 Hamza Gabajiwala</p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/hamzzgab"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hamza-gabajiwala"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hamzajg16@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
          <a
            href={`${process.env.NODE_ENV === "production" ? "/portfolio" : ""}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Resume
          </a>
          <Link
            href="/gallery"
            className="hover:text-foreground transition-colors"
          >
            Certificates
          </Link>
        </div>
      </div>
    </footer>
  );
}
