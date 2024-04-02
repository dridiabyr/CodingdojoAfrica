import React from 'react'
import { useNameContext } from './Context';


const Navbar = () => {
    const {name} = useNameContext();
  return (
    <nav>  Hi , {name} ! </nav>
     );
};

export default Navbar;