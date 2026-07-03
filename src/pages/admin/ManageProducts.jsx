import { useState } from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import { mockProducts } from '../../mockData';
import toast from 'react-hot-toast';

export default function ManageProducts() {
  const [products, setProducts] = useState(mockProducts);
  const [search, setSearch] = useState('');
  
  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p._id !== id));
      toast.success('Product deleted successfully');
    }
  };

  return (
    <div>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1>Manage Products</h1>
          <p>Create, update or delete products.</p>
        </div>
        <button className="btn btn-primary" onClick={() => toast('Open Create Modal (WIP)', { icon: '🚧' })}>
          <Plus size={18} /> Add Product
        </button>
      </div>

      <div className="card" style={{ padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
          <div style={{ position: 'relative', width: 300 }}>
            <Search size={18} style={{ position: 'absolute', top: 10, left: 14, color: 'var(--text-dim)' }} />
            <input 
              type="text" className="input" placeholder="Search products..." 
              value={search} onChange={e => setSearch(e.target.value)}
              style={{ paddingLeft: 42, padding: '8px 12px 8px 42px' }}
            />
          </div>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Category</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p._id}>
                  <td style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <img src={p.image} alt={p.name} style={{ width: 40, height: 40, borderRadius: 6, objectFit: 'cover' }} />
                    <span style={{ fontWeight: 600 }}>{p.name}</span>
                  </td>
                  <td style={{ fontWeight: 600 }}>${p.price.toFixed(2)}</td>
                  <td>
                    <span className={`badge ${p.stock > 0 ? 'badge-success' : 'badge-error'}`}>
                      {p.stock} in stock
                    </span>
                  </td>
                  <td>{p.category?.name}</td>
                  <td style={{ textAlign: 'right' }}>
                    <button className="btn-icon" style={{ color: 'var(--info)', background: 'rgba(56,189,248,0.1)', marginRight: 8 }} onClick={() => toast('Open Edit Modal (WIP)', { icon: '🚧' })}>
                      <Edit size={16} />
                    </button>
                    <button className="btn-icon" style={{ color: 'var(--error)', background: 'rgba(255,77,109,0.1)' }} onClick={() => handleDelete(p._id)}>
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center', padding: 40, color: 'var(--text-muted)' }}>
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
