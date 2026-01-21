import React, { useState } from "react";
import UserLayout from "../../components/layout/UserLayout";
import FootballCateg2 from "../../assets/FootballCateg2.png";
import ProductImagesSlider from "../../components/slider/product-images-slider";
import SectionHeading from "../../components/sectionHeadings/SectionHeading";
import ProductCard from "../../components/cards/ProductCard";

const ProductInfo = () => {
  const images = [
    FootballCateg2,
    FootballCateg2,
    FootballCateg2,
    FootballCateg2,
  ];

  const [activeImage, setActiveImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <UserLayout>
      <div className="max-w-7xl mx-10 px-4 py-10 max-[475px]:mx-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT: Product Images */}
          <div>
            <div className="bg-gray-200 rounded-xl flex items-center justify-center p-6">
              <img
                src={activeImage}
                alt="product"
                className="max-h-[420px] w-auto object-contain"
              />
            </div>

            <div className="mt-4 mx-10 ">
              <ProductImagesSlider
                images={images}
                onSelect={setActiveImage}
              />
            </div>
          </div>

          {/* RIGHT: Product Info */}
          <div className="flex flex-col justify-center space-y-6">

            {/* Title */}
            <h1 className="text-3xl font-extrabold text-gray-900 uppercase">
              Engineered for Precision:
              <br />
              Pro-Elite Series
            </h1>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-blue-600">$159.00</span>
              <span className="text-gray-400 line-through">$189.00</span>
              <span className="text-sm font-semibold text-red-500">
                SAVE 15%
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              The pinnacle of ball engineering. Our thermal-bonded surface
              provides a seamless, aerodynamic flight path and minimal water
              absorption, meeting the highest FIFA standards for competitive
              play.
            </p>

            {/* Quantity + Stock */}
            <div className="flex items-center gap-6">
              {/* Quantity Selector */}
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-lg font-bold hover:bg-gray-100"
                >
                  −
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-lg font-bold hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Only <span className="text-blue-600">12 items</span> left in stock!
                </p>
                <p className="text-sm text-green-600">
                  Free Express Delivery available
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              {/* Primary Button */}
              <button
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition"
              >
                Add to Cart
              </button>

              {/* Primary Button */}
              <button
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
              >
                Buy Now
              </button>
            </div>

            {/* Features */}
            <div className="flex gap-8 pt-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                ✔ Genuine Product
              </div>
              <div className="flex items-center gap-2">
                🚚 Free Shipping
              </div>
              <div className="flex items-center gap-2">
                ↩ 7 days Check Warranty
              </div>
            </div>

          </div>

        </div>
        <div className="mt-30">
            <SectionHeading title="Complete Your Kit" para="Get Now!"/>       
          <div className="flex flex-wrap gap-10 justify-center mt-15">
            {[...Array(4)].map((_, i) => (
              <div key={i} >
                <ProductCard
                  image={FootballCateg2}
                  title="Elite Match Ball V2"
                  subtitle="FIFA Quality Pro Certified"
                  price={120}
                  badge="NEW ARRIVAL"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default ProductInfo;
