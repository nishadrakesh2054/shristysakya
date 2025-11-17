const db = require("../config/db");

// Create a new contact message
exports.createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required fields",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    const query = `
      INSERT INTO contacts (name, email, subject, message, created_at)
      VALUES (?, ?, ?, ?, NOW())
    `;

    db.query(query, [name, email, subject || null, message], (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({
          success: false,
          message: "Failed to save contact message",
          error:
            process.env.NODE_ENV === "development" ? err.message : undefined,
        });
      }

      res.status(201).json({
        success: true,
        message: "Contact message saved successfully",
        data: {
          id: result.insertId,
          name,
          email,
          subject,
          message,
        },
      });
    });
  } catch (error) {
    console.error("Error in createContact:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Get all contact messages
exports.getAllContacts = (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const query = `
      SELECT * FROM contacts
      ORDER BY created_at DESC
      LIMIT ? OFFSET ?
    `;

    const countQuery = "SELECT COUNT(*) as total FROM contacts";

    db.query(countQuery, (err, countResult) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({
          success: false,
          message: "Failed to fetch contacts",
        });
      }

      const total = countResult[0].total;

      db.query(query, [limit, offset], (err, results) => {
        if (err) {
          console.error("Database error:", err);
          return res.status(500).json({
            success: false,
            message: "Failed to fetch contacts",
          });
        }

        res.json({
          success: true,
          data: results,
          pagination: {
            page,
            limit,
            total,
            pages: Math.ceil(total / limit),
          },
        });
      });
    });
  } catch (error) {
    console.error("Error in getAllContacts:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Get a specific contact message by ID
exports.getContactById = (req, res) => {
  try {
    const { id } = req.params;

    const query = "SELECT * FROM contacts WHERE id = ?";

    db.query(query, [id], (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({
          success: false,
          message: "Failed to fetch contact",
        });
      }

      if (results.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Contact not found",
        });
      }

      res.json({
        success: true,
        data: results[0],
      });
    });
  } catch (error) {
    console.error("Error in getContactById:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Delete a contact message
exports.deleteContact = (req, res) => {
  try {
    const { id } = req.params;

    const query = "DELETE FROM contacts WHERE id = ?";

    db.query(query, [id], (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({
          success: false,
          message: "Failed to delete contact",
        });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: "Contact not found",
        });
      }

      res.json({
        success: true,
        message: "Contact deleted successfully",
      });
    });
  } catch (error) {
    console.error("Error in deleteContact:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
