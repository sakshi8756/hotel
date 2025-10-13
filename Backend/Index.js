import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// ✅ Use imported cors directly
app.use(cors({ origin: "*" }));
app.use(express.json());

// In-memory user list (no database)
const list = [];

// 🏠 Home route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the homepage!" });
});

// 🟢 SIGNUP Route
app.post("/signup", (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Check required fields
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = list.find((u) => u.email === email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Save user
    list.push({ fullName, email, password });
    console.log("✅ User list:", list);

    res.status(200).json({ message: `Hello, ${fullName}! Signup successful.` });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// 🟢 SIGNIN Route
app.post("/signin", (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = list.find((u) => u.email === email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    res.status(200).json({ message: "Signin successful!" });
  } catch (err) {
    console.error("Signin error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
