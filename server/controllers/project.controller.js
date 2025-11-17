const db = require("../config/db");

// Get all projects
exports.getAllProjects = (req, res) => {
  try {
    const query = "SELECT * FROM projects ORDER BY created_at DESC";

    db.query(query, (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({
          success: false,
          message: "Failed to fetch projects",
        });
      }

      res.json({
        success: true,
        data: results,
      });
    });
  } catch (error) {
    console.error("Error in getAllProjects:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Get a specific project by ID
exports.getProjectById = (req, res) => {
  try {
    const { id } = req.params;

    const query = "SELECT * FROM projects WHERE id = ?";

    db.query(query, [id], (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({
          success: false,
          message: "Failed to fetch project",
        });
      }

      if (results.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Project not found",
        });
      }

      res.json({
        success: true,
        data: results[0],
      });
    });
  } catch (error) {
    console.error("Error in getProjectById:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Create a new project
exports.createProject = (req, res) => {
  try {
    const {
      title,
      description,
      image_url,
      project_url,
      github_url,
      technologies,
      category,
    } = req.body;

    // Validation
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required fields",
      });
    }

    const query = `
      INSERT INTO projects (title, description, image_url, project_url, github_url, technologies, category, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, NOW())
    `;

    db.query(
      query,
      [
        title,
        description,
        image_url || null,
        project_url || null,
        github_url || null,
        technologies || null,
        category || null,
      ],
      (err, result) => {
        if (err) {
          console.error("Database error:", err);
          return res.status(500).json({
            success: false,
            message: "Failed to create project",
            error:
              process.env.NODE_ENV === "development" ? err.message : undefined,
          });
        }

        res.status(201).json({
          success: true,
          message: "Project created successfully",
          data: {
            id: result.insertId,
            title,
            description,
            image_url,
            project_url,
            github_url,
            technologies,
            category,
          },
        });
      }
    );
  } catch (error) {
    console.error("Error in createProject:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Update a project
exports.updateProject = (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      image_url,
      project_url,
      github_url,
      technologies,
      category,
    } = req.body;

    const query = `
      UPDATE projects
      SET title = ?, description = ?, image_url = ?, project_url = ?, github_url = ?, technologies = ?, category = ?, updated_at = NOW()
      WHERE id = ?
    `;

    db.query(
      query,
      [
        title,
        description,
        image_url,
        project_url,
        github_url,
        technologies,
        category,
        id,
      ],
      (err, result) => {
        if (err) {
          console.error("Database error:", err);
          return res.status(500).json({
            success: false,
            message: "Failed to update project",
          });
        }

        if (result.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            message: "Project not found",
          });
        }

        res.json({
          success: true,
          message: "Project updated successfully",
        });
      }
    );
  } catch (error) {
    console.error("Error in updateProject:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Delete a project
exports.deleteProject = (req, res) => {
  try {
    const { id } = req.params;

    const query = "DELETE FROM projects WHERE id = ?";

    db.query(query, [id], (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({
          success: false,
          message: "Failed to delete project",
        });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: "Project not found",
        });
      }

      res.json({
        success: true,
        message: "Project deleted successfully",
      });
    });
  } catch (error) {
    console.error("Error in deleteProject:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
