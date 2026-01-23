import React, { useEffect, useState } from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { fadeIn, fadeUp, staggerContainer } from '../../components/animations/variants'
import ProductCard from '../../components/cards/ProductCard'
import { motion } from "framer-motion";
import FootballCateg2 from "../../assets/FootballCateg2.png"
import SectionHeading from '../../components/sectionHeadings/SectionHeading';
import baseURL from '../../helper/baseURL';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FilterByCategory = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState({});
  
      const getProducts = async () => {
          try {
              const res = await axios.get(`${baseURL}/api/product/get-all-products`);
              const data = res?.data?.data;
              const fil = data?.filter(item => item.categoryId == id)
              console.log(fil);
              
              setProducts(fil);
          } catch (error) {
              console.log(error);
          }
      }

      const getCategory = async () => {
          try {
              const res = await axios.get(`${baseURL}/api/category/get-category/${id}`);
              const data = res?.data?.data;
              console.log(data);
              
              setCategory(data);
          } catch (error) {
              console.log(error);
          }
      }
  
      useEffect(() => {
        getProducts();
        getCategory();
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
    para="Filter By Category"
    title={category?.name}
  />
</motion.div>

          {
            products?.length > 0 ? <motion.div className="flex flex-wrap gap-10 justify-center mt-15">
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
          </motion.div> : <p>No Product is listed in this category</p>
          }
        </motion.section>
    </UserLayout>
  )
}

export default FilterByCategory