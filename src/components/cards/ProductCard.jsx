import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import CartBtn from "../buttons/CartBtn";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
    title = "Elite Match Ball V2",
    subtitle = "FIFA Quality Pro Certified",
    price = 120,
    image,
    badge = "NEW ARRIVAL",
}) => {

    const navigate = useNavigate();

    return (
        <div className="group relative w-64 mb-10 rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" onClick={() => navigate("/product-info")}>

            {/* Image Section */}
            <div className="relative h-56 rounded-t-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                />

                {/* Badge */}
                {badge && (
                    <span className="absolute top-4 left-4 rounded-lg bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                        {badge}
                    </span>
                )}

            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                    {title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                    {subtitle}
                </p>

                <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-500">
                        ${price.toFixed(2)}
                    </span>

                    <CartBtn />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
