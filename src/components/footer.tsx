"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © GOLA TEMPLATES
          </div>
          <div className="flex gap-6">
            <Link href="/licensing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Licensing
            </Link>
            <Link href="/styleguide" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Styleguide
            </Link>
          </div>
        </div>
      </div>

      {/* Framer template buttons (only for demo purposes) */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-2">
        <a
          href="https://gola.io/qitchen"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black text-sm font-medium px-4 py-2 rounded-lg shadow-md hover:bg-white/90 transition-colors"
        >
          Use for FREE
        </a>
        <a
          href="https://www.framer.com/marketplace/creator/pawel-gola?via=pawelgola"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black text-sm font-medium px-4 py-2 rounded-lg shadow-md hover:bg-white/90 transition-colors"
        >
          More Templates
        </a>
      </div>
    </footer>
  );
}
