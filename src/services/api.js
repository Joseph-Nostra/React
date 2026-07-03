import axios from 'axios';

const API = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api' });

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;

// ── AUTH ──────────────────────────────────────────
export const login = (data) => API.post('/auth/login', data);
export const register = (data) => API.post('/auth/register', data);
export const forgotPassword = (data) => API.post('/auth/forgot-password', data);
export const resetPassword = (data) => API.post('/auth/reset-password', data);
export const getProfile = () => API.get('/auth/me');
export const updateProfile = (data) => API.put('/auth/profile', data);
export const changePassword = (data) => API.put('/auth/change-password', data);

// ── PRODUCTS ──────────────────────────────────────
export const getProducts = (params) => API.get('/products', { params });
export const getProduct = (id) => API.get(`/products/${id}`);
export const createProduct = (data) => API.post('/products', data);
export const updateProduct = (id, data) => API.put(`/products/${id}`, data);
export const deleteProduct = (id) => API.delete(`/products/${id}`);

// ── CATEGORIES ────────────────────────────────────
export const getCategories = () => API.get('/categories');
export const createCategory = (data) => API.post('/categories', data);
export const updateCategory = (id, data) => API.put(`/categories/${id}`, data);
export const deleteCategory = (id) => API.delete(`/categories/${id}`);

// ── BRANDS ────────────────────────────────────────
export const getBrands = () => API.get('/brands');
export const createBrand = (data) => API.post('/brands', data);
export const updateBrand = (id, data) => API.put(`/brands/${id}`, data);
export const deleteBrand = (id) => API.delete(`/brands/${id}`);

// ── CART ──────────────────────────────────────────
export const getCart = () => API.get('/cart');
export const addToCart = (data) => API.post('/cart', data);
export const updateCartItem = (id, data) => API.put(`/cart/${id}`, data);
export const removeCartItem = (id) => API.delete(`/cart/${id}`);
export const clearCart = () => API.delete('/cart');

// ── WISHLIST ──────────────────────────────────────
export const getWishlist = () => API.get('/wishlist');
export const addToWishlist = (data) => API.post('/wishlist', data);
export const removeFromWishlist = (id) => API.delete(`/wishlist/${id}`);

// ── ORDERS ────────────────────────────────────────
export const getOrders = () => API.get('/orders');
export const getOrder = (id) => API.get(`/orders/${id}`);
export const createOrder = (data) => API.post('/orders', data);
export const updateOrderStatus = (id, data) => API.put(`/orders/${id}/status`, data);

// ── PAYMENTS ──────────────────────────────────────
export const getPayments = () => API.get('/payments');
export const createPayment = (data) => API.post('/payments', data);

// ── REVIEWS ───────────────────────────────────────
export const getReviews = (productId) => API.get(`/reviews/${productId}`);
export const createReview = (data) => API.post('/reviews', data);
export const updateReview = (id, data) => API.put(`/reviews/${id}`, data);
export const deleteReview = (id) => API.delete(`/reviews/${id}`);

// ── COUPONS ───────────────────────────────────────
export const getCoupons = () => API.get('/coupons');
export const validateCoupon = (code) => API.post('/coupons/validate', { code });
export const createCoupon = (data) => API.post('/coupons', data);
export const deleteCoupon = (id) => API.delete(`/coupons/${id}`);

// ── NOTIFICATIONS ─────────────────────────────────
export const getNotifications = () => API.get('/notifications');
export const markNotifRead = (id) => API.put(`/notifications/${id}/read`);

// ── ADMIN ─────────────────────────────────────────
export const getAdminStats = () => API.get('/admin/stats');
export const getAdminUsers = () => API.get('/admin/users');
export const updateUser = (id, data) => API.put(`/admin/users/${id}`, data);
export const deleteUser = (id) => API.delete(`/admin/users/${id}`);
export const getAdminOrders = () => API.get('/admin/orders');
export const getAdminPayments = () => API.get('/admin/payments');
export const getAdminReviews = () => API.get('/admin/reviews');
export const deleteAdminReview = (id) => API.delete(`/admin/reviews/${id}`);
export const getAdminSettings = () => API.get('/admin/settings');
export const updateAdminSettings = (data) => API.put('/admin/settings', data);
