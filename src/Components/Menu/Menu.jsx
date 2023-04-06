import React, { useState } from 'react'
import "./Menu.css"
import Button from '../UI/Button'
import Card from '../UI/Card'
import Orders from './Orders'


const Menu = () => {

    const [orders,setOrders]=useState([])
    const [dishname,setDishname]=useState('')
    const [dishprice,setDishprice]=useState('')

    const [tableno,setTableno]=useState('')


    const submitHandler=(e)=>{
        e.preventDefault();
        setOrders([...orders,{ dishname, dishprice, tableno }  ])
    }
  
   const deleteOrders=(index)=>{
    const filteredArr=orders.filter((val,i)=>{
        return i!==index
    })
    setOrders(filteredArr)
   }
  return (
    <div>
         <Card className='input'>
        <form  onSubmit={submitHandler}>
        <label htmlFor='dishname'>Dish Name</label>
        <input id='dishname' type='text' 
        value={dishname} 
        onChange={(e)=>setDishname(e.target.value)}  
        />
        <label htmlFor='dishprice'>Dish Price</label>
        <input id='dishprice' type='text'  
         value={dishprice} 
         onChange={(e)=>setDishprice(e.target.value)} 
        />
        <label htmlFor='Tableno'>Table no.</label>
        <select name="Table" id="tableno." 
         value={tableno} 
         onChange={(e)=>setTableno(e.target.value)} 
        >
        <option value="table 1">Table 1</option>
        <option value="table 2">Table2</option>
        <option value="table 3">Table 3</option>
        </select>
        <Button type='submit'>
            Add Bill
        </Button>

    </form>
    </Card>
    {orders.map((item,index)=>(
        <Orders key={index} dishname={item.dishname} dishprice={item.dishprice} tableno={item.tableno}
        deleteOrders={deleteOrders}
        index={index}/>
    ))}
    </div>
   
    
  )
}

export default Menu