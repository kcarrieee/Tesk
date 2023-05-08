import React, { useState } from 'react';
import Layout from '../components/Shared/Layout/Layout';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

const NotFound = () => {
    const [loading, setLoading] = useState(true);
  return (
    <>
    <Layout>
        <div className='containerr'>
            <div className='flex justify-center flex-col text-center mt-10'>
                <h1 className='text-2xl mb-2 md:text-4xl'>ОOPS</h1>
                <h1 className='text-2xl md:text-4xl mb-2 text-[#9D9D9D]'>Что то пошло не так.</h1>
                <Link to='/' className='underline mb-0'>Вернуться обратно</Link>
            </div>
        </div>
                
     <div className='h-[75vh] md:w-full md:h-screen'>
               {loading && <div role="status" className="w-full h-full">
                            <div className=" flex items-center justify-center w-full h-full bg-gray-300 rounded ">
                                <svg className="w-24 h-24 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 1000 800"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                            </div>
                            <span className="sr-only">Loading...</span>
                         </div>}
                <Spline 
                onLoad={() =>setLoading(false)} 
                scene="https://prod.spline.design/HKmOGyoh1AvllEs0/scene.splinecode"/>
            </div>
    </Layout>
     </>
  )
}

export default NotFound;