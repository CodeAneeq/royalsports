import React, { useEffect, useState } from "react";
import UserLayout from "../../components/layout/UserLayout";
import FootballCateg2 from "../../assets/FootballCateg2.png";
import ProductImagesSlider from "../../components/slider/product-images-slider";
import SectionHeading from "../../components/sectionHeadings/SectionHeading";
import ProductCard from "../../components/cards/ProductCard";
import axios from "axios";
import baseURL from "../../helper/baseURL";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import useShoppingCart from "../../hooks/useShoppingCart";
import { useSelector } from "react-redux";

const ProductInfo = () => {
  const {id} = useParams();
  const isLogin = useSelector(state => state.user.isLogin);
  const navigate = useNavigate();
  const {addProductInCart} = useShoppingCart();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const getProduct = async () => {
    try {
      const res = await axios.get(`${baseURL}/api/product/get-product/${id}`);
      const data = res?.data?.data;
      setProduct(data);
      console.log(data);
      if (data?.image?.length > 0) {
      setActiveImage(data.image[0]);
    }
      
    } catch (error) {
      console.log(error);
    }
  }



  const getProducts = async () => {
        try {
            const res = await axios.get(`${baseURL}/api/product/get-all-products`);
            const data = res?.data?.data;
            console.log(data);
            
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    const buyNow = () => {
      if (isLogin) {        
        addProductInCart(product, quantity);
        navigate("/cart")
      } else {
        navigate("/sign-up")
      }
    }

  useEffect(() => {
    getProduct();
    getProducts()
  }, [id])

  const images = [
    FootballCateg2,
    FootballCateg2,
    FootballCateg2,
    FootballCateg2,
  ];


  return (
  <UserLayout>
      <div className="max-w-7xl mx-10 px-4 py-10 max-[475px]:mx-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT: Product Images */}
     <div>
  {/* Active Image */}
  <div className="bg-gray-200 rounded-xl h-[460px] flex items-center justify-center p-6 max-md:h-[300px]">
    {activeImage && (
      <img
        src={activeImage}
        alt="product"
        className="
          max-h-full
          max-w-full
          object-contain
          transition-all
          duration-300
        "
      />
    )}
  </div>

  {/* Thumbnails Slider */}
  <div className="mt-4 px-10">
    <ProductImagesSlider
      images={product?.image}
      onSelect={setActiveImage}
    />
  </div>
</div>


          {/* RIGHT: Product Info */}
          <div className="flex flex-col justify-center space-y-6">

            {/* Title */}
            <h1 className="text-3xl font-extrabold text-gray-900 uppercase">
             {product?.name}

            </h1>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-blue-600">Rs {product?.discountPrice}</span>
              <span className="text-gray-400 line-through">Rs {product?.originalPrice}</span>
              <span className="text-sm font-semibold text-red-500">
                SAVE 15%
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
             {product?.description}
            </p>

            {/* Quantity + Stock */}
            <div className="flex items-center gap-6 max-[400px]:flex-col">
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
                  Only <span className="text-blue-600">{product?.stockQty} items</span> left in stock!
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
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition cursor-pointer" onClick={() => addProductInCart(product, quantity)}
              >
                Add to Cart
              </button>

              {/* Primary Button */}
              <button
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition cursor-pointer" onClick={buyNow}
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
            {products.slice(0, 4)?.map((item, i) => (
              <div key={i} >
                <ProductCard
                  image={item?.image[0]}
                  title={item?.name?.slice(0, 22) + "..."}
                  subtitle={item?.description?.slice(0, 28) + "..."}
                  price={item.discountPrice}
                  product={item}
                 badge={item.badge}
                  id={item._id}
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
