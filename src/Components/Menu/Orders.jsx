import React from 'react'
import "./Orders.css"

const Orders = ({dishname, dishprice, tableno,deleteOrders,index}) => {

   
  return (
    <div classname="orders">
        <div>
        <p>{dishname}</p>
        <span>{dishprice}</span>
        <h5>{tableno}</h5>
        
        </div>
        <button  onClick={() => deleteOrders(index)}>Delete</button>
       
    </div>
  )
}

export default Orders