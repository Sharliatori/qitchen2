"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";

const reservationBgImage = "https://ext.same-assets.com/1288700763/459603767.webp";

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    date: "",
    time: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reservation submitted:", formData);
    // In a real application, you would send this data to your backend
    alert("Thank you for your reservation request! We will contact you shortly to confirm.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      guests: "",
      date: "",
      time: ""
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column - Image */}
        <div className="relative hidden lg:block">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(11, 11, 11, 0.4), rgba(11, 11, 11, 0.7)), url(${reservationBgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-8xl sm:text-9xl font-normal tracking-wider text-primary">
              BOOK
            </h1>
            <h2 className="text-6xl sm:text-7xl font-normal tracking-wider text-primary mt-24">
              A TABLE
            </h2>
          </div>
        </div>

        {/* Right Column - Reservation Form */}
        <div className="flex items-center justify-center p-6 lg:p-10">
          <div className="w-full max-w-md">
            <div className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <div className="h-[1px] bg-border flex-1 mr-6"></div>
                <h3 className="text-3xl font-normal tracking-wider text-primary">RESERVATION</h3>
                <div className="h-[1px] bg-border flex-1 ml-6"></div>
              </div>
              <p className="text-muted-foreground text-center">
                Secure your spot at Qitchen, where exceptional sushi and a remarkable dining experience await.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-input text-primary border border-border rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-input text-primary border border-border rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-input text-primary border border-border rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <input
                    type="number"
                    name="guests"
                    placeholder="1-10"
                    min="1"
                    max="10"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full bg-input text-primary border border-border rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                <div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-input text-primary border border-border rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                <div>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full bg-input text-primary border border-border rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground py-3 rounded-md uppercase tracking-wider text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
