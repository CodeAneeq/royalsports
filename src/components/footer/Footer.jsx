import { FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";
import SocialIcon from "../buttons/SocialIcon";

const Footer = () => {
    return (
        <footer className="bg-[#0f1f17] text-gray-300">
            <div className="mx-auto max-w-7xl px-12 py-16">

                {/* Top Section */}
                <div className="grid gap-12 lg:grid-cols-4">

                    {/* Newsletter */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-extrabold italic text-white">
                            JOIN THE ROYAL SPORTS
                        </h2>
                        <p className="mt-4 max-w-md text-sm text-gray-400">
                            Get exclusive access to new drops, expert training tips, and
                            member-only discounts. No spam, just pure performance.
                        </p>

                        <div className="mt-6 flex max-w-md flex-col gap-4 sm:flex-row">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 rounded-xl border border-gray-700 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-green-500 focus:outline-none"
                            />
                            <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wide text-green-500">
                            Shop
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li className="cursor-pointer hover:text-white">Football</li>
                            <li className="cursor-pointer hover:text-white">Cricket</li>
                            <li className="cursor-pointer hover:text-white">Tennis</li>
                            <li className="cursor-pointer hover:text-white">Accessories</li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wide text-green-500">
                            Support
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li className="cursor-pointer hover:text-white">Track Order</li>
                            <li className="cursor-pointer hover:text-white">About Us</li>
                            <li className="cursor-pointer hover:text-white">Shipping Info</li>
                            <li className="cursor-pointer hover:text-white">Help Center</li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-12 h-px bg-gray-800" />

                {/* Bottom Section */}
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">

                    {/* Copyright */}
                    <p className="text-xs text-gray-500">
                        © 2026 Royal Sports. All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        <SocialIcon to="https://www.facebook.com/share/16x5sL5r1j/" icon={<FaFacebookF />} />
                        <SocialIcon to="https://www.tiktok.com/@officialroyalsports?_r=1&_t=ZS-93BgLFSMwB6" icon={<FaTiktok />} />
                        <SocialIcon to="https://www.instagram.com/officialroyalsports?igsh=MTdiNWV6NmczNGRrYw==" icon={<FaInstagram />} />
                    </div>

                    {/* Legal */}
                    <div className="flex gap-6 text-xs text-gray-500">
                        <span className="cursor-pointer hover:text-white">Privacy Policy</span>
                        <span className="cursor-pointer hover:text-white">Terms of Service</span>
                        <span className="cursor-pointer hover:text-white">Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
