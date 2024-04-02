import React from 'react'
import { NameProvider } from './Context';
import Navbar from './Navbar';
import Form from './Form';

const Wrapper = () => {
  return (
   
          <NameProvider>
      <div>
        <Navbar />
        <Form />
      </div>
    </NameProvider>
  );
}

export default Wrapper