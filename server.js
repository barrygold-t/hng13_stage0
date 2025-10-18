const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// profile info
const user = {
  name: "Mbaedee ThankGod Golden",
  email: "barrygold.t@gmail.com",
  stack: "Node.js/Express",
};

// GET /me endpoint
app.get("/me", async (req, res) => {
  try {
    const response = await axios.get("https://catfact.ninja/fact");
    const catFact = response.data.fact;

    res.status(200).json({
      status: "success",
      user,
      timestamp: new Date().toISOString(),
      fact: catFact,
    });
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);
    res.status(500).json({ status: "error", message: "Failed to fetch cat fact" });
  }
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
