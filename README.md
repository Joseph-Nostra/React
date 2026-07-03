# E-Commerce Platform

A premium full-stack e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js) featuring modern UI/UX design, real-time Pusher notifications, and an Admin dashboard.

## Features

**Client Space**
- Premium Landing Page with promotions and testimonials
- User Authentication (Login, Register, Forgot/Reset Password)
- Products Catalog with filtering, search, and sorting
- Product Details with gallery and stock management
- Shopping Cart & Checkout with fake payment simulation
- Wishlist with ability to move items to cart
- User Profile with comprehensive order history
- Downloadable/Printable Invoices

**Admin Dashboard**
- Advanced KPI statistics and Chart.js visualizations
- Complete CRUD interface for Manage Products, Categories, Users, etc.
- Order management

## Tech Stack
- **Frontend**: React (Vite), React Router Dom, Context API, Lucide Icons, Chart.js, Vanilla CSS Design System
- **Backend / Realtime**: Node.js, Express, MongoDB (Mongoose), Pusher (for real-time order status updates)

## Installation

### Frontend & UI Mock mode
```bash
npm install
npm run dev
```

### Backend API
If you have MongoDB and Pusher configured:
```bash
cd server
npm install
npm start
```
*Note: Make sure to create `.env` in the `server` folder with your `MONGODB_URI` and Pusher credentials.*
