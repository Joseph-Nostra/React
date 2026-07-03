import { useState } from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ManageBrands() {
  const [brands, setBrands] = useState([{ id: 1, name: 'Apple' }, { id: 2, name: 'Samsung' }, { id: 3, name: 'Sony' }]);
  const [search, setSearch] = useState('');

  const filtered = brands.filter(b => b.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1>Manage Brands</h1>
          <p>Add and edit product brands.</p>
        </div>
        <button className="btn btn-primary" onClick={() => toast('Modal to Add Brand', { icon: '🚧' })}>
          <Plus size={18} /> Add Brand
        </button>
      </div>

      <div className="card" style={{ padding: 24 }}>
        <div style={{ marginBottom: 24, position: 'relative', width: 300 }}>
          <Search size={18} style={{ position: 'absolute', top: 10, left: 14, color: 'var(--text-dim)' }} />
          <input type="text" className="input" placeholder="Search brands..." value={search} onChange={e => setSearch(e.target.value)} style={{ paddingLeft: 42 }} />
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Brand Name</th>
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(b => (
                <tr key={b.id}>
                  <td style={{ fontWeight: 600 }}>{b.name}</td>
                  <td><span className="badge badge-success">Active</span></td>
                  <td style={{ textAlign: 'right' }}>
                    <button className="btn-icon" onClick={() => toast('Edit Brand', { icon: '🚧' })} style={{ color: 'var(--info)', background: 'rgba(56,189,248,0.1)', marginRight: 8 }}><Edit size={16} /></button>
                    <button className="btn-icon" onClick={() => toast('Delete Brand', { icon: '🚧' })} style={{ color: 'var(--error)', background: 'rgba(255,77,109,0.1)' }}><Trash2 size={16} /></button>
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
