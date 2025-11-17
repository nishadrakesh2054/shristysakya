const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact.controller");

// POST /api/contact - Create a new contact message
router.post("/", contactController.createContact);

// GET /api/contact - Get all contact messages (with optional pagination)
router.get("/", contactController.getAllContacts);

// GET /api/contact/:id - Get a specific contact message
router.get("/:id", contactController.getContactById);

// DELETE /api/contact/:id - Delete a contact message
router.delete("/:id", contactController.deleteContact);

module.exports = router;
