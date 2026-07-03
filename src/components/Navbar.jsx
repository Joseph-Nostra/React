import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, User, LogOut, Package, Star, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { count: cartCount } = useCart();
  const { count: wishlistCount } = useWishlist();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="gradient-text">E-Shop</span>
      </Link>
      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-icons">
        <Link to="/wishlist" className="nav-icon-btn">
          <Heart size={20} />
          {wishlistCount > 0 && <span className="nav-badge">{wishlistCount}</span>}
        </Link>
        <Link to="/cart" className="nav-icon-btn">
          <ShoppingCart size={20} />
          {cartCount > 0 && <span className="nav-badge">{cartCount}</span>}
        </Link>
        
        {user ? (
          <div style={{ position: 'relative', display: 'flex', gap: 10, alignItems: 'center', marginLeft: 10 }}>
            {user.role === 'admin' && (
              <Link to="/admin" className="btn btn-outline btn-sm">
                <ShieldCheck size={16} /> Admin
              </Link>
            )}
            <Link to="/profile" className="btn btn-secondary btn-sm">
              <User size={16} /> {user.name}
            </Link>
            <button onClick={logout} className="nav-icon-btn" style={{ width: 32, height: 32 }} title="Logout">
              <LogOut size={16} />
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: 10, marginLeft: 10 }}>
            <Link to="/login" className="btn btn-secondary btn-sm">Login</Link>
            <Link to="/register" className="btn btn-primary btn-sm">Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
