import React, { useState } from 'react'

import { useSelector } from 'react-redux';
import OrderSummery from '../components/OrderSummery';
import AmountSummary from '../components/AmountSummary';
import CustomizedDrink from '../components/CustomizedDrink';

const OrderCart = () => {

  // const {Card_Items} = useSelector((state) => state.Menu)

//   const [selectedShippingCosts , setselectedShippingCosts] = useState(0)

//   const handleShippingCharge = (event) =>{
// setselectedShippingCosts(parseFloat(event.target.value))
//   }

//     const calculateTotal = () => {
//       const subtotal = Card_Items.reduce((sum, item) => sum + item.price * item.quantity, 0);
//       const shippingCost = selectedShippingCosts
//       const tax = (subtotal + shippingCost) * 0.08;
//       return { subtotal, shippingCost, tax, total: subtotal + shippingCost + tax };
//     };

  return (
    <> 

    <div data-aos="fade-up" className="min-h-screen bg-white mt-15">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">       
         
         {/* Order Summary */}
         <OrderSummery />

          {/* Amount Summary */}
        <AmountSummary />

        </div>

        {/* Customize Drink Section */}
       <CustomizedDrink />
      </main>

     
    </div>
        </>
  )
}

export default OrderCart
