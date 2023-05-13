import React from 'react';
import style from './style.module.scss';
import { motion } from "framer-motion";

const variants = {
  hidden: { 
    opacity: 0,
    y: 10,
    transition: { staggerChildren: 0.02, staggerDirection: -1,
     ease: "linear",
      duration: 2   },
    },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.03, delayChildren: 0.01, 
    },
  },
};


const variantsLi = {
   show: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 500, velocity: -50 }
    }
  },
  hidden: {
    y: 20,
    opacity: 0,
    transition: {
      y: { stiffness: 500 }
    }
  }
};

const FilterPopUp = ({isopen, setIsopen, sortRef, handleSortSelection, list, sortType}) => {


  return (
     <div className={style.sort} ref={sortRef} >
              <div className={style.sort__label} >
                <p>Сортировка по: </p>
                 <span onClick={()=>setIsopen(!isopen)} >{sortType}</span>
              </div>
               {isopen &&  
               <motion.div 
                  animate={{opacity:1}}
                  exit={{opacity:0}}
                  className={style.sort__popup}>
                      <motion.ul  
                      variants={variants}
                      initial='hidden' 
                      animate='show'
                      exit='hidden'
                      >
                          {list.map((item,i) =>(
                            <motion.li  
                              variants={variantsLi}
                              key={i} 
                              className={list === item ? 'active': ''} 
                              onClick={() => handleSortSelection(item)}>
                                {item ==='0' ?  'дизайн' :  null}
                                {item ==='1' ?  'разработка' :  null}
                                {item ==='2' ?  'бизнес' :  null}
                                {item ==='дате' ?  'дате' :  null}
                                {item ==='мои' ?  'мои' :  null}
                            </motion.li>
                        ))}
                      </motion.ul>
                </motion.div>} 
            </div>
  )
}

export default FilterPopUp