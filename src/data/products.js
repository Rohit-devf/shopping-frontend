
const imageSets = {
  Electronics: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500"
  ],
  Fashion: [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500"
  ],
  Footwear: [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500"
  ],
  Accessories: [
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
  ],
  Home: [
    "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=500",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500",
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500"
  ],
  Beauty: [
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500",
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500",
    "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500"
  ],
  Fitness: [
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500"
  ]
};

const productData = [
  [1, "Wireless Headphones", "Electronics", 1999],
  [2, "Smart Watch", "Electronics", 2499],
  [3, "Bluetooth Speaker", "Electronics", 1499],
  [4, "Gaming Mouse", "Electronics", 799],
  [5, "Mechanical Keyboard", "Electronics", 2999],
  [6, "Wireless Earbuds", "Electronics", 1799],
  [7, "Power Bank", "Electronics", 999],
  [8, "USB-C Charger", "Electronics", 599],
  [9, "Laptop Stand", "Electronics", 899],
  [10, "Webcam", "Electronics", 1299],

  [11, "Men's T-Shirt", "Fashion", 499],
  [12, "Men's Jeans", "Fashion", 1199],
  [13, "Casual Shirt", "Fashion", 899],
  [14, "Hoodie", "Fashion", 1299],
  [15, "Men's Jacket", "Fashion", 1999],
  [16, "Women's Top", "Fashion", 699],
  [17, "Women's Kurti", "Fashion", 999],
  [18, "Women's Jeans", "Fashion", 1199],
  [19, "Summer Dress", "Fashion", 1499],
  [20, "Winter Sweater", "Fashion", 1599],

  [21, "Running Shoes", "Footwear", 1999],
  [22, "Casual Sneakers", "Footwear", 2499],
  [23, "Sports Shoes", "Footwear", 1799],
  [24, "Formal Shoes", "Footwear", 2299],
  [25, "Men's Sandals", "Footwear", 799],
  [26, "Women's Heels", "Footwear", 1499],
  [27, "Women's Flats", "Footwear", 899],
  [28, "Flip Flops", "Footwear", 399],
  [29, "Canvas Shoes", "Footwear", 1299],
  [30, "Leather Boots", "Footwear", 2999],

  [31, "Travel Backpack", "Accessories", 1299],
  [32, "Leather Wallet", "Accessories", 699],
  [33, "Sunglasses", "Accessories", 999],
  [34, "Analog Watch", "Accessories", 1799],
  [35, "Leather Belt", "Accessories", 599],
  [36, "Handbag", "Accessories", 1599],
  [37, "Travel Bag", "Accessories", 1999],
  [38, "Cap", "Accessories", 399],
  [39, "Laptop Bag", "Accessories", 1499],
  [40, "Wrist Band", "Accessories", 299],

  [41, "Coffee Maker", "Home", 2499],
  [42, "Electric Kettle", "Home", 1199],
  [43, "Table Lamp", "Home", 899],
  [44, "Wall Clock", "Home", 699],
  [45, "Bedsheet Set", "Home", 1299],
  [46, "Cushion Set", "Home", 599],
  [47, "Water Bottle", "Home", 499],
  [48, "Dinner Set", "Home", 1999],
  [49, "Storage Organizer", "Home", 799],
  [50, "Decorative Vase", "Home", 999],

  [51, "Face Wash", "Beauty", 299],
  [52, "Moisturizer", "Beauty", 499],
  [53, "Sunscreen", "Beauty", 399],
  [54, "Shampoo", "Beauty", 349],
  [55, "Hair Conditioner", "Beauty", 299],
  [56, "Perfume", "Beauty", 999],
  [57, "Lipstick", "Beauty", 499],
  [58, "Makeup Kit", "Beauty", 1499],
  [59, "Hair Dryer", "Beauty", 1299],
  [60, "Beard Trimmer", "Beauty", 1599],

  [61, "Yoga Mat", "Fitness", 699],
  [62, "Dumbbell Set", "Fitness", 1499],
  [63, "Skipping Rope", "Fitness", 299],
  [64, "Resistance Bands", "Fitness", 499],
  [65, "Gym Gloves", "Fitness", 399],
  [66, "Fitness Tracker", "Fitness", 1999],
  [67, "Sports Bottle", "Fitness", 399],
  [68, "Exercise Ball", "Fitness", 899],
  [69, "Pull Up Bar", "Fitness", 1299],
  [70, "Gym Bag", "Fitness", 999],

  [71, "Wireless Mouse", "Electronics", 699],
  [72, "HD Monitor", "Electronics", 8999],
  [73, "Smartphone Stand", "Electronics", 299],
  [74, "Portable SSD", "Electronics", 3999],
  [75, "Ring Light", "Electronics", 999],
  [76, "Gaming Headset", "Electronics", 2199],
  [77, "Tablet Cover", "Electronics", 599],
  [78, "HDMI Cable", "Electronics", 249],
  [79, "Phone Case", "Electronics", 399],
  [80, "Smart LED Bulb", "Electronics", 499],

  [81, "Denim Jacket", "Fashion", 1899],
  [82, "Printed T-Shirt", "Fashion", 599],
  [83, "Cargo Pants", "Fashion", 1399],
  [84, "Formal Trousers", "Fashion", 1199],
  [85, "Ethnic Wear", "Fashion", 1799],
  [86, "Sports Shorts", "Fashion", 499],
  [87, "Winter Coat", "Fashion", 2499],
  [88, "Casual Blazer", "Fashion", 2299],
  [89, "Cotton Saree", "Fashion", 1599],
  [90, "Party Wear Dress", "Fashion", 2199],

  [91, "Wireless Printer", "Electronics", 5999],
  [92, "Air Fryer", "Home", 3499],
  [93, "Electric Iron", "Home", 999],
  [94, "Vacuum Cleaner", "Home", 4999],
  [95, "Blender", "Home", 1799],
  [96, "Digital Camera", "Electronics", 12999],
  [97, "Tripod Stand", "Electronics", 899],
  [98, "Neckband Earphones", "Electronics", 1199],
  [99, "Portable Fan", "Home", 699],
  [100, "Mini Projector", "Electronics", 7999]
];

const products = productData.map(([id, name, category, price], index) => {
  const discount = 10 + (index % 4) * 5;

  return {
    id,
    name,
    category,
    price,
    originalPrice: Math.round(price / (1 - discount / 100)),
    discount,
    image: imageSets[category][index % imageSets[category].length],
    rating: Number((4.1 + (index % 9) * 0.1).toFixed(1)),
    reviews: 20 + (index * 17) % 480,
    description: `Discover our ${name}. A great choice in our ${category} collection, with quality and style at an affordable price.`,
    badge: index % 5 === 0 ? "Best Seller" : index % 3 === 0 ? "Popular" : "New"
  };
});

export default products;
