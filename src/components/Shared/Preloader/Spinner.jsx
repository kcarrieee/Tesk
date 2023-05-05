import React from 'react';
import ReactLoading from "react-loading";

const Spinner = () => {
  return (
    <div className='w-fill h-screen flex items-center justify-center bg-white fixed inset-0'>
      <ReactLoading type="bubbles" color="#000" />
    </div>
  )
}

export default Spinner