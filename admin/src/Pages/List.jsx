/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { FaEdit } from 'react-icons/fa'; // Edit icon from react-icons

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productToUpdate, setProductToUpdate] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedPrice, setUpdatedPrice] = useState('');
  const [updatedCategory, setUpdatedCategory] = useState('');

  // Fetch the list of products
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  // Remove a product from the list
  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  // Open the update modal and populate it with the product data
  const openUpdateModal = (product) => {
    setProductToUpdate(product);
    setUpdatedName(product.name);
    setUpdatedPrice(product.price);
    setUpdatedCategory(product.category);
    setShowModal(true);
  }

  // Update the product with new data
  const updateProduct = async () => {
    try {
      const response = await axios.post(backendUrl + '/api/product/update', {
        id: productToUpdate._id,
        name: updatedName,
        price: updatedPrice,
        category: updatedCategory
      }, { headers: { token } });

      if (response.data.success) {
        toast.success(response.data.message);
        setShowModal(false);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  // Fetch the list of products when the component mounts
  useEffect(() => {
    fetchList();
  }, [])

  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>
        {/* List Table Title */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {/* Product List */}
        {
          list.map((item, index) => (
            <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
              {/* Check if image exists and render the first image, fallback to a placeholder */}
              <img className='w-12' src={item.image && item.image[0] ? item.image[0] : '/path-to-default-placeholder-image.jpg'} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <div className="flex justify-end gap-2">
                {/* Edit Icon */}
                <FaEdit onClick={() => openUpdateModal(item)} className="cursor-pointer text-lg mt-1 text-blue-500" />
                {/* Remove Icon */}
                <p onClick={() => removeProduct(item._id)} className='cursor-pointer text-lg text-red-500'>X</p>
              </div>
            </div>
          ))
        }
      </div>

      {/* Update Product Modal */}
      {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg w-96">
      <h2 className="text-2xl font-bold mb-4 text-center">Update Product</h2>
      <form>
        {/* Product Name Input */}
        <div className="mb-4">
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            id="productName"
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-all duration-300 mt-2 placeholder-transparent"
            placeholder="Enter product name"
          />
        </div>

        {/* Product Category Input */}
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <input
            id="category"
            type="text"
            value={updatedCategory}
            onChange={(e) => setUpdatedCategory(e.target.value)}
            className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-all duration-300 mt-2 placeholder-transparent"
            placeholder="Enter product category"
          />
        </div>

        {/* Product Price Input */}
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            id="price"
            type="number"
            value={updatedPrice}
            onChange={(e) => setUpdatedPrice(e.target.value)}
            className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-all duration-300 mt-2 placeholder-transparent"
            placeholder="Enter product price"
          />
        </div>

        {/* Modal Action Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-all duration-300"
          >
            Close
          </button>
          <button
            type="button"
            onClick={updateProduct}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  </div>
)}


    </>
  );
}

export default List;
