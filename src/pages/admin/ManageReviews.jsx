import { useState } from 'react';
import { Star, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ManageReviews() {
  const [reviews] = useState([
    { id: 1, user: 'John Doe', product: 'Wireless Headphones', rating: 5, comment: 'Excellent quality! Highly recommend.', date: '2026-07-01' },
    { id: 2, user: 'Jane Smith', product: 'Mechanical Keyboard', rating: 2, comment: 'Switches are too loud and cheap feeling.', date: '2026-06-25' }
  ]);

  return (
    <div>
      <div className="page-header">
        <h1>Manage Reviews</h1>
        <p>Moderate user product reviews.</p>
      </div>

      <div className="grid-2">
        {reviews.map(r => (
          <div key={r.id} className="card" style={{ padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
              <div>
                <h4 style={{ marginBottom: 4 }}>{r.user}</h4>
                <div style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>on <strong>{r.product}</strong></div>
              </div>
              <button className="btn-icon" onClick={() => toast('Review Deleted', { icon: '🗑️' })} style={{ color: 'var(--error)' }}><Trash2 size={16} /></button>
            </div>
            <div style={{ display: 'flex', gap: 4, color: 'var(--warning)', marginBottom: 12 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={i < r.rating ? 'currentColor' : 'none'} color={i < r.rating ? 'currentColor' : 'var(--text-dim)'} />
              ))}
            </div>
            <p style={{ color: 'var(--text-muted)' }}>"{r.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
