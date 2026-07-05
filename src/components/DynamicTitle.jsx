import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    let title = 'E-Shop';
    const path = location.pathname;
    
    if (path === '/') title = 'E-Shop | Home';
    else if (path.startsWith('/product/')) title = 'E-Shop | Product Detail';
    else if (path === '/products') title = 'E-Shop | Products';
    else if (path === '/cart') title = 'E-Shop | Cart';
    else if (path === '/checkout') title = 'E-Shop | Checkout';
    else if (path === '/wishlist') title = 'E-Shop | Wishlist';
    else if (path === '/profile') title = 'E-Shop | Profile';
    else if (path === '/contact') title = 'E-Shop | Contact Us';
    else if (path === '/login') title = 'E-Shop | Sign In';
    else if (path === '/register') title = 'E-Shop | Register';
    else if (path.startsWith('/admin')) {
      const adminPage = path.split('/')[2] || 'Dashboard';
      title = `Admin | ${adminPage.charAt(0).toUpperCase() + adminPage.slice(1)}`;
    }
    
    document.title = title;
  }, [location]);

  return null;
}
