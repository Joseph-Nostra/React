import { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('wishlist') || '[]'); } catch { return []; }
  });

  useEffect(() => { localStorage.setItem('wishlist', JSON.stringify(items)); }, [items]);

  const addItem = (product) => {
    if (items.find(i => i._id === product._id)) {
      toast('Already in wishlist', { icon: '❤️' });
      return;
    }
    setItems(prev => [...prev, product]);
    toast.success('Added to wishlist!');
  };

  const removeItem = (id) => setItems(prev => prev.filter(i => i._id !== id));

  const isInWishlist = (id) => items.some(i => i._id === id);

  return (
    <WishlistContext.Provider value={{ items, addItem, removeItem, isInWishlist, count: items.length }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);
