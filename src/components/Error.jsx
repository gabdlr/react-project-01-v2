import React, { useState, useEffect} from 'react';
const Error = ({mensaje}) => {
    return ( 
        <div className='bg-red-800 p-2 mb-3 rounded'>
        <p className='text-center text-white'>{mensaje}</p>
        </div>
     );
}
 
export default Error;