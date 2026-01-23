import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer } from "../../components/animations/variants";
import Banner1 from '../../assets/homepage_banner_1.png';
import banner2 from '../../assets/Banner2.png';
import PrimaryBtn from '../../components/buttons/PrimaryBtn';
import CategorySlider from '../../components/slider/CategorySlider';
import FootballCateg2 from "../../assets/FootballCateg2.png"
import ProductCard from '../../components/cards/ProductCard';
import InfoCard from '../../components/cards/InfoCard';
import { CiDeliveryTruck } from 'react-icons/ci';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { RiCustomerService2Fill } from 'react-icons/ri';
import UserLayout from '../../components/layout/UserLayout';
import SectionHeading from '../../components/sectionHeadings/SectionHeading';
import axios from 'axios';
import baseURL from '../../helper/baseURL';

// const products = [
//   {
//     id: 1,
//     image: FootballCateg2,
//     title: "Elite Match Ball V2",
//     subtitle: "FIFA Quality Pro Certified",
//     price: 120,
//     badge: "NEW ARRIVAL",
//   },
//   {
//     id: 2,
//     image: FootballCateg2,
//     title: "Elite Match Ball V2",
//     subtitle: "FIFA Quality Pro Certified",
//     price: 120,
//     badge: "NEW ARRIVAL",
//   },
//   {
//     id: 3,
//     image: FootballCateg2,
//     title: "Elite Match Ball V2",
//     subtitle: "FIFA Quality Pro Certified",
//     price: 120,
//     badge: "NEW ARRIVAL",
//   },
//   {
//     id: 4,
//     image: FootballCateg2,
//     title: "Elite Match Ball V2",
//     subtitle: "FIFA Quality Pro Certified",
//     price: 120,
//     badge: "NEW ARRIVAL",
//   },
//   {
//     id: 5,
//     image: FootballCateg2,
//     title: "Elite Match Ball V2",
//     subtitle: "FIFA Quality Pro Certified",
//     price: 120,
//     badge: "NEW ARRIVAL",
//   },
//   {
//     id: 6,
//     image: FootballCateg2,
//     title: "Elite Match Ball V2",
//     subtitle: "FIFA Quality Pro Certified",
//     price: 120,
//     badge: "NEW ARRIVAL",
//   },
//   {
//     id: 7,
//     image: FootballCateg2,
//     title: "Elite Match Ball V2",
//     subtitle: "FIFA Quality Pro Certified",
//     price: 120,
//     badge: "NEW ARRIVAL",
//   },
//   {
//     id: 8,
//     image: FootballCateg2,
//     title: "Elite Match Ball V2",
//     subtitle: "FIFA Quality Pro Certified",
//     price: 120,
//     badge: "NEW ARRIVAL",
//   },
// ];


const Home = () => {

  const hasAnimated = useRef(false);

  const [products, setProducts] = useState([]);

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


    useEffect(() => {
      getProducts()
    }, [])

  return (
      <UserLayout>
    <div>
      <main className='mx-10 max-[420px]:mx-3'>
        <section
          style={{
            backgroundImage: `url(${Banner1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[500px] rounded-2xl mt-15 flex items-center"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="ml-16 max-w-xl text-white max-[600px]:ml-4"
          >
            <span className="inline-block bg-green-500 text-white text-xs font-semibold px-4 py-1 rounded-full mb-6">
              ROYAL ELITE COLLECTION
            </span>

            <h1 className="text-6xl font-extrabold leading-tigh max-[500px]:text-5xl max-[400px]:text-4xl">
              GEAR UP FOR <br />
              <span className="text-green-500">THE GAME</span>
            </h1>

            <p className="mt-6 text-gray-200 text-lg max-[500px]:text-md">
              Top-quality sports gear designed for champions.
              Perform better, train harder, and win every moment
            </p>

            <PrimaryBtn to={"/all-products"} className={"bg-yellow-500 hover:bg-yellow-600"}>
              Shop Now
            </PrimaryBtn>
          </motion.div>
        </section>


        <motion.section
          className="mt-30"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading para={"Categories"} title="Browse by Categories" />
          <CategorySlider />
        </motion.section>


            <motion.section
      className="mt-35"
      variants={staggerContainer}
      initial={hasAnimated.current ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      onViewportEnter={() => {
        hasAnimated.current = true;
      }}
    >

          <SectionHeading style={{marginBottom: "50px"}} para={"Our Products"} title="Explore Our Products" />

          <motion.div className="flex flex-wrap gap-10 justify-center">
            {products.slice(0, 8).map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <ProductCard
                  image={item.image[0]}
                  title={item.name.slice(0, 22) + "..."}
                  subtitle={item.description.slice(0, 28) + "...."}
                  price={item.discountPrice}
                  badge={item.badge}
                  id={item._id}
                />
              </motion.div>
            ))}
          <PrimaryBtn to={"/all-products"} style={{borderRadius: "4px", marginTop: "0px", paddingTop: "10px"}} className={"bg-green-500 hover:bg-green-700 text-white h-10"}>View All Products</PrimaryBtn>
          </motion.div>
        </motion.section>


        <motion.section
          className="mt-40 mx-10 mb-20 max-[420px]:mx-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex gap-5 max-[920px]:flex-wrap">
            <motion.div variants={fadeUp} className='w-full'>
              <InfoCard icon={<CiDeliveryTruck />} title="Fast Shipping" description="Fast Shipping All Pakistan" />
            </motion.div>

            <motion.div variants={fadeUp} className='w-full'>
              <InfoCard icon={<MdOutlineVerifiedUser />} title="Authentic Gear" description="100% genuine products" />
            </motion.div>

            <motion.div variants={fadeUp} className='w-full'>
              <InfoCard icon={<RiCustomerService2Fill />} title="24/7 Support" description="Expert Customer Support" />
            </motion.div>
          </div>
        </motion.section>


        <motion.figure
          className="mt-40 mb-40 max-[420px]:mt-20 max-[420px]:mb-20"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={banner2} alt="promotional banner" />
        </motion.figure>


      </main>
    </div>
    </UserLayout>
  )
}

export default Home
// import React from 'react'
// import { motion } from "framer-motion";
// import { fadeUp, fadeIn, staggerContainer } from "../../components/animations/variants";
// import Navbar from '../../components/navbar/Navbar';
// import Banner1 from '../../assets/homepage_banner_1.png';
// import banner2 from '../../assets/Banner2.png';
// import PrimaryBtn from '../../components/buttons/PrimaryBtn';
// import SectionHeading from '../../components/section/HeadingSection';
// import CategorySlider from '../../components/slider/CategorySlider';
// import FootballCateg2 from "../../assets/FootballCateg2.png"
// import ProductCard from '../../components/cards/ProductCard';
// import InfoCard from '../../components/cards/InfoCard';
// import { CiDeliveryTruck } from 'react-icons/ci';
// import { MdOutlineVerifiedUser } from 'react-icons/md';
// import { RiCustomerService2Fill } from 'react-icons/ri';
// import Footer from '../../components/footer/Footer';


// const Home = () => {
//   return (
//     <div>
//       <header>
//         <Navbar />
//       </header>
//       <main className='mx-10'>
//         <section
//           style={{
//             backgroundImage: `url(${Banner1})`,
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//           className="h-[500px]  rounded-2xl mt-15 flex items-center"
//         >
//           <div className="ml-16 max-w-xl text-white max-[600px]:ml-4">
//             <span className="inline-block bg-green-500 text-white text-xs font-semibold px-4 py-1 rounded-full mb-6">
//               ROYAL ELITE COLLECTION
//             </span>

//             <h1 className="text-6xl font-extrabold leading-tigh max-[500px]:text-5xl max-[400px]:text-4xl">
//               GEAR UP FOR <br />
//               <span className="text-green-500">THE GAME</span>
//             </h1>

//             <p className="mt-6 text-gray-200 text-lg max-[500px]:text-md">
//               Top-quality sports gear designed for champions.
//               Perform better, train harder, and win every moment
//             </p>

//             <PrimaryBtn />

//           </div>
//         </section>

//         <section className='mt-30'>
//           <SectionHeading className="max-[340px]:text-2xl" title={"Sports Categories"}></SectionHeading>
//           <div>
//             <CategorySlider />
//           </div>
//         </section>

//         <section className='mt-35'>
//              <SectionHeading className="max-[340px]:text-2xl" title={"Top Performing Gear"}></SectionHeading>
//              <div className='flex flex-wrap gap-5 justify-center mt-15'>
//               <ProductCard
//   image={FootballCateg2}
//   title="Elite Match Ball V2"
//   subtitle="FIFA Quality Pro Certified"
//   price={120}
//   badge="NEW ARRIVAL"
// />
//               <ProductCard
//   image={FootballCateg2}
//   title="Elite Match Ball V2"
//   subtitle="FIFA Quality Pro Certified"
//   price={120}
//   badge="NEW ARRIVAL"
// />
//               <ProductCard
//   image={FootballCateg2}
//   title="Elite Match Ball V2"
//   subtitle="FIFA Quality Pro Certified"
//   price={120}
//   badge="NEW ARRIVAL"
// />
//               <ProductCard
//   image={FootballCateg2}
//   title="Elite Match Ball V2"
//   subtitle="FIFA Quality Pro Certified"
//   price={120}
//   badge="NEW ARRIVAL"
// />
//               <ProductCard
//   image={FootballCateg2}
//   title="Elite Match Ball V2"
//   subtitle="FIFA Quality Pro Certified"
//   price={120}
//   badge="NEW ARRIVAL"
// />
//               <ProductCard
//   image={FootballCateg2}
//   title="Elite Match Ball V2"
//   subtitle="FIFA Quality Pro Certified"
//   price={120}
//   badge="NEW ARRIVAL"
// />
//               <ProductCard
//   image={FootballCateg2}
//   title="Elite Match Ball V2"
//   subtitle="FIFA Quality Pro Certified"
//   price={120}
//   badge="NEW ARRIVAL"
// />
//               <ProductCard
//   image={FootballCateg2}
//   title="Elite Match Ball V2"
//   subtitle="FIFA Quality Pro Certified"
//   price={120}
//   badge="NEW ARRIVAL"
// />

//              </div>
//         </section>

//         <section className='mt-40 mx-10 mb-20'>
//           <div className='flex gap-5'>
//             <InfoCard icon={<CiDeliveryTruck />} description='Fast Shipping All over Pakistan' title='Fast Shipping'/>
//             <InfoCard icon={<MdOutlineVerifiedUser />} description='100% genuine products' title='Authentic Gear'/>
//             <InfoCard icon={<RiCustomerService2Fill />} description='Expert Customer Support' title='24/7 Support'/>
//           </div>
//         </section>

//         <figure className='mt-40 mb-40'>
//           <img src={banner2} alt="promotional banner" />
//         </figure>

//       </main>
//       <Footer/>
//     </div>
//   )
// }

// export default Home