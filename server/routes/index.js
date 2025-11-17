const express = require("express");
const router = express.Router();

// Import route modules
const contactRoutes = require("./contact.routes");
const projectRoutes = require("./project.routes");

// API routes
router.use("/contact", contactRoutes);
router.use("/projects", projectRoutes);

// Default API route
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Portfolio API",
    version: "1.0.0",
    endpoints: {
      contact: "/api/contact",
      projects: "/api/projects",
      health: "/health",
    },
  });
});

module.exports = router;
