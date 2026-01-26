import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../../components/adminComp/sidebar/Sidebar'
import AdminLayout from '../../../components/layout/AdminLayout'
import AdminStatsCard from '../../../components/adminComp/cards/adminStatsCard/AdminStatsCard'
import SectionHeading from '../../../components/sectionHeadings/SectionHeading'
import axios from 'axios'
import baseURL from '../../../helper/baseURL'
import ProductCard from '../../../components/cards/ProductCard'
import TableA from '../../../components/adminComp/table/Table'

const Dashboard = () => {

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
   <AdminLayout>
      <div>
        <div className='flex gap-10 max-md:flex-wrap'>
          <AdminStatsCard/>
          <AdminStatsCard/>
          <AdminStatsCard/>
          <AdminStatsCard/>
        </div>
        <div className='mt-15'>
          <div className='flex justify-between'>
          <SectionHeading para="Recent Products"/>
          <span className='text-green-500'>View All</span>
          </div>
          <div className='mt-13 flex justify-between'>

           {products.slice(0, 3).map((item, i) => (
             <div key={item._id} >
                <ProductCard
                  image={item?.image[0]}
                  title={item.name.slice(0, 22) + "..."}
                  subtitle={item.description.slice(0, 28) + "...."}
                  price={item?.discountPrice}
                  badge={item.badge}
                  id={item._id}
                  isNavigate={false}
                  />
              </div>
            ))}
            </div>
        </div>
        <div>
          <TableA/>
        </div>
      </div>
   </AdminLayout>
  )
}

export default Dashboard