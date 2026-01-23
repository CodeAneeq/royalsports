import React, { useEffect, useState } from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { fadeIn, fadeUp, staggerContainer } from '../../components/animations/variants'
import ProductCard from '../../components/cards/ProductCard'
import { motion } from "framer-motion";
import FootballCateg2 from "../../assets/FootballCateg2.png"
import SectionHeading from '../../components/sectionHeadings/SectionHeading';
import baseURL from '../../helper/baseURL';
import axios from 'axios';


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
//     id: 6,
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
//     id: 6,
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
//     id: 6,
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
//     id: 6,
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
//     id: 6,
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
//     id: 6,
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
//     id: 6,
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

const AllProducts = () => {
  
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
          <motion.section
          className="mt-25 mx-15"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
<motion.div variants={fadeIn}>
  <SectionHeading
    para="Best Selling Products"
    title="This Month"
  />
</motion.div>

          <motion.div className="flex flex-wrap gap-10 justify-center mt-15">
            {products.map((item, i) => (
              <motion.div key={item._id} >
                <ProductCard
                  image={item?.image[0]}
                     title={item.name.slice(0, 22) + "..."}
                  subtitle={item.description.slice(0, 28) + "...."}
                  price={item?.discountPrice}
                   badge={item.badge}
                   id={item._id}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
    </UserLayout>
  )
}

export default AllProducts