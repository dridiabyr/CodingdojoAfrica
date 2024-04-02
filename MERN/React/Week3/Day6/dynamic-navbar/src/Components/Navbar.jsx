import React from 'react'
import { useNameContext } from './Context';

const style ={ 
    background :"purple"
}
const Navbar = () => {
    
    const {name} = useNameContext();
  return (
    <div style={style}> Hi , {name} !</div>
     );
};

export default Navbar;