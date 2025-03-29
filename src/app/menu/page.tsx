import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

const menuBgImage = "https://ext.same-assets.com/1288700763/1318061244.webp";

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section with Image */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(11, 11, 11, 0.6), rgba(11, 11, 11, 0.8)), url(${menuBgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div className="container-custom relative z-10">
            <h1 className="text-6xl md:text-8xl font-normal tracking-wider text-center text-primary">
              MENU
            </h1>
          </div>
        </section>

        {/* Menu Categories */}
        <section className="container-custom py-6 border-b border-border">
          <div className="flex justify-center gap-8">
            <Link
              href="#maki"
              className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm tracking-wide"
            >
              Maki
            </Link>
            <Link
              href="#uramaki"
              className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm tracking-wide"
            >
              Uramaki
            </Link>
            <Link
              href="#special"
              className="text-muted-foreground hover:text-primary transition-colors uppercase text-sm tracking-wide"
            >
              Special Rolls
            </Link>
          </div>
        </section>

        {/* Maki Section */}
        <section id="maki" className="container-custom py-16">
          <h2 className="text-4xl font-normal tracking-wider text-center text-primary mb-12">Maki</h2>

          <div className="grid grid-cols-1 gap-8">
            <MenuItem
              name="Spicy Tuna Maki"
              price="$5"
              description="A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice."
              imageSrc="https://ext.same-assets.com/1288700763/3856567850.webp"
            />

            <MenuItem
              name="Mango Maki"
              price="$5"
              description="Tempura-fried shrimp, cucumber, and cream cheese embrace a center of fresh avocado, delivering a satisfying contrast of textures."
              imageSrc="https://ext.same-assets.com/1288700763/1891004177.webp"
              isVegetarian
            />

            <MenuItem
              name="Salmon Maki"
              price="$5"
              description="Shiitake mushrooms, avocado, and pickled daikon radish nestle within a roll of seasoned rice, coated with nutty sesame seeds."
              imageSrc="https://ext.same-assets.com/1288700763/4049972823.webp"
            />

            <MenuItem
              name="Tuna Maki"
              price="$5"
              description="A vibrant assortment of julienned carrots, bell peppers, and cucumber, tightly encased in a nori-wrapped rice roll."
              imageSrc="https://ext.same-assets.com/1288700763/288610409.webp"
            />
          </div>
        </section>

        {/* Uramaki Section */}
        <section id="uramaki" className="container-custom py-16">
          <h2 className="text-4xl font-normal tracking-wider text-center text-primary mb-12">Uramaki</h2>

          <div className="grid grid-cols-1 gap-8">
            <MenuItem
              name="Volcano Delight"
              price="$12"
              description="Creamy crab salad, avocado, and cucumber rolled inside, topped with spicy tuna and drizzled with fiery sriracha sauce."
              imageSrc="https://ext.same-assets.com/1288700763/203157901.webp"
            />

            <MenuItem
              name="Rainbow Fusion"
              price="$12"
              description="A colorful blend of fresh tuna, salmon, yellowtail, and avocado, enveloping a core of cucumber and crab stick."
              imageSrc="https://ext.same-assets.com/1288700763/282081884.webp"
            />

            <MenuItem
              name="Dragon Elegance"
              price="$12"
              description="Grilled eel and avocado nestled within the roll, draped with slices of ripe avocado resembling dragon scales."
              imageSrc="https://ext.same-assets.com/1288700763/2882423082.webp"
            />

            <MenuItem
              name="Sunset Serenity"
              price="$12"
              description="Tempura shrimp, cucumber, and spicy mayo embraced by a roll of soy paper, crowned with slices of creamy mango."
              imageSrc="https://ext.same-assets.com/1288700763/254627205.webp"
            />
          </div>
        </section>

        {/* Special Rolls Section */}
        <section id="special" className="container-custom py-16">
          <h2 className="text-4xl font-normal tracking-wider text-center text-primary mb-12">Special Rolls</h2>

          <div className="grid grid-cols-1 gap-8">
            <MenuItem
              name="Sunrise Bliss"
              price="$16"
              description="A delicate combination of fresh salmon, cream cheese, and asparagus, rolled in orange-hued tobiko for a burst of sunrise-inspired flavors."
              imageSrc="https://ext.same-assets.com/1288700763/1312962234.webp"
              isVegetarian
            />

            <MenuItem
              name="Mango Tango"
              price="$16"
              description="Tempura shrimp, cucumber, and avocado dance alongside sweet mango slices, drizzled with a tangy mango sauce."
              imageSrc="https://ext.same-assets.com/1288700763/254627205.webp"
            />

            <MenuItem
              name="Truffle Indulgence"
              price="$16"
              description="Decadent slices of black truffle grace a roll of succulent wagyu beef, cucumber, and microgreens, culminating in an exquisite umami symphony."
              imageSrc="https://ext.same-assets.com/1288700763/288610409.webp"
              isVegetarian
            />

            <MenuItem
              name="Pacific Firecracker"
              price="$16"
              description="Spicy crab salad, tempura shrimp, and jalapeño peppers combine in a fiery ensemble, accented with a chili-infused aioli."
              imageSrc="https://ext.same-assets.com/1288700763/203157901.webp"
              isVegetarian
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function MenuItem({
  name,
  price,
  description,
  imageSrc,
  isVegetarian = false
}: {
  name: string;
  price: string;
  description: string;
  imageSrc: string;
  isVegetarian?: boolean;
}) {
  return (
    <div className="flex items-center gap-6 pb-6 border-b border-border">
      <div className="w-20 h-14 relative flex-shrink-0">
        <div className="w-full h-full bg-card rounded-md overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            width={80}
            height={60}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-normal text-primary tracking-wide">
            {name} {isVegetarian && (
              <span className="inline-block w-4 h-4 text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                  <path d="M12 6a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"></path>
                </svg>
              </span>
            )}
          </h3>
          <span className="text-lg font-normal text-primary">{price}</span>
        </div>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
