import React, { useState } from "react";


const BuildingIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M12 6h.01" />
    <path d="M12 10h.01" />
    <path d="M12 14h.01" />
    <path d="M16 10h.01" />
    <path d="M8 10h.01" />
    <path d="M8 14h.01" />
    <path d="M16 14h.01" />
  </svg>
);

const PlusCircleIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

// --- Main Admin Dashboard Component ---
const App = () => {
  // --- State Management ---
  const [rooms, setRooms] = useState([
    { id: 1, roomNumber: "101", type: "Single", price: 100, status: "vacant" },
    { id: 2, roomNumber: "102", type: "Double", price: 150, status: "occupied" },
    { id: 3, roomNumber: "103", type: "Suite", price: 250, status: "vacant" },
    { id: 4, roomNumber: "201", type: "Single", price: 110, status: "maintenance" },
    { id: 5, roomNumber: "202", type: "Double", price: 160, status: "occupied" },
  ]);

  const [bookings, setBookings] = useState([
    {
      id: 1,
      guestName: "John Doe",
      guestContact: "999-999-9999",
      roomNumber: "102",
      checkInDate: "2025-10-10",
      checkOutDate: "2025-10-12",
      status: "checked-in",
    },
    {
      id: 2,
      guestName: "Jane Smith",
      guestContact: "888-888-8888",
      roomNumber: "101",
      checkInDate: "2025-10-15",
      checkOutDate: "2025-10-18",
      status: "booked",
    },
    {
        id: 3,
        guestName: "Mike Johnson",
        guestContact: "777-777-7777",
        roomNumber: "202",
        checkInDate: "2025-10-11",
        checkOutDate: "2025-10-14",
        status: "checked-in",
      },
  ]);

  const [roomNumber, setRoomNumber] = useState("");
  const [type, setType] = useState("Single");
  const [price, setPrice] = useState("");

  // --- Functions ---
  const addRoom = () => {
    if (!roomNumber || !type || !price || isNaN(price)) {
        // A simple browser alert for now, can be replaced with a modal/toast
        alert("Please fill in all fields correctly.");
        return;
    }
    const newRoom = {
      id: rooms.length > 0 ? Math.max(...rooms.map(r => r.id)) + 1 : 1,
      roomNumber,
      type,
      price: parseFloat(price),
      status: "vacant",
    };
    setRooms([...rooms, newRoom]);
    setRoomNumber("");
    setType("Single");
    setPrice("");
  };

  // --- Helper Components for Styling ---
  const StatusBadge = ({ status }) => {
    const baseClasses = "px-3 py-1 text-xs font-medium rounded-full inline-block";
    let statusClasses = "";

    switch (status.toLowerCase()) {
      case "vacant":
        statusClasses = "bg-green-100 text-green-800";
        break;
      case "occupied":
        statusClasses = "bg-red-100 text-red-800";
        break;
      case "maintenance":
        statusClasses = "bg-yellow-100 text-yellow-800";
        break;
      case "booked":
        statusClasses = "bg-blue-100 text-blue-800";
        break;
      case "checked-in":
        statusClasses = "bg-violet-100 text-violet-800";
        break;
      default:
        statusClasses = "bg-gray-100 text-gray-800";
    }
    return <span className={`${baseClasses} ${statusClasses}`}>{status}</span>;
  };
  
  const StatCard = ({ title, value, icon, colors }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
        <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
        <div className={`rounded-full p-3 ${colors}`}>
            {icon}
        </div>
    </div>
  );


  // --- Render ---
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen font-sans text-gray-800">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-4">
            <BuildingIcon className="w-10 h-10 text-cyan-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-500">Hotel Management Overview</p>
            </div>
          </div>
        </header>

        {/* Stat Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatCard title="Total Rooms" value={rooms.length} colors="bg-cyan-100 text-cyan-600" icon={<BuildingIcon className="w-6 h-6"/>} />
            <StatCard title="Occupied" value={rooms.filter(r => r.status === 'occupied').length} colors="bg-rose-100 text-rose-600" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>} />
            <StatCard title="Vacant" value={rooms.filter(r => r.status === 'vacant').length} colors="bg-emerald-100 text-emerald-600" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M4.5 16.5c-2.1 2.2-2.1 5.6 0 7.8 2.1 2.2 5.5 2.2 7.6 0l1-1-6.1-6.2-2.5 2.4z"/><path d="m18.5 2.4-1.6 1.3-1.4-1.4 1.6-1.3c.8-.7 2.1-.7 2.9 0 .8.7.8 2.1 0 2.9z"/><path d="M16.5 6.4l-1.4-1.4"/><path d="m13.5 9.4-6.1 6.2 1 1c2.1 2.2 5.5 2.2 7.6 0 2.1-2.2 2.1-5.6 0-7.8l-2.5-2.4z"/></svg>} />
            <StatCard title="Total Bookings" value={bookings.length} colors="bg-amber-100 text-amber-600" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>} />
        </section>

        {/* Add Room Section */}
        <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-5 flex items-center gap-2">
            <PlusCircleIcon className="w-6 h-6 text-cyan-600" />
            <span>Add New Room</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="md:col-span-1">
              <label htmlFor="roomNumber" className="block text-sm font-medium text-gray-600 mb-1">Room Number</label>
              <input id="roomNumber" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500" placeholder="e.g., 101" value={roomNumber} onChange={(e) => setRoomNumber(e.target.value)} />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="type" className="block text-sm font-medium text-gray-600 mb-1">Type</label>
              <select id="type" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500" value={type} onChange={(e) => setType(e.target.value)}>
                <option>Single</option>
                <option>Double</option>
                <option>Suite</option>
                <option>Deluxe</option>
              </select>
            </div>
            <div className="md:col-span-1">
              <label htmlFor="price" className="block text-sm font-medium text-gray-600 mb-1">Price ($)</label>
              <input id="price" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500" placeholder="e.g., 150" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className="md:col-span-1">
              <button onClick={addRoom} className="w-full bg-cyan-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-200 flex items-center justify-center gap-2">
                <PlusCircleIcon className="w-5 h-5"/>
                Add Room
              </button>
            </div>
          </div>
        </section>

        {/* Main Content Area - Rooms and Bookings side-by-side on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Rooms Table */}
            <section className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Rooms</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-cyan-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room No.</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {rooms.map((room) => (
                                <tr key={room.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{room.roomNumber}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{room.type}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${room.price.toFixed(2)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                                        <StatusBadge status={room.status} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Bookings Table */}
            <section className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Current Bookings</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {bookings.map((booking) => (
                                <tr key={booking.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{booking.guestName}</div>
                                        <div className="text-sm text-gray-500">Room {booking.roomNumber}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <StatusBadge status={booking.status} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
      </div>
    </div>
  );
};

export default App;
