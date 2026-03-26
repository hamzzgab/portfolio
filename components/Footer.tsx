export default function Footer() {
  return (
    <footer className="px-6 py-16 max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
        <p>&copy; 2026 Hamza Gabajiwala</p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/hamzzgab" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/hamza-gabajiwala" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">LinkedIn</a>
          <a href="mailto:hamzajg16@gmail.com" className="hover:text-teal-400 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
