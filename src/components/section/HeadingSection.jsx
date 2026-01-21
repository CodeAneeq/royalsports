const SectionHeading = ({ title, className }) => {
    return (
        <div className="mb-8">
            <h2 className={`text-3xl font-extrabold italic text-black ${className}`}>
                {title}
            </h2>
            <div className="w-20 h-1 bg-green-500 mt-2"></div>
        </div>
    );
};

export default SectionHeading;
