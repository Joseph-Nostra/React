import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import MainLayout from './components/MainLayout';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import Landing from './pages/Landing';

// Empty mock pages for routing
const Login = () => <div className="section container"><h1>Login Page</h1></div>;
const Products = () => <div className="section container"><h1>Products Page</h1></div>;
const ProductDetail = () => <div className="section container"><h1>Product Detail</h1></div>;
const Cart = () => <div className="section container"><h1>Cart</h1></div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "login", element: <Login /> },
      { path: "products", element: <Products /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> }
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
