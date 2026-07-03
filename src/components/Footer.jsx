export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg2)', padding: '60px 24px', marginTop: '60px', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container grid-4">
        <div>
          <h2 className="navbar-brand" style={{ marginBottom: 20 }}>
            <span className="gradient-text">E-Shop</span>
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>The best place to buy premium products with fast delivery.</p>
        </div>
        <div>
          <h4 style={{ marginBottom: 20 }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDir: 'column', gap: 10, color: 'var(--text-muted)' }}>
            <li>Home</li>
            <li>Products</li>
            <li>Categories</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginBottom: 20 }}>Support</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDir: 'column', gap: 10, color: 'var(--text-muted)' }}>
            <li>FAQ</li>
            <li>Shipping Info</li>
            <li>Returns</li>
            <li>Store Policy</li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginBottom: 20 }}>Newsletter</h4>
          <p style={{ color: 'var(--text-muted)', marginBottom: 16 }}>Subscribe for future updates & discounts.</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <input type="email" className="input" placeholder="Email address" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container" style={{ textAlign: 'center', marginTop: 40, color: 'var(--text-dim)', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} E-Shop Platform. All rights reserved.
      </div>
    </footer>
  );
}
