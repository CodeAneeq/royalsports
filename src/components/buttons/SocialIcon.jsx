import { Link } from "react-router-dom";

const SocialIcon = ({ icon, to }) => {
    return (
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-green-500 hover:text-black">
            <Link to={to}>
            {icon}
            </Link>
        </button>
    );
};

export default SocialIcon