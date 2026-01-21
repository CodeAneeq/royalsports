const MainBtn = ({ onClick, disabled, loading, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
        relative overflow-hidden z-10
        w-[95%] h-8 m-2
        bg-[var(--btnBg)] text-[var(--sectionBg)]
        rounded-[10px] text-[18px] font-medium
        transition-colors duration-300
        hover:text-[var(--btnBg)]

        after:absolute after:inset-y-0 after:left-[-20%] after:right-[-20%]
        after:bg-[var(--sectionBg)]
        after:skew-x-[-45deg]
        after:scale-x-0 after:origin-left
        after:transition-transform after:duration-500
        hover:after:scale-x-100
        after:content-['']
      "
    >
      {loading ? "Loading..." : "View More"}
    </button>
  );
};

export default MainBtn;
