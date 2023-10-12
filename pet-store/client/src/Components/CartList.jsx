import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from '../App.jsx'


const CartList = ({ item, fetchAllCartItems }) => {

    const user = useContext(UserContext)

    const removeFromCart = async (userID, productID) => {

        try {
            await axios.delete("http://localhost:3000/api/carts/" + userID + "/" + productID)
            fetchAllCartItems()

        } catch (error) {
            console.log(error)

        }

    }



    return (

        <div className="cart-item">
            <span>Product Name: {item.name} </span>
            <span>Price: ${item.price}</span>
            <button className="cart-list-button" onClick={() => { removeFromCart(user, item.id) }}>Remove</button>
        </div>
    )

}


export default CartList