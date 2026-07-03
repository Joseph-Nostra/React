import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockProducts } from '../mockData';
import { Star, Heart, ShoppingCart, Check, Shield, Truck, RotateCcw } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = mockProducts.find(p => p._id === id);
  const similarProducts = mockProducts.filter(p => p.category?.name === product?.category?.name && p._id !== id).slice(0, 4);

  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  const { addItem: addWish, removeItem: removeWish, isInWishlist } = useWishlist();

  if (!product) return <div className="section container" style={{ textAlign: 'center' }}><h2>Product not found</h2></div>;

  const inWish = isInWishlist(product._id);
  const toggleWishlist = () => inWish ? removeWish(product._id) : addWish(product);

  return (
    <div className="section container fade-in">
      <div style={{ padding: '8px 0 24px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        <Link to="/" style={{ color: 'var(--text-dim)' }}>Home</Link> / <Link to={`/products?category=${product.category._id}`} style={{ color: 'var(--text-dim)' }}>{product.category?.name || 'Category'}</Link> / <span style={{ color: 'var(--text)' }}>{product.name}</span>
      </div>

      <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', marginBottom: 60 }}>
        {/* Left Gallery */}
        <div style={{ flex: '1 1 400px' }}>
          <div style={{ background: 'var(--bg2)', borderRadius: 'var(--card-radius)', overflow: 'hidden', border: '1px solid var(--glass-border)', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            {product.discount > 0 && <span className="badge-sale" style={{ position: 'absolute', top: 20, left: 20, background: 'linear-gradient(135deg,var(--secondary),#c1121f)', color: '#fff', padding: '6px 16px', borderRadius: 99, fontWeight: 700 }}>-{product.discount}% OFF</span>}
          </div>
          {/* Gallery thumbnails could go here */}
        </div>

        {/* Right Info */}
        <div style={{ flex: '1 1 400px' }}>
          <div style={{ color: 'var(--text-muted)', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>{product.category?.name}</div>
          <h1 style={{ fontSize: '2.4rem', marginBottom: 16 }}>{product.name}</h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
            <div className="stars">
              {[1,2,3,4,5].map(i => <Star key={i} size={18} fill={i <= Math.round(product.rating) ? 'currentColor' : 'none'} color={i <= Math.round(product.rating) ? 'currentColor' : 'var(--text-dim)'} />)}
            </div>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{product.rating} ({product.reviews} reviews)</span>
            <span style={{ color: 'var(--text-dim)' }}>|</span>
            {product.stock > 0 ? (
              <span style={{ color: 'var(--success)', display: 'inline-flex', alignItems: 'center', gap: 4, fontWeight: 600, fontSize: '0.9rem' }}><Check size={16} /> In Stock ({product.stock})</span>
            ) : (
              <span style={{ color: 'var(--error)', fontWeight: 600, fontSize: '0.9rem' }}>Out of Stock</span>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32 }}>
            <span style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary-light)' }}>${product.price}</span>
            {product.oldPrice && <span style={{ fontSize: '1.2rem', color: 'var(--text-dim)', textDecoration: 'line-through' }}>${product.oldPrice}</span>}
            <span style={{ marginLeft: 'auto', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Tax included</span>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 32 }}>
            Premium build quality combined with cutting-edge technology. This product guarantees an excellent experience for your daily needs. Designed to last and perform under any condition.
          </p>

          <div style={{ display: 'flex', gap: 16, marginBottom: 40, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg3)', borderRadius: 10, border: '1px solid var(--glass-border)' }}>
              <button style={{ background: 'none', border: 'none', color: 'var(--text)', padding: '0 16px', fontSize: '1.5rem', cursor: 'pointer' }} onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
              <div style={{ width: 40, textAlign: 'center', fontWeight: 'bold' }}>{qty}</div>
              <button style={{ background: 'none', border: 'none', color: 'var(--text)', padding: '0 16px', fontSize: '1.2rem', cursor: 'pointer' }} onClick={() => setQty(Math.min(product.stock, qty + 1))}>+</button>
            </div>
            
            <button className="btn btn-primary btn-lg" style={{ flex: 1 }} onClick={() => addItem(product, qty)} disabled={product.stock === 0}>
              <ShoppingCart size={20} /> Add to Cart
            </button>
            
            <button className={`btn-icon ${inWish ? 'active' : ''}`} style={{ width: 52, height: 52, background: 'var(--bg3)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: inWish ? 'var(--secondary)' : 'var(--text-muted)', transition: 'var(--transition)' }} onClick={toggleWishlist}>
              <Heart size={24} fill={inWish ? 'currentColor' : 'none'} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 24, background: 'var(--bg2)', borderRadius: 'var(--card-radius)', border: '1px solid var(--glass-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-muted)', fontSize: '0.95rem' }}><Truck size={20} color="var(--primary)" /> Free shipping worldwide on orders above $100</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-muted)', fontSize: '0.95rem' }}><RotateCcw size={20} color="var(--primary)" /> 30 days return or refund guarantee</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-muted)', fontSize: '0.95rem' }}><Shield size={20} color="var(--primary)" /> 2 years full warranty coverage</div>
          </div>
        </div>
      </div>

      {similarProducts.length > 0 && (
        <div style={{ marginTop: 80, borderTop: '1px solid var(--glass-border)', paddingTop: 60 }}>
          <h2 className="section-title">Similar Products</h2>
          <div className="grid-4" style={{ marginTop: 32 }}>
            {similarProducts.map(p => <ProductCard key={p._id} item={p} />)}
          </div>
        </div>
      )}
    </div>
  );
}
