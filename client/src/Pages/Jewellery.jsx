import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from '../Components/Title';
import ProductItem from '../Components/ProductItem';

const Jewellery = () => {
  const { products } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [sortType, setSortType] = useState('relevant');
  const [searchQuery, setSearchQuery] = useState('');

  const applyFilter = () => {
    return products.filter(item => 
      item.subCategory === 'jewellery' && 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const sortProduct = (filteredProducts) => {
    let sortedProducts = [...filteredProducts];
    switch (sortType) {
      case 'low-high':
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    return sortedProducts;
  };

  useEffect(() => {
    const filteredProducts = applyFilter();
    const sortedProducts = sortProduct(filteredProducts);
    setFilterProducts(sortedProducts);
  }, [products, sortType, searchQuery]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
              <div className="mb-6">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border-b-2 border-gray-300 focus:border-yellow-400 outline-none py-2 px-3 transition-all placeholder-gray-500 placeholder:animate-pulse"
          />
        </div>
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'JEWELLERY'} text2={'PRODUCTS'} />
          
          <select
            onChange={(e) => setSortType(e.target.value)}
            value={sortType}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterProducts.length > 0 ? (
              filterProducts.map((item, index) => (
                <ProductItem
                  key={index}
                  name={item.name}
                  about={item.about}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                />
              ))
            ) : (
              <div className="text-center text-gray-500">No products found</div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Jewellery;
