const navLinks = ["Product", "Resources", "Enterprise", "Customers", "Pricing"];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="text-base font-bold text-white">
          Linkd
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-base font-medium text-white transition-opacity hover:opacity-80"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-base font-medium text-white transition-opacity hover:opacity-80"
          >
            Log in
          </a>
          <a
            href="#"
            className="text-base font-medium text-white transition-opacity hover:opacity-80"
          >
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
}
