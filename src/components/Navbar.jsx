import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
   return (
      <div>
         <NavLink className="link" to="/products">Products</NavLink>
         <NavLink className="link" to="/cart">Cart</NavLink>
         <style jsx={"test"}>
            {`
            .link{
               display:block
            }
            `}
         </style>
      </div>
   );
};

export default Navbar;