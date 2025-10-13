import React, { useState, useMemo } from 'react';

// --- SVG Icon Components ---
const SearchIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>;
const BedIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 4v16h20V4Z" /><path d="M2 10h20" /><path d="M6 8v2" /><path d="M18 8v2" /></svg>;
const UsersIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
const CalendarDaysIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>;
const StarIcon = ({ className, fill }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill} stroke={fill} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;

// --- Main User Dashboard Component ---
const UserDash = () => {
  // --- State Management ---
  const [allRooms] = useState([
    { id: 1, roomNumber: "101", type: "Ocean View Single", price: 310, status: "vacant", capacity: 1, amenities: ["Wi-Fi", "Balcony"], rating: 4.7, reviewCount: 35, imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbf3ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHhvY2VhbiUyMHZpZXclMjBzaW5nbGUlMjByb29tfGVufDB8MHx8fDE3MTY4ODQxNDJ8MA&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 2, roomNumber: "102", type: "Harbor Double", price: 420, status: "occupied", capacity: 2, amenities: ["Wi-Fi", "Sea View", "King Bed"], rating: 4.8, reviewCount: 42, imageUrl: 'https://images.unsplash.com/photo-1596436889215-ce1910228796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHhoYXJib3IlMjBkb3VibGUlMjByb29tfGVufDB8MHx8fDE3MTY4ODQxNDJ8MA&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 3, roomNumber: "103", type: "Marina Suite", price: 650, status: "vacant", capacity: 2, amenities: ["Wi-Fi", "Sea View", "Lounge Area", "Mini Bar"], rating: 4.9, reviewCount: 38, imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c6a52fd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHhtYXJpbmElMjBzdWl0ZXxlbnwwfDB8MHx8fDE3MTY4ODQxNDJ8MA&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 4, roomNumber: "201", type: "Ocean View Single", price: 325, status: "vacant", capacity: 1, amenities: ["Wi-Fi", "Balcony"], rating: 4.6, reviewCount: 28, imageUrl: 'https://images.unsplash.com/photo-1559567946-b8c719e7a2cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHZpZXclMjBzaW5nbGUlMjByb29tfGVufDB8MHx8fDE3MTY4ODQxNDJ8MA&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 5, roomNumber: "202", type: "Harbor Double", price: 445, status: "occupied", capacity: 2, amenities: ["Wi-Fi", "Sea View", "King Bed"], rating: 4.7, reviewCount: 51, imageUrl: 'https://images.unsplash.com/photo-1595503022511-209489ce7d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHhoYXJib3IlMjBkb3VibGUlMjByb29tfGVufDB8MHx8fDE3MTY4ODQxNDJ8MA&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 6, roomNumber: "203", type: "The Admiral Suite", price: 950, status: "vacant", capacity: 4, amenities: ["Wi-Fi", "Sea View", "Lounge", "Mini Bar", "Jacuzzi"], rating: 5.0, reviewCount: 60, imageUrl: 'https://images.unsplash.com/photo-1610624021798-89c0a6b4a390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxhZG1pcmFsJTIwc3VpdGV8ZW58MHwwfHx8MTcxNjg4NDE0M3ww&ixlib=rb-4.0.3&q=80&w=1080' },
  ]);

  const [myBookings, setMyBookings] = useState([
      { id: 2, roomNumber: "102", type: "Harbor Double", price: 420, status: "occupied", checkIn: "2025-10-12", checkOut: "2025-10-15" },
  ]);

  const [filters, setFilters] = useState({ searchTerm: '', roomType: 'all' });
  const [roomToBook, setRoomToBook] = useState(null);

  // --- Functions ---
  const handleFilterChange = (e) => setFilters(prev => ({...prev, [e.target.name]: e.target.value}));
  
  const confirmBooking = () => {
      if (!roomToBook) return;
      const newBooking = { ...roomToBook, checkIn: new Date().toISOString().slice(0, 10), checkOut: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().slice(0, 10) };
      setMyBookings(prev => [...prev, newBooking]);
      setRoomToBook(null);
  };

  const filteredRooms = useMemo(() => allRooms.filter(room => 
      (room.status === 'vacant') &&
      (filters.roomType === 'all' || room.type.toLowerCase().replace(/ /g, '-') === filters.roomType) &&
      (filters.searchTerm === '' || room.type.toLowerCase().includes(filters.searchTerm.toLowerCase()) || room.amenities.join(" ").toLowerCase().includes(filters.searchTerm.toLowerCase()))
  ), [allRooms, filters]);

  // --- UI Components ---
  const StarRating = ({ rating, reviewCount }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => ( <StarIcon key={i} className="w-5 h-5 text-teal-500" fill="currentColor"/> ))}
        <span className="ml-3 text-sm text-slate-500 font-medium">{rating.toFixed(1)} ({reviewCount} reviews)</span>
    </div>
  );

  const RoomCard = ({ room, index }) => (
    <div className="bg-white rounded-xl overflow-hidden ring-1 ring-slate-200/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2 flex flex-col animate-card-enter" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="relative">
          <img src={room.imageUrl} alt={`${room.type} room`} className="w-full h-56 object-cover" />
          <div className="absolute top-0 right-0 bg-white/90 backdrop-blur-sm text-teal-800 font-bold px-4 py-1.5 m-3 rounded-full text-sm">${room.price}<span className="font-normal">/night</span></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold font-serif text-slate-800">{room.type}</h3>
          <div className="my-3"><StarRating rating={room.rating} reviewCount={room.reviewCount} /></div>
          <div className="flex items-center text-sm text-slate-500 space-x-6 my-3">
              <span className="flex items-center"><UsersIcon className="w-4 h-4 mr-2 text-teal-600"/> Sleeps {room.capacity}</span>
              <span className="flex items-center"><BedIcon className="w-4 h-4 mr-2 text-teal-600"/> {room.type.split(' ')[0]}</span>
          </div>
          <div className="mb-5 mt-2 flex flex-wrap gap-2">
              {room.amenities.map(amenity => (
                  <span key={amenity} className="bg-cyan-50 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full">{amenity}</span>
              ))}
          </div>
          <button onClick={() => setRoomToBook(room)} className="w-full mt-auto bg-teal-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-teal-500/20 hover:bg-teal-700 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              View & Reserve
          </button>
      </div>
    </div>
  );

  const BookingConfirmationModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg transform transition-all animate-fade-in-up">
          <h2 className="text-2xl font-serif font-bold text-center mb-4 text-slate-800">Confirm Your Reservation</h2>
          <div className="flex gap-6 items-start">
              <img src={roomToBook.imageUrl} alt={`${roomToBook.type} room`} className="w-1/3 h-auto object-cover rounded-lg shadow-md" />
              <div className="flex-grow space-y-3 text-sm text-slate-700">
                  <div className="flex justify-between"><span className="font-semibold text-slate-500">Selection:</span><span className="font-bold text-teal-700">{roomToBook.type}</span></div>
                  <div className="flex justify-between"><span className="font-semibold text-slate-500">Rate:</span><span className="font-bold text-slate-800">${roomToBook.price.toFixed(2)} / night</span></div>
                  <div className="flex justify-between"><span className="font-semibold text-slate-500">Capacity:</span><span className="font-bold text-slate-800">{roomToBook.capacity} Guest(s)</span></div>
              </div>
          </div>
          <div className="mt-6 flex justify-end gap-4">
              <button onClick={() => setRoomToBook(null)} className="px-6 py-2 bg-slate-200 text-slate-800 rounded-lg font-semibold hover:bg-slate-300 transition-colors">Cancel</button>
              <button onClick={confirmBooking} className="px-6 py-2 bg-teal-600 text-white rounded-lg font-bold hover:bg-teal-700 shadow-lg shadow-teal-500/30 transition-transform hover:scale-105">Finalize</button>
          </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#F8F6F1] min-h-screen font-sans text-slate-800">
      {roomToBook && <BookingConfirmationModal />}
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="relative rounded-xl overflow-hidden mb-12 p-12 text-center h-80 flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1512918728675-ed5a7eb9dd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzZWFzaWRlJTIwaG90ZWwlMjBlbnRyYW5jZXxlbnwwfDB8MHx8fDE3MTY4ODQxNDN8MA&ixlib=rb-4.0.3&q=80&w=1080')"}}></div>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative z-10">
                <h1 className="text-4xl sm:text-6xl font-extrabold font-serif text-white mb-2 tracking-tight">Your Coastal Sanctuary</h1>
                <p className="text-lg text-slate-100 max-w-2xl mx-auto">Discover a harmonious blend of modern luxury and the timeless allure of the sea.</p>
            </div>
        </header>

        <section className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-lg mb-12 -mt-24 relative z-20 ring-1 ring-slate-200/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="relative md:col-span-2">
                    <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input type="text" name="searchTerm" placeholder="Search suites, amenities (e.g. Sea View)..." className="w-full pl-12 pr-4 py-3 bg-white border border-slate-300 text-slate-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all" value={filters.searchTerm} onChange={handleFilterChange} />
                </div>
                <div>
                    <select name="roomType" className="w-full p-3 bg-white border border-slate-300 text-slate-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all appearance-none bg-no-repeat bg-right" value={filters.roomType} onChange={handleFilterChange}>
                        <option value="all">All Accommodations</option>
                        {[...new Set(allRooms.map(r => r.type))].map(type => 
                          <option key={type} value={type.toLowerCase().replace(/ /g, '-')}>{type}</option>
                        )}
                    </select>
                </div>
            </div>
        </section>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold font-serif mb-6 text-slate-800">Available Accommodations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredRooms.length > 0 ? (
                        filteredRooms.map((room, index) => <RoomCard key={room.id} room={room} index={index} />)
                    ) : (
                        <div className="md:col-span-2 text-center py-10 bg-white rounded-lg shadow-inner border border-slate-200"><p className="text-slate-500">No available accommodations match your criteria.</p></div>
                    )}
                </div>
            </div>
            
            <aside className="lg:col-span-1">
                <div className="bg-white/80 ring-1 ring-slate-200/50 p-6 rounded-xl shadow-lg sticky top-8">
                    <h2 className="text-2xl font-bold font-serif mb-6 flex items-center gap-3 text-slate-800"><CalendarDaysIcon className="text-teal-600 w-7 h-7"/> My Reservations</h2>
                    <div className="space-y-4">
                        {myBookings.length > 0 ? (
                            myBookings.map(booking => (
                                <div key={booking.id} className="bg-white p-4 rounded-lg border border-slate-200">
                                    <p className="font-bold text-teal-700">{booking.type}</p>
                                    <p className="text-sm text-slate-500">Room: {booking.roomNumber}</p>
                                    <div className="text-sm text-slate-500 mt-2 border-t border-slate-200 pt-2">
                                        <p><strong>Check-in:</strong> {booking.checkIn}</p>
                                        <p><strong>Check-out:</strong> {booking.checkOut}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-slate-500 py-4">You have no active reservations.</p>
                        )}
                    </div>
                </div>
            </aside>
        </main>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap');
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 0.4s ease-out forwards; }
        @keyframes card-enter { from { opacity: 0; transform: translateY(30px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .animate-card-enter { opacity: 0; animation: card-enter 0.5s ease-out forwards; }
        select {
          background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="%2364748b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 8 4 4 4-4"/></svg>');
          background-position: right 0.5rem center;
          background-size: 1.5em 1.5em;
        }
      `}</style>
    </div>
  );
};

export default UserDash;
