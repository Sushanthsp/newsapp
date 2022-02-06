import React from 'react';
import loading from './loading.gif'

const Spinner =()=> {
   
      return <div className='text-center' style={{left: "50%",
        marginTop: "17%"}}>
        <img src={loading} alt="loading" />
    </div>;
   
}

export default Spinner;
