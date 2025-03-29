"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// Updated images based on the new design
const heroBackgroundTexture = "https://ext.same-assets.com/1288700763/516103007.webp";
const sushiDishImage = "https://ext.same-assets.com/1288700763/3320737122.webp";
const menuImage = "https://ext.same-assets.com/1288700763/3663656776.webp";
const reservationImage = "https://ext.same-assets.com/1288700763/3872360291.webp";
const restaurantImage = "https://ext.same-assets.com/1288700763/938906891.webp";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!mounted) return null;

  // Mobile version
  if (isMobile) {
    return (
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background with texture */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(11, 11, 11, 0.8), rgba(11, 11, 11, 0.95)), url(${heroBackgroundTexture})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Content */}
        <div className="container-custom relative z-10 flex flex-col items-center justify-center py-20">
          {/* Main title */}
          <h1 className="text-8xl font-normal tracking-wider text-center text-primary leading-none">
            SUSHI
          </h1>
          <h2 className="text-7xl font-normal tracking-wider text-center text-primary mt-[-1rem]">
            SENSATION
          </h2>

          {/* Mobile navigation buttons */}
          <div className="flex justify-center gap-4 mt-16">
            <Link href="/menu" className="border border-primary/20 text-primary hover:bg-primary/5 px-10 py-2 rounded-md uppercase text-sm tracking-wider transition-colors">
              Menu
            </Link>
            <Link href="/reservation" className="border border-primary/20 text-primary hover:bg-primary/5 px-6 py-2 rounded-md uppercase text-sm tracking-wider transition-colors">
              Reservation
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Desktop version
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with texture */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(11, 11, 11, 0.6), rgba(11, 11, 11, 0.9)), url(${heroBackgroundTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Content */}
      <div className="w-full max-w-screen-2xl mx-auto px-6 grid grid-cols-12 relative z-10">
        {/* Left side with dish image and title */}
        <div className="col-span-9 flex flex-col justify-center">
          <div className="relative">
            {/* Circular dish image */}
            <div className="relative w-[550px] h-[550px] mx-auto">
              <Image
                src={sushiDishImage}
                alt="Gourmet sushi dish"
                width={550}
                height={550}
                className="rounded-full object-cover"
              />
            </div>

            {/* Title overlay */}
            <div className="absolute bottom-10 left-0 z-20">
              <h1 className="text-[10rem] font-normal tracking-wider text-primary leading-none">
                SUSHI
              </h1>
              <h2 className="text-[8rem] font-normal tracking-wider text-primary mt-[-3rem]">
                SENSATION
              </h2>
            </div>
          </div>
        </div>

        {/* Right side with navigation links */}
        <div className="col-span-3 flex flex-col justify-center gap-6">
          {/* Menu link */}
          <Link href="/menu" className="group">
            <div className="relative h-48 w-full overflow-hidden rounded-md">
              <Image
                src={menuImage}
                alt="Delicious sushi menu"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center">
                <div className="flex items-center justify-between w-full px-6">
                  <span className="text-primary uppercase text-xl tracking-wider font-light">Menu</span>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Reservation link */}
          <Link href="/reservation" className="group">
            <div className="relative h-48 w-full overflow-hidden rounded-md">
              <Image
                src={reservationImage}
                alt="Elegant dining reservation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center">
                <div className="flex items-center justify-between w-full px-6">
                  <span className="text-primary uppercase text-xl tracking-wider font-light">Reservation</span>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Our Restaurant link */}
          <Link href="/about" className="group">
            <div className="relative h-48 w-full overflow-hidden rounded-md">
              <Image
                src={restaurantImage}
                alt="Our restaurant"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center">
                <div className="flex items-center justify-between w-full px-6">
                  <span className="text-primary uppercase text-xl tracking-wider font-light">Our Restaurant</span>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Social media links */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
