import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";

const chefImage = "https://ext.same-assets.com/1288700763/2590845376.webp";
const restaurantImage = "https://ext.same-assets.com/1288700763/1166796895.webp";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {/* Left Column - Text Content */}
          <div className="bg-card p-10 rounded-md flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-wider text-primary mb-4">
              SUSHI ARTISTRY REDEFINED
            </h2>
            <p className="text-muted-foreground mb-8">
              Where culinary craftsmanship meets modern elegance. Indulge in the finest sushi, expertly curated to elevate your dining experience.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="rounded-md overflow-hidden h-[400px]">
            <Image
              src={restaurantImage}
              alt="Elegant restaurant setting"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Awards Section */}
        <section className="container-custom grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          <AwardCard
            title="TRIP ADVISOR"
            subtitle="BEST SUSHI"
          />
          <AwardCard
            title="MICHELIN GUIDE"
            subtitle="QUALITY FOOD"
          />
          <AwardCard
            title="START DINING"
            subtitle="COOL VIBE"
          />
        </section>

        {/* Our Story Section */}
        <section className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 my-16">
          {/* Left Column - Image */}
          <div className="rounded-md overflow-hidden h-[400px] order-2 lg:order-1">
            <Image
              src={chefImage}
              alt="Chef preparing sushi"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="bg-card p-10 rounded-md flex flex-col justify-center order-1 lg:order-2">
            <div className="flex items-center justify-between mb-6">
              <div className="h-[1px] bg-border flex-1 mr-6"></div>
              <h3 className="text-3xl font-normal tracking-wider text-primary">OUR STORY</h3>
              <div className="h-[1px] bg-border flex-1 ml-6"></div>
            </div>
            <p className="text-muted-foreground">
              Founded with a passion for culinary excellence, Qitchen's journey began in the heart of Prague. Over years, it evolved into a haven for sushi enthusiasts, celebrated for its artful mastery and devotion to redefining gastronomy.
            </p>
          </div>
        </section>

        {/* Large About Title */}
        <section className="container-custom my-40">
          <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-normal tracking-wider text-center text-primary">
            ABOUT
          </h1>
        </section>
      </main>
      <Footer />
    </>
  );
}

function AwardCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="bg-card p-8 rounded-md flex flex-col items-center text-center">
      <div className="flex mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        ))}
      </div>
      <h3 className="text-xl font-normal tracking-wider text-primary mb-2">{title}</h3>
      <p className="text-sm uppercase text-muted-foreground">{subtitle}</p>
    </div>
  );
}
