import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { mockProducts, mockCategories } from '../mockData';
import { Search, Filter, X } from 'lucide-react';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const qCat = searchParams.get('category') || '';
  
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(qCat);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sort, setSort] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let p = [...mockProducts];
    if (search) p = p.filter(x => x.name.toLowerCase().includes(search.toLowerCase()));
    if (category) p = p.filter(x => x.category.name === mockCategories.find(c => c._id === category)?.name || x.category._id === category);
    if (minPrice) p = p.filter(x => x.price >= Number(minPrice));
    if (maxPrice) p = p.filter(x => x.price <= Number(maxPrice));
    
    if (sort === 'price-asc') p.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') p.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') p.sort((a, b) => b.rating - a.rating);
    // newest sort is default, assuming mockProducts are newest first
    
    return p;
  }, [search, category, minPrice, maxPrice, sort]);

  const toggleFilters = () => setShowFilters(!showFilters);

  return (
    <div className="section container fade-in">
      <div className="page-header">
        <h1>All Products</h1>
        <p>Explore our wide range of premium items.</p>
      </div>

      <div style={{ display: 'flex', gap: 16, marginBottom: 32, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 280, position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', top: 14, left: 16, color: 'var(--text-dim)' }} />
          <input 
            type="text" className="input" placeholder="Search by name..." 
            value={search} onChange={e => setSearch(e.target.value)}
            style={{ paddingLeft: 46 }}
          />
        </div>
        <select className="select" style={{ width: 'auto' }} value={sort} onChange={e => setSort(e.target.value)}>
          <option value="newest">Sort by: Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
        <button className="btn btn-secondary" onClick={toggleFilters}>
          <Filter size={18} /> Filters
        </button>
      </div>

      <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
        {/* Filters Sidebar */}
        <div className="filter-panel" style={{ display: showFilters || window.innerWidth > 900 ? 'block' : 'none', position: window.innerWidth <= 900 ? 'absolute' : 'sticky', top: 90, zIndex: 10 }}>
          {window.innerWidth <= 900 && (
            <button onClick={toggleFilters} className="btn-icon" style={{ position: 'absolute', top: 16, right: 16, background: 'var(--glass)' }}>
              <X size={16} />
            </button>
          )}
          <h3 className="filter-title">Filters</h3>
          
          <div className="filter-group">
            <div className="filter-group-label">Category</div>
            <select className="select" value={category} onChange={e => setCategory(e.target.value)}>
              <option value="">All Categories</option>
              {mockCategories.map(c => (
                <option key={c._id} value={c._id}>{c.name}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <div className="filter-group-label">Price Range</div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <input type="number" className="input" placeholder="Min" value={minPrice} onChange={e => setMinPrice(e.target.value)} style={{ padding: '8px 12px' }} />
              <span style={{ color: 'var(--text-dim)' }}>-</span>
              <input type="number" className="input" placeholder="Max" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} style={{ padding: '8px 12px' }} />
            </div>
          </div>
          
          <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }} onClick={() => { setSearch(''); setCategory(''); setMinPrice(''); setMaxPrice(''); setSort('newest'); }}>
            Reset Filters
          </button>
        </div>

        {/* Product Grid */}
        <div style={{ flex: 1 }}>
          {filteredProducts.length === 0 ? (
            <div style={{ padding: 60, textAlign: 'center', background: 'var(--bg2)', borderRadius: 'var(--card-radius)', border: '1px solid var(--glass-border)' }}>
              <h3 style={{ marginBottom: 12 }}>No products found</h3>
              <p style={{ color: 'var(--text-muted)' }}>Try adjusting your filters or search term.</p>
            </div>
          ) : (
            <div className="grid-3">
              {filteredProducts.map(p => <ProductCard key={p._id} item={p} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
