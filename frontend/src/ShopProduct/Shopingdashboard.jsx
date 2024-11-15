// import React from 'react';
// // import { FiHeart, FiShoppingCart } from 'react-icons/fi';
// import pic1 from '../assets/Artboard.webp';
// import pic2 from '../assets/bags.webp';
// import pic3 from '../assets/quick clean.webp';
// import pic4 from '../assets/tent.webp';
// import pic5 from '../assets/shoes.webp';
// import { Link } from "react-router-dom";
//
// const products = [
//     {
//         id: 1,
//         image: pic1,
//         discount: '50% OFF',
//         name: 'Compact Ele Stove',
//         price: '₹542.00',
//         originalPrice: '₹1,084.00',
//     },
//     {
//         id: 2,
//         image: pic2,
//         discount: '50% OFF',
//         name: 'Quick Clean Shoe Wipes (P...',
//         price: '₹172.00',
//         originalPrice: '₹344.00',
//     },
//     {
//         id: 3,
//         image: pic3,
//         discount: '50% OFF',
//         name: 'Tangle-Free Earphones Ca...',
//         price: '₹200.00',
//         originalPrice: '₹400.00',
//     },
//     {
//         id: 4,
//         image: pic4,
//         discount: '50% OFF',
//         name: 'Adventure Ready Back',
//         price: '₹1,800.00',
//         originalPrice: '₹3,599.99',
//     },
//     {
//         id: 5,
//         image: pic5,
//         discount: '50% OFF',
//         name: 'Cozy Velvet Heat Pads',
//         price: '₹184.00',
//         originalPrice: '₹368.00',
//     },
//     {
//         id: 6,
//         image: pic5,
//         discount: '50% OFF',
//         name: 'Cozy Velvet Heat Pads',
//         price: '₹184.00',
//         originalPrice: '₹368.00',
//     },
//     {
//         id: 7,
//         image: pic5,
//         discount: '50% OFF',
//         name: 'Cozy Velvet Heat Pads',
//         price: '₹184.00',
//         originalPrice: '₹368.00',
//     },
//     {
//         id: 8,
//         image: pic5,
//         discount: '50% OFF',
//         name: 'Cozy Velvet Heat Pads',
//         price: '₹184.00',
//         originalPrice: '₹368.00',
//     },  {
//         id: 9,
//         image: pic5,
//         discount: '50% OFF',
//         name: 'Cozy Velvet Heat Pads',
//         price: '₹184.00',
//         originalPrice: '₹368.00',
//     },  {
//         id: 10,
//         image: pic5,
//         discount: '50% OFF',
//         name: 'Cozy Velvet Heat Pads',
//         price: '₹184.00',
//         originalPrice: '₹368.00',
//     },
//
//
// ];
//
// // eslint-disable-next-line react/prop-types
// const ProductCard = ({ product }) => (
//     <div className="bg-white shadow-lg rounded-lg p-4 relative min-h-[320px] flex flex-col justify-between">
//         <div className="absolute top-2 left-2 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">
//             {/* eslint-disable-next-line react/prop-types */}
//             {product.discount}
//         </div>
//         {/* eslint-disable-next-line react/prop-types */}
//         <img src={product.image} alt={product.name} className="w-full h-36 object-contain mb-4" />
//         {/* eslint-disable-next-line react/prop-types */}
//         <h3 className="text-gray-700 text-sm font-semibold">{product.name}</h3>
//         <div className="flex items-center mt-2 mb-1">
//             <div className="flex">
//                 <span className="text-yellow-400 text-xs">★ ★ ★ ★ ★</span>
//             </div>
//             <span className="text-xs text-gray-500 ml-2">(0)</span>
//         </div>
//         <div className="flex items-center">
//             {/* eslint-disable-next-line react/prop-types */}
//             <span className="text-lg font-bold text-gray-800">{product.price}</span>
//             {/* eslint-disable-next-line react/prop-types */}
//             <span className="text-sm text-gray-400 line-through ml-2">{product.originalPrice}</span>
//         </div>
//         <p className="text-xs text-gray-500">Inclusive of all taxes</p>
//         <div className="flex justify-center mt-4">
//             {/* eslint-disable-next-line react/prop-types */}
//             <Link to="/product1">
//                 <button className="p-2 px-4 text-white bg-teal-600 rounded-3xl hover:bg-teal-800">
//                     Buy Now
//                 </button>
//             </Link>
//         </div>
//     </div>
// );
//
// const ProductList = () => (
//     <div className="max-w-7xl mx-auto p-4">
//         <h2 className="text-2xl font-bold text-center text-teal-600 mb-4">TRAVEL ESSENTIALS ITEMS</h2>
//         <div className="flex justify-center space-x-4 mb-6 text-sm text-gray-600">
//             <button className="border-b-2 border-gray-800 pb-1 font-semibold">New Arrival</button>
//             <button className="pb-1 hover:text-gray-800">Best Selling</button>
//             <button className="pb-1 hover:text-gray-800">Top Rated</button>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//             {products.map((product) => (
//                 <ProductCard key={product.id} product={product} />
//             ))}
//         </div>
//     </div>
// );
//
// export default ProductList;
