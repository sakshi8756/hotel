import React from "react";
import {Link} from "react-router-dom";

function Home() {
  const rooms = [
    {
      id: 1,
      name: "Standard Room",
      desc: "A cozy room with essential amenities and a city view.",
      price: 120,
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
      rating: 4.5,
      features: ["Free Wi-Fi", "1 Queen Bed", "Breakfast Included"],
    },
    {
      id: 2,
      name: "Deluxe Room",
      desc: "Spacious room with a king-sized bed and private balcony.",
      price: 180,
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      rating: 4.7,
      features: ["Free Wi-Fi", "1 King Bed", "Balcony", "Room Service"],
    },
    {
      id: 3,
      name: "Luxury Suite",
      desc: "Luxury suite with a living area, sea view, and premium services.",
      price: 250,
      img: "https://images.unsplash.com/photo-1626178807074-bf4769e3ea9f?auto=format&fit=crop&w=900&q=80",
      rating: 4.9,
      features: ["Free Wi-Fi", "2 Rooms", "Sea View", "Butler Service"],
    },
  ];

  return (
    <div className="font-sans bg-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-700">Seaside Hotel</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#rooms" className="hover:text-blue-600 transition">Rooms</a>
            <a href="#amenities" className="hover:text-blue-600 transition">Amenities</a>
            <a href="#dining" className="hover:text-blue-600 transition">Dining</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
          <Link to="/signin">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Book Now
          </button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header
        id="home"
        className="relative h-[80vh] flex flex-col items-center justify-center text-center bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center text-white mt-[72px]"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Seaside Hotel
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            Luxury, comfort, and breathtaking views — your perfect getaway awaits.
          </p>
        </div>
      </header>

      {/* Rooms Section */}
      <section id="rooms" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center">
          Our Rooms
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group"
            >
              <img
                src={room.img}
                alt={room.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{room.name}</h3>
                    <span className="text-sm bg-yellow-400 px-2 py-1 rounded-md">
                      ⭐ {room.rating}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{room.desc}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                    {room.features.map((f, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 rounded-md border"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-5">
                  <span className="text-lg font-bold text-blue-600">
                    ${room.price}/night
                  </span>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="text-center text-gray-500 py-6 border-t bg-gray-100"
      >
        © {new Date().getFullYear()} Seaside Hotel. All Rights Reserved.
      </footer>
    </div>
  );
}

export default Home;
