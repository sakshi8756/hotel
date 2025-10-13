import React, { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('https://hotel-arx9.vercel.app/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })


      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        if (data.token) localStorage.setItem("token", data.token);
        // simple redirect without router:
        window.location.href = "/user";
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Network error. Check backend server or CORS.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        {error && <p className="text-red-600 mb-2">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white py-2 rounded-lg ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
