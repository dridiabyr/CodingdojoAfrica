import React, { useEffect, useState } from 'react'
import PersonList from '../components/PersonList';
import axios from 'axios';
import ProductForm from '../components/productForm';
    
const Main = (props) => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    
    return (
        <div>
           <ProductForm/>
           <hr/>
           {loaded && <PersonList product={product}/>}
        </div>
    )
}
    
export default Main;

