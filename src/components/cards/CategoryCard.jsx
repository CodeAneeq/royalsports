const CategoryCard = ({
    title = "Football",
    description = "Gear for every match day",
    image,
}) => {
    return (
        <div className="group relative w-48 h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg transition-transform duration-300 hover:scale-105">
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Title + Description */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h3 className="text-white text-3xl font-semibold tracking-wide opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {title}
                </h3>

                <p className="mt-2 text-sm text-white/80 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default CategoryCard;
