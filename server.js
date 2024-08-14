const express = require('express');
const colors = require('colors');
const morgan = require("morgan");
const cors = require("cors");
const path = require('path');

// Hardcoded Environment Variables
const PORT = 8080;
const MONGODB_URI = 'mongodb+srv://AbishekM:Abishek123@cluster0.5m9yy.mongodb.net/Blood-Group';
const DEV_MODE = 'development';

// MongoDB connection
const connectDB = require("./config/db");
connectDB(MONGODB_URI);

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes
// Use for localhost (uncomment if needed)
// app.use('/api/v1/test', require('./routes/testRoutes'));
// app.use('/api/v1/auth', require('./routes/authRoutes'));
// app.use('/api/v1/inventory', require('./routes/inventoryRoutes'));
// app.use('/api/v1/analytics', require('./routes/analyticsRoutes'));
// app.use('/api/v1/admin', require('./routes/adminRoutes'));

// Used for render cloud
app.use('/test', require('./routes/testRoutes'));
app.use('/auth', require('./routes/authRoutes'));
app.use('/inventory', require('./routes/inventoryRoutes'));
app.use('/analytics', require('./routes/analyticsRoutes'));
app.use('/admin', require('./routes/adminRoutes'));

// Static Folder (if using React or other frontend framework)
// app.use(express.static(path.join(__dirname, './client/build')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './client/build/index.html'));
// });

// Start server
app.listen(PORT, () => {
    console.log(`Blood Bank Server is Running in ${DEV_MODE} Mode on PORT ${PORT}.`.bgYellow.black);
});
