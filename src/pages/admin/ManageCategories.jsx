import { useState } from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import { mockCategories } from '../../mockData';
import toast from 'react-hot-toast';

export default function ManageCategories() {
  const [categories, setCategories] = useState(mockCategories || []);
  const [search, setSearch] = useState('');

  const filtered = categories.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1>Manage Categories</h1>
          <p>Organize your products by category.</p>
        </div>
        <button className="btn btn-primary" onClick={() => toast('Modal to Add Category', { icon: '🚧' })}>
          <Plus size={18} /> Add Category
        </button>
      </div>

      <div className="card" style={{ padding: 24 }}>
        <div style={{ marginBottom: 24, position: 'relative', width: 300 }}>
          <Search size={18} style={{ position: 'absolute', top: 10, left: 14, color: 'var(--text-dim)' }} />
          <input type="text" className="input" placeholder="Search categories..." value={search} onChange={e => setSearch(e.target.value)} style={{ paddingLeft: 42 }} />
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Category Name</th>
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id || c._id}>
                  <td style={{ fontWeight: 600 }}>{c.name}</td>
                  <td><span className="badge badge-success">Active</span></td>
                  <td style={{ textAlign: 'right' }}>
                    <button className="btn-icon" onClick={() => toast('Edit Category', { icon: '🚧' })} style={{ color: 'var(--info)', background: 'rgba(56,189,248,0.1)', marginRight: 8 }}><Edit size={16} /></button>
                    <button className="btn-icon" onClick={() => toast('Delete Category', { icon: '🚧' })} style={{ color: 'var(--error)', background: 'rgba(255,77,109,0.1)' }}><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
