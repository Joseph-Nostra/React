export const mockProducts = [
  {
    _id: "p1",
    name: "Premium Wireless Headphones Pro",
    price: 349.99,
    oldPrice: 399.99,
    discount: 12,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80",
    category: { name: "Electronics" },
    rating: 4.8,
    reviews: 124,
    stock: 45
  },
  {
    _id: "p2",
    name: "Ultra Slim Smart Watch Series 8",
    price: 299.50,
    oldPrice: null,
    discount: 0,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80",
    category: { name: "Wearables" },
    rating: 4.5,
    reviews: 89,
    stock: 12
  },
  {
    _id: "p3",
    name: "Mechanical Gaming Keyboard RGB",
    price: 129.00,
    oldPrice: 159.00,
    discount: 19,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80",
    category: { name: "Gaming" },
    rating: 4.9,
    reviews: 312,
    stock: 8
  },
  {
    _id: "p4",
    name: "Ergonomic Office Chair Mesh",
    price: 199.99,
    oldPrice: 249.99,
    discount: 20,
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80",
    category: { name: "Furniture" },
    rating: 4.2,
    reviews: 56,
    stock: 30
  }
];

export const mockCategories = [
  { _id: "c1", name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&q=80" },
  { _id: "c2", name: "Wearables", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80" },
  { _id: "c3", name: "Gaming", image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&q=80" },
  { _id: "c4", name: "Furniture", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80" }
];
