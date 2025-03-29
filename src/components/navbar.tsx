"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-20 py-6">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary focus:outline-none p-2 bg-black/30 backdrop-blur-sm rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          {/* Logo */}
          <div className="flex-1 lg:flex-none">
            <div className="lg:bg-black/30 lg:backdrop-blur-sm lg:py-2 lg:px-6 lg:rounded-md inline-block">
              <Link href="/" className="text-2xl font-normal text-primary tracking-wider">
                QITCHEN
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 bg-black/30 backdrop-blur-sm py-2 px-6 rounded-md">
            <Link href="/menu" className="nav-link">
              MENU
            </Link>
            <Link href="/about" className="nav-link">
              ABOUT
            </Link>
            <Link href="/reservation" className="book-table-btn">
              BOOK A TABLE
            </Link>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center">
              <button
                className="absolute top-6 right-6 text-primary focus:outline-none p-2 bg-black/30 rounded-md"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="mb-12">
                <Link href="/" className="text-4xl font-normal text-primary tracking-wider" onClick={() => setIsMenuOpen(false)}>
                  QITCHEN
                </Link>
              </div>

              <div className="flex flex-col items-center gap-8">
                <Link
                  href="/menu"
                  className="nav-link text-xl tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  MENU
                </Link>
                <Link
                  href="/about"
                  className="nav-link text-xl tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ABOUT
                </Link>
                <Link
                  href="/reservation"
                  className="book-table-btn text-xl tracking-wider mt-4 px-8 py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  BOOK A TABLE
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
