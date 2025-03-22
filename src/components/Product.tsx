import React from 'react';

interface ProductItem {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: number;
  isNew?: boolean;
}

const products: ProductItem[] = [
  {
    id: 1,
    name: 'Corsair',
    category: 'Ram PC Corsair Vengeance LPX 16GB 3200MHz DDR4 CMK16GX4M1E3200C16',
    price: 500000,
    originalPrice: 690000,
    image: '/products/ic_ram_corsair.jpg',
    discount: 30
  },
  {
    id: 2,
    name: 'Akko',
    category: 'AKKO 5098B Ink Green LCD Screen RGB Hotswap (Kailh Sw)',
    price: 2150000,
    image: '/products/ic_akko_5098.jpg',
    discount: 14
  },
  {
    id: 3,
    name: 'SSD SATA',
    category: 'SSD SATA 2.5 Inch 240GB WD Blue 3D NAND SATA 6Gb/s 2.5 Inch 2.5 Inch 240GB WD Blue 3D NAND SATA 6Gb/s',
    price: 1700000,
    originalPrice: 2000000,
    image: '/products/ic_ssd_sata.jpg',
    discount: 25
  },
  {
    id: 4,
    name: 'Dell Inspiron',
    category: 'Laptop Dell Inspiron 15 3520 N3520-i5U085W11BLU (i5-1235U, Iris Xe Graphics, Ram 8GB DDR4, SSD 512GB, 15.6 Inch IPS FHD 120Hz, Win 11/Office HS 21)',
    price: 13990000,
    image: '/products/ic_dell_inspiron.jpg',
    isNew: true
  },
  {
    id: 5,
    name: 'LG OLED',
    category: 'LG OLED C1 42 Inch 4K Smart OLED evo AI (2024) OLED C1 42 Inch 4K Smart OLED evo AI (2024)',
    price: 36290000,
    originalPrice: 30000000,
    image: '/products/ic_laptop_lg.jpg',
    discount: 30
  },
  {
    id: 6,
    name: 'Case',
    category: 'Case PC Corsair 4000D Airflow RGB (Black)',
    price: 3990000,
    image: '/products/ic_case_msi.jpg',
  },
  {
    id: 7,
    name: 'Asus Expert',
    category: 'Asus ExpertBook B5 Flip B5402ZA-BX001W (i5-1240P, Iris Xe Graphics, Ram 16GB DDR4, SSD 512GB, 14 Inch IPS FHD 120Hz, Win 11/Office HS 21)',
    price: 14990000,
    originalPrice: 19990000,
    image: '/products/ic_laptop_asus.jpg',
    discount: 25
  },
  {
    id: 8,
    name: 'Mainboard',
    category: 'Mainboard PC MSI B760M GAMING PLUS WIFI',
    price: 3850000,
    image: '/products/ic_mainboard_msi.jpg',
  }
];

const formatPrice = (price: number) => {
  return `${price.toLocaleString('id-ID')}đ`;
};

const Product: React.FC = () => {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative">
                {/* Product Image */}
                <div className="aspect-[4/3] w-full overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  
                  {/* Discount or New Tag */}
                  {(product.discount || product.isNew) && (
                    <div className="absolute top-4 right-4 z-10">
                      {product.discount ? (
                        <span className="bg-red-500 text-white px-3 py-1.5 rounded-md text-sm font-medium shadow-sm">
                          -{product.discount}%
                        </span>
                      ) : product.isNew ? (
                        <span className="bg-teal-500 text-white px-3 py-1.5 rounded-md text-sm font-medium shadow-sm">
                          New
                        </span>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 min-h-[40px]">
                  {product.category}
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 opacity-0 group-hover:opacity-100">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product; 