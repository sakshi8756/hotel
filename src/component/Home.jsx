import React from "react";
import { Link } from "react-router-dom";
import {
  FaWifi,
  FaSwimmingPool,
  FaUtensils,
  FaDumbbell,
  FaSpa,
  FaShuttleVan,
  FaConciergeBell,
  FaCocktail,
} from "react-icons/fa";

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
  img: "https://plus.unsplash.com/premium_photo-1698405316329-fd9c43d7e11c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
  rating: 4.9,
  features: ["Free Wi-Fi", "2 Rooms", "Sea View", "Butler Service"],
},

  ];

  const amenities = [
    {
      icon: <FaWifi className="text-3xl text-blue-600" />,
      title: "Free High-Speed Wi-Fi",
      desc: "Stay connected throughout the hotel with fast and reliable internet.",
    },
    {
      icon: <FaSwimmingPool className="text-3xl text-blue-600" />,
      title: "Infinity Pool",
      desc: "Enjoy stunning views while you relax in our infinity pool.",
    },
    {
      icon: <FaUtensils className="text-3xl text-blue-600" />,
      title: "Fine Dining",
      desc: "Relish multi-cuisine dishes crafted by world-class chefs.",
    },
    {
      icon: <FaDumbbell className="text-3xl text-blue-600" />,
      title: "Fitness Center",
      desc: "Work out in our fully equipped, modern gym anytime you wish.",
    },
    {
      icon: <FaSpa className="text-3xl text-blue-600" />,
      title: "Spa & Wellness",
      desc: "Rejuvenate with professional spa therapies and massages.",
    },
    {
      icon: <FaShuttleVan className="text-3xl text-blue-600" />,
      title: "Airport Shuttle",
      desc: "Complimentary airport transfers for your convenience.",
    },
    {
      icon: <FaConciergeBell className="text-3xl text-blue-600" />,
      title: "24/7 Concierge",
      desc: "Our friendly staff is always available for assistance.",
    },
    {
      icon: <FaCocktail className="text-3xl text-blue-600" />,
      title: "Bar & Lounge",
      desc: "Unwind at our modern bar with premium cocktails and beverages.",
    },
  ];

  const diningOptions = [
    {
      id: 1,
      name: "The Ocean View Restaurant",
      desc: "Experience gourmet dining with a view of the endless sea. Our chefs prepare international delicacies with local flavors.",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      name: "Sky Lounge & Bar",
      desc: "Sip premium cocktails and enjoy live music at our rooftop bar with panoramic city views.",
      img: "https://media.istockphoto.com/id/2222885802/photo/refreshing-drinks-by-the-poolside.jpg?s=612x612&w=0&k=20&c=18VAhaCAbc0fMFPksiVuDI5CQ_14W-OPncEpV1WtJ7I=",
    },
    {
      id: 3,
      name: "Sunrise Café",
      desc: "Start your day with aromatic coffee, freshly baked pastries, and a serene garden ambiance.",
      img: "https://images.unsplash.com/photo-1728208401732-3a662df8bee2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3VucmlzZSUyMENhZiVDMyVBOXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="font-sans bg-gray-100 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-700">Seaside Hotel</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-600 transition">
              Home
            </a>
            <a href="#rooms" className="hover:text-blue-600 transition">
              Rooms
            </a>
            <a href="#amenities" className="hover:text-blue-600 transition">
              Amenities
            </a>
            <a href="#dining" className="hover:text-blue-600 transition">
              Dining
            </a>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
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

      {/* ✅ Amenities Section */}
      <section id="amenities" className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Our Amenities
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {amenities.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg hover:-translate-y-2 transition-all text-center"
              >
                <div className="flex justify-center mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🍽 Dining Section */}
      <section id="dining" className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Dining Experience</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-12">
            Explore world-class dining options crafted by our expert chefs. From cozy cafés to rooftop bars — enjoy flavors from across the globe.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {diningOptions.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all">
                <img src={item.img} alt={item.name} className="h-56 w-full object-cover hover:scale-105 transition-transform" />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* 📞 Contact Section */}
      <section
        id="contact"
        className="bg-blue-50 py-16 px-6 flex flex-col items-center text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Contact Us
        </h2>
        <p className="max-w-2xl text-gray-600 mb-10">
          Have questions or want to make a booking? Our team is available 24/7 to
          assist you with reservations, events, or special requests.
        </p>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full">
          {/* Contact Info */}
          <div className="bg-white shadow-lg rounded-2xl p-8 text-left space-y-4">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Get in Touch</h3>
            <p className="text-gray-700">📍 Address: 123 Seaside Road, Goa, India</p>
            <p className="text-gray-700">📞 Phone: +91 98765 43210</p>
            <p className="text-gray-700">📧 Email: contact@seasidehotel.com</p>
            <p className="text-gray-700">🕒 Working Hours: Mon - Sun (24/7)</p>
          </div>

          {/* Contact Form */}
          <form className="bg-white shadow-lg rounded-2xl p-8 space-y-4 text-left">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Send Us a Message</h3>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-300"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg p-3 h-28 focus:ring focus:ring-blue-300"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

                  {/* Footer */}
      <footer
        id="contact"
        className="bg-gray-100 border-t text-center py-6 px-4"
      >
        <p className="text-gray-600 font-semibold mb-2">
          © {new Date().getFullYear()} Seaside Hotel. All Rights Reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Designed with ❤️ by the Seaside Hotel Team
        </p>
      </footer>

      
    </div>
  );
}

export default Home;
