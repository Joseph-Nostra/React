import { Link } from 'react-router-dom';
import { Star, Truck, Shield, Clock, Award, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { mockProducts, mockCategories } from '../mockData';

export default function Landing() {
  const featuredProducts = mockProducts.slice(0, 4);
  const saleProducts = mockProducts.filter(p => p.discount > 0);

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="container" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 48 }}>
          <div className="hero-text fade-in">
            <h1>Discover Premium Tech & Gear.</h1>
            <p>Upgrade your lifestyle with our curated collection of top-tier electronics, wearables, and accessories. Fast shipping and guaranteed quality.</p>
            <div style={{ display: 'flex', gap: 16 }}>
              <Link to="/products" className="btn btn-primary btn-lg">Shop Now <ArrowRight size={18} /></Link>
              <Link to="/categories" className="btn btn-outline btn-lg">Explore Categories</Link>
            </div>
          </div>
          <div className="hero-image slide-left">
            <div className="hero-img-wrap">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80" alt="Hero" style={{ width: 340, height: 340, objectFit: 'cover', borderRadius: '50%', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. POPULAR CATEGORIES */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
            <div>
              <h2 className="section-title">Shop by Category</h2>
              <p className="section-sub" style={{ marginBottom: 0 }}>Find exactly what you need quickly.</p>
            </div>
            <Link to="/categories" style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>All Categories <ArrowRight size={16} /></Link>
          </div>
          <div className="grid-4">
            {mockCategories.map((cat, i) => (
              <Link to={`/products?category=${cat._id}`} key={cat._id} className="card fade-up" style={{ animationDelay: `${i * 100}ms`, overflow: 'hidden', display: 'block', position: 'relative', height: 200 }}>
                <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6, transition: 'var(--transition)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,15,26,0.9), transparent)', display: 'flex', alignItems: 'flex-end', padding: 24 }}>
                  <h3 style={{ fontSize: '1.4rem' }}>{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. POPULAR PRODUCTS */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
            <div>
              <h2 className="section-title">Trending Products</h2>
              <p className="section-sub" style={{ marginBottom: 0 }}>Our most popular items this week.</p>
            </div>
            <Link to="/products" style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>View All <ArrowRight size={16} /></Link>
          </div>
          <div className="grid-4">
            {featuredProducts.map(p => <ProductCard key={p._id} item={p} />)}
          </div>
        </div>
      </section>

      {/* 4. PROMOTIONS / SALE */}
      {saleProducts.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="section-title">Special Offers & Promotions <span style={{ color: 'var(--secondary)' }}>%</span></h2>
            <p className="section-sub">Don't miss these limited-time deals.</p>
            <div className="grid-4">
              {saleProducts.map(p => <ProductCard key={`sale-${p._id}`} item={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* 5. WHY CHOOSE US */}
      <section className="section" style={{ background: 'var(--bg3)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Why Choose E-Shop?</h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>We deliver an unmatched premium shopping experience.</p>
          <div className="grid-4" style={{ marginTop: 60 }}>
            <div className="card" style={{ padding: 32, textAlign: 'center' }}>
              <Truck size={40} color="var(--primary)" style={{ margin: '0 auto 20px' }} />
              <h3 style={{ marginBottom: 12 }}>Fast & Free Delivery</h3>
              <p style={{ color: 'var(--text-muted)' }}>Free shipping on all orders over $100. Delivered in 48 hours or less.</p>
            </div>
            <div className="card" style={{ padding: 32, textAlign: 'center' }}>
              <Shield size={40} color="var(--success)" style={{ margin: '0 auto 20px' }} />
              <h3 style={{ marginBottom: 12 }}>Secure Payment</h3>
              <p style={{ color: 'var(--text-muted)' }}>Your transactions are 100% encrypted and safe with us.</p>
            </div>
            <div className="card" style={{ padding: 32, textAlign: 'center' }}>
              <Award size={40} color="var(--warning)" style={{ margin: '0 auto 20px' }} />
              <h3 style={{ marginBottom: 12 }}>Premium Quality</h3>
              <p style={{ color: 'var(--text-muted)' }}>We source only the best products from top global brands.</p>
            </div>
            <div className="card" style={{ padding: 32, textAlign: 'center' }}>
              <Clock size={40} color="var(--info)" style={{ margin: '0 auto 20px' }} />
              <h3 style={{ marginBottom: 12 }}>24/7 Support</h3>
              <p style={{ color: 'var(--text-muted)' }}>Our customer support team is available round the clock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-sub">Trusted by thousands of happy shoppers.</p>
          <div className="grid-3">
            {[1,2,3].map(i => (
              <div key={i} className="card" style={{ padding: 32 }}>
                <div style={{ display: 'flex', gap: 4, color: 'var(--warning)', marginBottom: 16 }}>
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p style={{ fontSize: '1.05rem', fontStyle: 'italic', marginBottom: 24, color: 'var(--text-dim)' }}>
                  "Absolutely love this store! The quality of exactly what I purchased was beyond my expectations and the delivery was blazing fast."
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>JD</div>
                  <div>
                    <div style={{ fontWeight: 700 }}>John Doe</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Verified Buyer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
