const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// --- CONFIGURATION ---
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// --- DATABASE UTILITIES (JSON FILE DB) ---
const DB_PATH = path.join(__dirname, 'data', 'db.json');

const readDB = () => {
  try {
    const rawData = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Error reading JSON DB, fallback to default schema:', error);
    return { products: [], contacts: [] };
  }
};

const writeDB = (data) => {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing to JSON DB:', error);
    return false;
  }
};

// --- PAGES ROUTES ---

// Home Page
app.get('/', (req, res) => {
  const db = readDB();
  res.render('index', { 
    products: db.products, 
    page: 'home' 
  });
});

// About Page
app.get('/gioi-thieu', (req, res) => {
  res.render('gioi-thieu', { 
    page: 'about' 
  });
});

// Products Page
app.get('/san-pham', (req, res) => {
  const db = readDB();
  res.render('san-pham', { 
    products: db.products, 
    page: 'products' 
  });
});

// Product Detail Page (Dynamic Route)
app.get('/san-pham/:id', (req, res) => {
  const db = readDB();
  const productId = req.params.id;
  
  const product = db.products.find(p => p.id === productId);
  if (!product) {
    return res.status(404).send('Không tìm thấy sản phẩm này.');
  }

  // Filter other 3 products as related
  const relatedProducts = db.products.filter(p => p.id !== productId);

  res.render('product-detail', {
    product,
    relatedProducts,
    page: 'product-detail'
  });
});

// News Page
app.get('/tin-tuc', (req, res) => {
  res.render('tin-tuc', { 
    page: 'news' 
  });
});

// Contact Page
app.get('/lien-he', (req, res) => {
  res.render('lien-he', { 
    page: 'contact' 
  });
});

// Admin Panel Dashboard
app.get('/admin', (req, res) => {
  const db = readDB();
  res.render('admin', {
    products: db.products,
    messages: db.contacts,
    page: 'admin'
  });
});

// --- API ENDPOINTS ---

// Submit Contact Form
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'Vui lòng điền đầy đủ các trường.' });
  }

  const db = readDB();
  
  const newContact = {
    id: 'msg_' + Date.now(),
    name,
    email,
    phone,
    message,
    date: new Date().toISOString()
  };

  db.contacts.push(newContact);
  writeDB(db);

  res.status(200).json({ success: true, message: 'Gửi liên hệ thành công!' });
});

// Delete Contact Message
app.delete('/api/contact/:id', (req, res) => {
  const messageId = req.params.id;
  const db = readDB();
  
  const index = db.contacts.findIndex(c => c.id === messageId);
  if (index === -1) {
    return res.status(404).json({ error: 'Không tìm thấy tin nhắn liên hệ này.' });
  }

  db.contacts.splice(index, 1);
  writeDB(db);

  res.status(200).json({ success: true, message: 'Xóa tin nhắn thành công!' });
});

// --- START SERVER ---
app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 METIK Backend Server is running successfully!`);
  console.log(`🌐 Website URL:   http://localhost:${PORT}`);
  console.log(`📊 Admin Portal:  http://localhost:${PORT}/admin`);
  console.log(`======================================================\n`);
});
