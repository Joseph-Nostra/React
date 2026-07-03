import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

export default function Wishlist() {
  const { items, removeItem } = useWishlist();
  const { addItem } = useCart();

  const moveToCart = (item) => {
    addItem(item);
    removeItem(item._id);
  };

  if (items.length === 0) {
    return (
      <div className="section container fade-in" style={{ textAlign: 'center', padding: '100px 20px' }}>
        <div style={{ display: 'inline-flex', padding: 24, borderRadius: '50%', background: 'var(--bg2)', marginBottom: 24 }}>
          <Heart size={48} color="var(--text-dim)" />
        </div>
        <h2>Your wishlist is empty</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 32 }}>Save items you love and buy them later.</p>
        <Link to="/products" className="btn btn-primary btn-lg">Explore Products</Link>
      </div>
    );
  }

  return (
    <div className="section container fade-in">
      <div className="page-header">
        <h1>My Wishlist</h1>
        <p>Your saved favorite items ({items.length}).</p>
      </div>

      <div className="table-wrap" style={{ background: 'var(--bg2)', padding: 24 }}>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item._id}>
                <td style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <Link to={`/product/${item._id}`}>
                    <img src={item.image} alt={item.name} style={{ width: 64, height: 64, borderRadius: 8, objectFit: 'cover' }} />
                  </Link>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: 4 }}>{item.name}</div>
                    <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>{item.category?.name || 'Category'}</div>
                  </div>
                </td>
                <td style={{ fontWeight: 600 }}>${item.price.toFixed(2)}</td>
                <td>
                  <span className={`badge ${item.stock > 0 ? 'badge-success' : 'badge-error'}`}>
                    {item.stock > 0 ? 'In Stock' : 'Out of Stock'}
                  </span>
                </td>
                <td style={{ textAlign: 'right' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
                    <button className="btn btn-primary btn-sm" onClick={() => moveToCart(item)} disabled={item.stock === 0}>
                      <ShoppingCart size={16} /> Move to Cart
                    </button>
                    <button className="btn-icon" style={{ color: 'var(--error)', background: 'rgba(255,77,109,0.1)' }} onClick={() => removeItem(item._id)} title="Remove">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div style={{ textAlign: 'right', marginTop: 24 }}>
        <Link to="/products" style={{ color: 'var(--primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          Continue Shopping <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
