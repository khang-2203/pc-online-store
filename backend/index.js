const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { verifyToken, isAdmin } = require("./middleware/auth");


dotenv.config();

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // Cho phép truy cập ảnh qua URL

// Cấu hình multer để lưu file vào /uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

// Kết nối MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@ssw0rd1234!",
  database: "pc_online_store",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL database");
});

// GET tất cả sản phẩm
app.get("/api/products", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) {
      console.error("❌ Error fetching products:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
});

// POST sản phẩm mới (cho phép upload ảnh)
app.post("/api/products", upload.single("image"), (req, res) => {
  const { name, price, description } = req.body;
  const image_url = req.file
  ? `/uploads/${req.file.filename}`
  : req.body.image_url || null;
  if (!name || !price || !image_url) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const query =
    "INSERT INTO products (name, price, description, image_url) VALUES (?, ?, ?, ?)";
  const values = [name, price, description || null, image_url];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error("❌ Error adding product:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(201).json({
      message: "✅ Product added successfully",
      id: result.insertId,
      image_url,
    });
  });
});

// PUT cập nhật giá sản phẩm
app.put("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const { price, image_url } = req.body;

  if (!price && !image_url) {
    return res.status(400).json({ error: "Missing data" });
  }

  let query = "UPDATE products SET";
  const values = [];
  const fields = [];

  if (price) {
    fields.push("price = ?");
    values.push(price);
  }

  if (image_url) {
    fields.push("image_url = ?");
    values.push(image_url);
  }

  query += ` ${fields.join(", ")} WHERE id = ?`;
  values.push(id);

  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Error updating product:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "✅ Product updated successfully" });
  });
});

// DELETE xóa sản phẩm
app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM products WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Error deleting product:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "✅ Product deleted successfully" });
  });
});

// GET search sản phẩm theo keyword
app.get("/api/products/search", (req, res) => {
  const keyword = req.query.q;

  if (!keyword) {
    return res.status(400).json({ error: "Missing search keyword" });
  }

  const query = `
    SELECT * FROM products 
    WHERE name LIKE ? OR description LIKE ?
  `;
  const likeKeyword = `%${keyword}%`;

  db.query(query, [likeKeyword, likeKeyword], (err, results) => {
    if (err) {
      console.error("❌ Error searching products:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
});
// Login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [username], async (err, results) => {
    if (err) {
      console.error("❌ Error during login:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: "Sai tài khoản hoặc mật khẩu" });
    }

    const user = results[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Sai tài khoản hoặc mật khẩu" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      "SECRET_KEY",
      { expiresIn: "2h" }
    );

    res.json({
      message: "✅ Đăng nhập thành công",
      token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    });
  });
});

app.post("/api/register", async (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({ error: "Thiếu thông tin đăng ký" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const query = "INSERT INTO users (username, password, role) VALUES (?, ?, ?)";
  const values = [username, hashedPassword, role];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error("❌ Error during register:", err);
      return res.status(500).json({ error: "Database error" });
    }

    res.status(201).json({ message: "✅ Tạo tài khoản thành công", id: result.insertId });
  });
});

// Route test quyền admin
app.get("/api/admin/dashboard", verifyToken, isAdmin, (req, res) => {
  res.json({ message: "🎉 Admin dashboard - truy cập thành công", user: req.user });
});

// Khởi động server
app.listen(port, () => {
  console.log(`🚀 Backend server is running on port ${port}`);
});
