import React, { useState } from "react";
import pic1 from '../assets/Artboard.webp'
const ProductPage = () => {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        // Placeholder function to handle adding product to the cart
        alert("Product added to cart!");
    };

    const handleBuyNow = () => {
        // Placeholder function for buy now functionality
        alert("Proceeding to payment...");
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center p-6 max-w-4xl mx-auto">
            {/* Product Image */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <img
                    src={pic1} // Replace with actual image path
                    alt="Compact Ele Stove"
                    className="w-full h-auto shadow-lg rounded"
                />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 md:pl-10 space-y-4">
                {/* Breadcrumb */}
                <p className="text-sm text-gray-500">
                    Home / Shop / Accessories / Travel essentials / Compact Ele Stove
                </p>

                {/* Product Title */}
                <h1 className="text-2xl font-bold text-gray-800">Compact Ele Stove</h1>

                {/* Pricing */}
                <div className="flex items-center space-x-2">
                    <span className="text-2xl font-semibold text-gray-900">₹542.00</span>
                    <span className="line-through text-gray-400">₹1,084.00</span>
                </div>
                <p className="text-sm text-gray-500">Inclusive of all taxes</p>

                {/* Availability */}
                <p className="text-green-600 font-semibold">In Stock</p>

                {/* Product Description */}
                <div>
                    <h2 className="font-semibold text-gray-800">Highlight</h2>
                    <p className="text-gray-600">
                        Efficient, sleek stove for gourmet cooking—ignite your culinary passion.
                    </p>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center space-x-4">
                    <button
                        onClick={decreaseQuantity}
                        className="px-3 py-1 border border-gray-400 rounded-md text-gray-600"
                    >
                        -
                    </button>
                    <span className="text-lg">{quantity}</span>
                    <button
                        onClick={increaseQuantity}
                        className="px-3 py-1 border border-gray-400 rounded-md text-gray-600"
                    >
                        +
                    </button>
                </div>

                {/* Add to Cart and Buy Now Buttons */}
                <div className="flex space-x-4">
                    <button
                        onClick={handleAddToCart}
                        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                    >
                        Add to cart
                    </button>
                    <button
                        onClick={handleBuyNow}
                        className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900"
                    >
                        Buy Now
                    </button>
                </div>

                {/* Wishlist, SKU, Categories, and Share */}
                <button className="text-gray-600 underline mt-2">Add to wishlist</button>
                <p className="text-gray-600">SKU: ACC-027</p>
                <p className="text-gray-600">Categories: Accessories, Travel essentials</p>

                {/* Share Section */}
                <div className="flex space-x-4 mt-4">
                    <a href="#" className="text-gray-500 hover:text-gray-700">Facebook</a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">WhatsApp</a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">Twitter</a>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
