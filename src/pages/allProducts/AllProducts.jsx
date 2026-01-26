import React, { useEffect, useState } from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { fadeIn, fadeUp, staggerContainer } from '../../components/animations/variants'
import ProductCard from '../../components/cards/ProductCard'
import { motion } from "framer-motion";
import FootballCateg2 from "../../assets/FootballCateg2.png"
import SectionHeading from '../../components/sectionHeadings/SectionHeading';
import baseURL from '../../helper/baseURL';
import axios from 'axios';
import useShoppingCart from '../../hooks/useShoppingCart';
import { useNavigate } from 'react-router-dom';

const AllProducts = () => {
  
       const [products, setProducts] = useState([]);
       const navigate = useNavigate();
  
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
                  product={item}
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