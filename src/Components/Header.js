import React from 'react'
import binodChaudhary from "../assets/binodChaudhary.jpg"
import "../style.css"
const Header = (props) => {
  const {newPrice}=props;
  return (

    <div className='header'>
        <img src={binodChaudhary} alt="Binod Chuadhary" className="imageSection" />
        <h3 className="binodChaudharyName">
            Spend Binod Chaudhary Money
        </h3>
        <div className='netValue'>
            <h3>Rs. {newPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
        </div>
    </div>
  )
}

export default Header