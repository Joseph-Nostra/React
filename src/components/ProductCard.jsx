import { Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductCard({ item }) {
  const { addItem } = useCart();
  const { addItem: addToWish, removeItem, isInWishlist } = useWishlist();
  
  const inWish = isInWishlist(item._id);

  const toggleWishlist = (e) => {
    e.preventDefault();
    if (inWish) removeItem(item._id);
    else addToWish(item);
  };

  return (
    <Link to={`/product/${item._id}`} className="product-card">
      <div className="img-wrap">
        <img src={item.image || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80'} alt={item.name} loading="lazy" />
        {item.discount > 0 && <span className="badge-sale">-{item.discount}%</span>}
        <button className={`wishlist-btn ${inWish ? 'active' : ''}`} onClick={toggleWishlist}>
          <Heart size={18} fill={inWish ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="card-body">
        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: 4 }}>{item.category?.name || 'Category'}</div>
        <h3 style={{ fontSize: '1.1rem', marginBottom: 8, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</h3>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <span className="price">${item.price}</span>
          {item.oldPrice && <span className="old-price">${item.oldPrice}</span>}
        </div>
        
        <button 
          className="btn btn-outline" 
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={(e) => { e.preventDefault(); addItem(item); }}
        >
          <ShoppingCart size={16} /> Add to Cart
        </button>
      </div>
    </Link>
  );
}
