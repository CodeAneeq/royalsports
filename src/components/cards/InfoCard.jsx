const InfoCard = ({
    icon,
    title = "FAST SHIPPING",
    description = "Free on orders over $150",
}) => {
    return (
        <div className="flex w-full items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md ">

            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                {icon}
            </div>

            {/* Text */}
            <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                    {title}
                </h4>
                <p className="mt-1 text-sm text-gray-500">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default InfoCard;
