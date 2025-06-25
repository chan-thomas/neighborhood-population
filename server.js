const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const zipRoutes = require('./routes/zipRoutes');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api', zipRoutes);
const db_uri = process.env.MONGO_URI || 'mongodb://localhost:27017/test';
// Connect MongoDB and start server
mongoose.connect(db_uri)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch(err => console.error("DB connection error:", err));
