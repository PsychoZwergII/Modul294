const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const port = 3000;

// Replace this secret key with a strong, randomly generated key in a production environment.
const secretKey = "your-secret-key";
app.use(express.json());

// Mock user data (in a real app, this would come from a database).
const users = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // In a real app, you'd validate the credentials and fetch the user from a database.
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Create a JWT token with user data.
  const token = jwt.sign(
    { userId: user.id, username: user.username },
    secretKey,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

app.get("/protected", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
  if (!token) {
    return res.status(401).json({ message: "Token is required" });
  }

  try {
    // Verify and decode the token.
    const decoded = jwt.verify(token, secretKey);
    res.json(decoded);
  } catch (error) {
    res.status(401).json({ message: "Token is invalid or expired" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
