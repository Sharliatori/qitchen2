import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function LicensingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 container-custom">
        <h1 className="text-4xl md:text-5xl font-normal tracking-wider text-primary mb-8">Licensing</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground">
            This website is a clone of the Qitchen Framer template created by Gola Templates. The original template can be found at <a href="https://qitchen-template.framer.website/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://qitchen-template.framer.website/</a>.
          </p>

          <p className="text-muted-foreground mt-6">
            All images and design elements are used for demonstration purposes only. If you wish to use the original template for commercial purposes, please visit <a href="https://gola.io/qitchen" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://gola.io/qitchen</a> to acquire the proper license.
          </p>

          <h2 className="text-2xl font-normal tracking-wider text-primary mt-12 mb-4">Image Credits</h2>
          <p className="text-muted-foreground">
            All images used in this clone are sourced from the original template and are credited to their respective owners. For commercial use, please ensure you have the proper licensing for these assets.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
