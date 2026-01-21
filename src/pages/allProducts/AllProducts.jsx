import React from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { fadeIn, fadeUp, staggerContainer } from '../../components/animations/variants'
import ProductCard from '../../components/cards/ProductCard'
import { motion } from "framer-motion";
import FootballCateg2 from "../../assets/FootballCateg2.png"
import SectionHeading from '../../components/sectionHeadings/SectionHeading';


const products = [
  {
    id: 1,
    image: FootballCateg2,
    title: "Elite Match Ball V2",
    subtitle: "FIFA Quality Pro Certified",
    price: 120,
    badge: "NEW ARRIVAL",
  },
  {
    id: 2,
    image: FootballCateg2,
    title: "Elite Match Ball V2",
    subtitle: "FIFA Quality Pro Certified",
    price: 120,
    badge: "NEW ARRIVAL",
  },
  {
    id: 3,
    image: FootballCateg2,
    title: "Elite Match Ball V2",
    subtitle: "FIFA Quality Pro Certified",
    price: 120,
    badge: "NEW ARRIVAL",
  },
  {
    id: 4,
    image: FootballCateg2,
    title: "Elite Match Ball V2",
    subtitle: "FIFA Quality Pro Certified",
    price: 120,
    badge: "NEW ARRIVAL",
  },
  {
    id: 5,
    image: FootballCateg2,
    title: "Elite Match Ball V2",
    subtitle: "FIFA Quality Pro Certified",
    price: 120,
    badge: "NEW ARRIVAL",
  },
  {
    id: 6,
    image: FootballCateg2,
    title: "Elite Match Ball V2",
    subtitle: "FIFA Quality Pro Certified",
    price: 120,
    badge: "NEW ARRIVAL",
  },
  {
    id: 6,
    image: FootballCateg2,
    title: "Elite Match Ball V2",
    subtitle: "FIFA Quality Pro Certified",
    price: 120,
    badge: "NEW ARRIVAL",
  },
  {
    id: 6,
    image: FootballCateg2,
    title: "Elite Match Ball V2",
    subtitle: "FIFA Quality Pro Certified",
    price: 120,
    badge: "NEW ARRIVAL",
  },
  {
    id: 6,
    image: FootballCateg2,
    title: "Elite Match Ball V2",
    subtitle: "FIFA Quality Pro Certified",
    price: 120,
    badge: "NEW ARRIVAL",
  },
  {
    id: 6,
    image: FootballCateg2,
    title: "Elite Match Ball V2",
    subtitle: "FIFA Quality Pro Certified",
    price: 120,
    badge: "NEW ARRIVAL",
  },
  {
    id: 6,
    image: FootballCateg2,
    title: "Elite Match Ball V2",
    subtitle: "FIFA Quality Pro Certified",
    price: 120,
    badge: "NEW ARRIVAL",
  },
  {
    id: 6,
    image: FootballCateg2,
    title: "Elite Match Ball V2",
    subtitle: "FIFA Quality Pro Certified",
    price: 120,
    badge: "NEW ARRIVAL",
  },
  {
    id: 6,
    image: FootballCateg2,
    title: "Elite Match Ball V2",
    subtitle: "FIFA Quality Pro Certified",
    price: 120,
    badge: "NEW ARRIVAL",
  },
  {
    id: 6,
    image: FootballCateg2,
    title: "Elite Match Ball V2",
    subtitle: "FIFA Quality Pro Certified",
    price: 120,
    badge: "NEW ARRIVAL",
  },
  {
    id: 6,
    image: FootballCateg2,
    title: "Elite Match Ball V2",
    subtitle: "FIFA Quality Pro Certified",
    price: 120,
    badge: "NEW ARRIVAL",
  },
  {
    id: 6,
    image: FootballCateg2,
    title: "Elite Match Ball V2",
    subtitle: "FIFA Quality Pro Certified",
    price: 120,
    badge: "NEW ARRIVAL",
  },
  {
    id: 6,
    image: FootballCateg2,
    title: "Elite Match Ball V2",
    subtitle: "FIFA Quality Pro Certified",
    price: 120,
    badge: "NEW ARRIVAL",
  },
  {
    id: 6,
    image: FootballCateg2,
    title: "Elite Match Ball V2",
    subtitle: "FIFA Quality Pro Certified",
    price: 120,
    badge: "NEW ARRIVAL",
  },
  {
    id: 6,
    image: FootballCateg2,
    title: "Elite Match Ball V2",
    subtitle: "FIFA Quality Pro Certified",
    price: 120,
    badge: "NEW ARRIVAL",
  },
  {
    id: 6,
    image: FootballCateg2,
    title: "Elite Match Ball V2",
    subtitle: "FIFA Quality Pro Certified",
    price: 120,
    badge: "NEW ARRIVAL",
  },
  {
    id: 7,
    image: FootballCateg2,
    title: "Elite Match Ball V2",
    subtitle: "FIFA Quality Pro Certified",
    price: 120,
    badge: "NEW ARRIVAL",
  },
  {
    id: 8,
    image: FootballCateg2,
    title: "Elite Match Ball V2",
    subtitle: "FIFA Quality Pro Certified",
    price: 120,
    badge: "NEW ARRIVAL",
  },
];

const AllProducts = () => {
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

          <motion.div className="flex flex-wrap gap-5 justify-center mt-15">
            {products.map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <ProductCard
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  price={item.price}
                  badge={item.badge}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
    </UserLayout>
  )
}

export default AllProducts