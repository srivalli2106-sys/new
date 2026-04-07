# 🌆 Digital Twin City Dashboard – Backend

## 📌 Project Description

The **Digital Twin City Dashboard Backend** is a Node.js and Express.js based web application that provides smart city information using external APIs and a database.

Users can enter a city name and view the essential data such as:

* 🌡 Weather details
* 🌫 Air Quality Index (AQI)
* 🚦 Traffic information
* 🏛 City history and description
* 📰 Latest city news
* 🚨 Emergency alerts
* 📊 Analytics data for charts
* 🗺 Map location coordinates
* 🧾 Citizen complaints system
* 📧 Complaint confirmation email
* 💳 Premium report payment simulation
* 🔐 Secure login and registration

This project is developed as part of a **Web Technology Digital Assignment**.

---

# 🧠 Technologies Used

Backend:

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* bcrypt (password hashing)
* Axios (API requests)
* Nodemailer (email sending)
* dotenv

External APIs:

* OpenWeather API
* WAQI API
* NewsAPI
* Wikipedia API
* Map coordinates API

---

# 🏗 Project Folder Structure

```
project-backend
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   ├── weatherController.js
│   ├── aqiController.js
│   ├── trafficController.js
│   ├── cityController.js
│   ├── newsController.js
│   ├── complaintController.js
│   ├── analyticsController.js
│   ├── alertController.js
│   └── paymentController.js
│
├── middleware
│   └── authMiddleware.js
│
├── models
│   ├── userModel.js
│   └── complaintModel.js
│
├── routes
│   ├── authRoutes.js
│   ├── weatherRoutes.js
│   ├── aqiRoutes.js
│   ├── trafficRoutes.js
│   ├── cityRoutes.js
│   ├── newsRoutes.js
│   ├── complaintRoutes.js
│   ├── analyticsRoutes.js
│   ├── alertRoutes.js
│   └── paymentRoutes.js
│
├── services
│   └── emailService.js
│
├── utils
│   └── analyticsHelper.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

# ⚙️ Installation Steps

### Step 1: Install dependencies

```
npm install
```

### Step 2: Create `.env` file

Example:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=secretkey

WEATHER_API_KEY=your_key
AQI_API_KEY=your_key
NEWS_API_KEY=your_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

### Step 3: Run server

Development mode:

```
npm run dev
```

Production mode:

```
npm start
```

Server runs at:

```
http://localhost:5000
```

---

# 🔐 Authentication Module

### Signup

```
POST /api/auth/signup
```

Registers new user.

### Login

```
POST /api/auth/login
```

Returns JWT token for authentication.

---

# 🌦 Weather Module

```
GET /api/weather?city=Delhi
```

Returns:

* temperature
* humidity
* wind speed
* weather condition

---

# 🌫 Air Quality Module

```
GET /api/aqi?city=Delhi
```

Returns:

* AQI level
* pollution status
* PM2.5
* PM10

---

# 🚦 Traffic Monitoring Module

```
GET /api/traffic?city=Delhi
```

Returns simulated congestion data for dashboard visualization.

---

# 🏛 City Information Module

```
GET /api/city?city=Delhi
```

Returns:

* city description
* population
* timezone
* country
* history summary

Data fetched using Wikipedia API.

---

# 📰 News Module

```
GET /api/news?city=Delhi
```

Returns latest city-related news headlines.

---

# 🚨 Emergency Alerts Module

```
GET /api/alerts?city=Delhi
```

Returns safety alerts using sample dataset.

---

# 🧾 Citizen Complaint Module

Submit complaint:

```
POST /api/complaints
```

View complaints:

```
GET /api/complaints
```

Complaints stored in MongoDB database.

---

# 📧 Email Notification Module

After complaint submission:

* confirmation email sent to user
* implemented using Nodemailer

---

# 📊 Analytics Dashboard Module

```
GET /api/analytics?city=Delhi
```

Returns structured data for charts:

* temperature trends
* AQI comparison
* pollution statistics
* complaint analytics

---

# 🗺 Map Location Module

```
GET /api/location?city=Delhi
```

Returns latitude and longitude for map visualization.

---

# 💳 Payment Simulation Module

```
POST /api/payment
```

Simulates payment for downloading premium city report.

Used for academic demonstration.

---

# 🗄 Database Collections

MongoDB stores:

* Users
* Complaints

---

# 🎯 Project Modules Summary

The backend contains the following application modules:

* Weather monitoring module
* AQI monitoring module
* Traffic monitoring module
* City information module
* News module
* Emergency alerts module
* Complaint management module
* Email notification module
* Analytics dashboard module
* Map integration module
* Payment simulation module

---

# 🌐 Hosting Recommendation

Backend can be deployed using:

* Render
* Railway
* Cyclic

Database:

* MongoDB Atlas

Frontend:

* Vercel

---

# 👨‍💻 Project Purpose

This backend simulates a **Digital Twin City Dashboard** that integrates multiple smart city services into a single platform to provide best insights about a city for a user.

It demonstrates the use of modern web technologies like Node.js, Express.js, MongoDB, APIs, authentication, analytics, email service, and payment simulation for a Web Technology Digital Assignment project.
