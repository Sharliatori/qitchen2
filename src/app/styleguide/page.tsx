import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function StyleguidePage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 container-custom">
        <h1 className="text-4xl md:text-5xl font-normal tracking-wider text-primary mb-8">Style Guide</h1>

        <div className="space-y-12">
          {/* Typography */}
          <section>
            <h2 className="text-2xl font-normal tracking-wider text-primary mb-6">Typography</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-md">
                <h3 className="text-xl text-primary mb-4">Headings</h3>
                <div className="space-y-4">
                  <div>
                    <h1 className="text-4xl font-normal text-primary">H1: Forum Regular</h1>
                    <p className="text-sm text-muted-foreground mt-1">Used for main page titles</p>
                  </div>
                  <div>
                    <h2 className="text-3xl font-normal text-primary">H2: Forum Regular</h2>
                    <p className="text-sm text-muted-foreground mt-1">Used for section headings</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-normal text-primary">H3: Forum Regular</h3>
                    <p className="text-sm text-muted-foreground mt-1">Used for sub-section headings</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-md">
                <h3 className="text-xl text-primary mb-4">Body Text</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-base text-primary">Body: System Font Stack</p>
                    <p className="text-sm text-muted-foreground mt-1">Used for regular paragraph text</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Small Text: System Font Stack</p>
                    <p className="text-sm text-muted-foreground mt-1">Used for captions and small text</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Label: System Font Stack Uppercase</p>
                    <p className="text-sm text-muted-foreground mt-1">Used for labels and buttons</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Colors */}
          <section>
            <h2 className="text-2xl font-normal tracking-wider text-primary mb-6">Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ColorSwatch name="Background" className="bg-background" hex="#0b0b0b" />
              <ColorSwatch name="Foreground" className="bg-primary" hex="#f5f2ea" />
              <ColorSwatch name="Card" className="bg-card" hex="#131211" />
              <ColorSwatch name="Muted" className="bg-muted" hex="#4d4a45" />
              <ColorSwatch name="Muted Foreground" className="bg-muted-foreground" hex="#b3ada5" />
              <ColorSwatch name="Accent" className="bg-accent" hex="#c2b293" />
              <ColorSwatch name="Border" className="bg-border" hex="#3d3832" />
              <ColorSwatch name="Input" className="bg-input" hex="#161412" />
            </div>
          </section>

          {/* Components */}
          <section>
            <h2 className="text-2xl font-normal tracking-wider text-primary mb-6">Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-md">
                <h3 className="text-xl text-primary mb-4">Buttons</h3>
                <div className="space-y-4">
                  <div>
                    <button className="btn-primary">Primary Button</button>
                    <p className="text-sm text-muted-foreground mt-2">Used for primary actions</p>
                  </div>
                  <div>
                    <button className="book-table-btn">Secondary Button</button>
                    <p className="text-sm text-muted-foreground mt-2">Used for secondary actions</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-md">
                <h3 className="text-xl text-primary mb-4">Form Elements</h3>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Input field"
                      className="w-full bg-input text-primary border border-border rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                    <p className="text-sm text-muted-foreground mt-2">Text input field</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ColorSwatch({ name, className, hex }: { name: string, className: string, hex: string }) {
  return (
    <div className="flex flex-col">
      <div className={`${className} h-20 rounded-md border border-border`}></div>
      <p className="text-primary mt-2">{name}</p>
      <p className="text-sm text-muted-foreground">{hex}</p>
    </div>
  );
}
