import React from 'react'
import "./Menu.css"
import Button from '../UI/Button'
import Card from '../UI/Card'


const Menu = () => {
  return (
    <Card className='input'>
        <form >
        <label htmlFor='dishname'>Dish Name</label>
        <input id='dishname' type='text'  />
        <label htmlFor='dishprice'>Dish Price</label>
        <input id='dishprice' type='text'  />
        <label htmlFor='Tableno.'>Table no.</label>
        <select name="Table" id="tableno.">
        <option value="table 1">Table 1</option>
        <option value="table 2">Table2</option>
        <option value="table 3">Table 3</option>
        </select>
        <Button type='submit'>
            Add Bill
        </Button>

    </form>
    </Card>
  )
}

export default Menu