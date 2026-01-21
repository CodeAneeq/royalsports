import React from "react";
import UserLayout from "../../components/layout/UserLayout";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import { motion, stagger } from "framer-motion";
import StadiumBg from "../../assets/stadium.png"; // apni image path
import WhoWeAreSection from "../../components/section/WhoWeAreSection";
import { FaShippingFast, FaGem, FaUsers } from "react-icons/fa";
import FeatureCard from "../../components/cards/FeatureCard";
import { CiDeliveryTruck } from "react-icons/ci";
import MapSection from "../../components/section/MapSection";
import { fadeIn, fadeUp } from "../../components/animations/variants";


const AboutUs = () => {
    return (
        <UserLayout>
            <section
                className="relative mx-10 mt-10 mb-20 rounded-2xl overflow-hidden"
                style={{
                    backgroundImage: `url(${StadiumBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 flex flex-col items-center text-center text-white px-6 py-28"
                >
                    {/* Badge */}
                    <span className="bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full mb-6">
                        ESTABLISHED 2010
                    </span>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Pushing Boundaries{" "}
                        <span className="text-green-400 block italic">Every Day.</span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-gray-200">
                        We empower athletes of all levels with premium gear designed for
                        performance, endurance, and style.
                    </p>

                    {/* Button */}
                    <PrimaryBtn
                        onClick={() => console.log("Explore clicked")}
                        className="mt-10  bg-green-500 hover:bg-green-600"
                    >
                        Explore Collections →
                    </PrimaryBtn>
                </motion.div>
            </section>

            <WhoWeAreSection />
            {/* Engineered for Performance */}
            <motion.section
                className="py-20 bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
            >

                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.h2
                        variants={fadeUp}
                        className="text-3xl md:text-4xl font-extrabold"
                    >
                        Built for Real Performance
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="mt-4 max-w-2xl mx-auto text-gray-600"
                    >
                        We focus on providing sports gear that is durable, comfortable, and made to perform on the field. Every product is selected with real players and real conditions in mind.
                    </motion.p>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14"
                        variants={stagger}
                    >
                        <motion.div variants={fadeUp}>
                            <FeatureCard
                                icon={<CiDeliveryTruck />}
                                title="Fast Delivery"
                                description="We understand timing matters. That’s why we make sure our products are readily available so you can get your gear when you need it."
                                bgColor="bg-green-500"
                            />
                        </motion.div>

                        <motion.div variants={fadeUp}>
                            <FeatureCard
                                icon={<FaGem />}
                                title="Premium Quality"
                                description="Our products are made from reliable materials and trusted brands, designed to handle regular training and match-day demands"
                                bgColor="bg-blue-600"
                            />
                        </motion.div>

                        <motion.div variants={fadeUp}>
                            <FeatureCard
                                icon={<FaUsers />}
                                title="Trusted"
                                description="From students and club players to fitness enthusiasts, Royal Sports is trusted by athletes who value quality, honesty, and long-term performance."
                                bgColor="bg-emerald-500"
                            />
                        </motion.div>
                    </motion.div>

                </div>
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
            >
                <motion.h3
                    variants={fadeUp}
                    className="text-center text-3xl font-bold mb-3"
                >
                    Our Shop Location
                </motion.h3>

                <motion.p
                    variants={fadeUp}
                    className="text-center text-sm text-gray-600 mb-10"
                >
                    Visit our store and explore quality sports gear in person.
                </motion.p>

                <motion.div variants={fadeUp}>
                    <MapSection />
                </motion.div>
            </motion.section>


        </UserLayout>
    );
};

export default AboutUs;
