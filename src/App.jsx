import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import MainLayout from './components/MainLayout';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Invoice from './pages/Invoice';
import Wishlist from './pages/Wishlist';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import AdminLayout from './components/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import ManageProducts from './pages/admin/ManageProducts';
import ManageCategories from './pages/admin/ManageCategories';
import ManageBrands from './pages/admin/ManageBrands';
import ManageOrders from './pages/admin/ManageOrders';
import ManageUsers from './pages/admin/ManageUsers';
import ManagePayments from './pages/admin/ManagePayments';
import ManageReviews from './pages/admin/ManageReviews';
import ManageCoupons from './pages/admin/ManageCoupons';
import AdminSettings from './pages/admin/AdminSettings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "reset-password", element: <ResetPassword /> },
      { path: "products", element: <Products /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "invoice/:id", element: <Invoice /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "profile", element: <Profile /> },
      { path: "contact", element: <Contact /> }
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "products", element: <ManageProducts /> },
      { path: "categories", element: <ManageCategories /> },
      { path: "brands", element: <ManageBrands /> },
      { path: "orders", element: <ManageOrders /> },
      { path: "users", element: <ManageUsers /> },
      { path: "payments", element: <ManagePayments /> },
      { path: "reviews", element: <ManageReviews /> },
      { path: "coupons", element: <ManageCoupons /> },
      { path: "settings", element: <AdminSettings /> }
    ]
  }
]);

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Toaster position="top-right" toastOptions={{ className: 'toast', success: { className: 'toast-success' }, error: { className: 'toast-error' } }} />
          <RouterProvider router={router} />
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
