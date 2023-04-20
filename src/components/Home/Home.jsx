import React, {useEffect, useRef, useState} from 'react';
import Layout from '../Shared/Layout/Layout';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Accordion from './QandA/Accordion';
import Workflow from './Workflow/Workflow';
import Gallery from './Gallery/Gallery';
import Preloader from '../Shared/Preloader/Preloader';
import Features from './Features/Features';


const Home = () => {
   const [preloader, setPreloader] = useState(true);
   const [timer, setTimer] = useState(2);
   const id = useRef(null);

   const clear = () => {
      window.clearInterval(id.current);
      setPreloader(false);
   }

   useEffect(() => {
      id.current = window.setInterval(() => {
         setTimer((timer) => timer - 1)
      }, 1000)

   },[])

   useEffect(() => {
      if(timer === 0) clear()
   },[timer])

  return (
   <>
   { preloader ? <Preloader/> :(
            <>
               <Layout>
               <Hero/>
               <Workflow/>
               <Projects/>
               <Gallery/>
               <Features/>
               <Accordion/>
               </Layout>
            </>
     )}
   </>
  );
}

export default Home;