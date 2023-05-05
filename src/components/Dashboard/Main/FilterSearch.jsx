import React, { useState, useCallback, useEffect, useRef } from 'react';
import style from './style.module.scss';
import debounce from 'lodash.debounce';

 export const list = [
    { name:'дате',
      sortTypeProp: 'date'
    },
    { name:'статусу',
      sortTypeProp: 'status'
    },
    { name:'тематике',
      sortTypeProp: 'theme'
    },
    ];


const FilterSearch = () => {
    //sort
    const [isopen, setIsopen] = useState(false)
    // const sort = useSelector(state => state.filter.sort)
    // const dispatch = useDispatch()
    const sortRef = useRef()

    const handleSortSelection=(i)=>{
      // dispatch(setSortType(i))
      setIsopen(false)
    }

    // useEffect(() => {
    //   const handleBodyClick = (event) => {
    //     if (!event.path.includes(sortRef.current)) setIsopen(false)
    //   }
    //   document.body.addEventListener('click', handleBodyClick)

    //   return () => {
    //     document.body.removeEventListener('click', handleBodyClick)
    //   }
    // },[])

    //search
    const [value, setValue] = useState('')

    // const inputDebounce = useCallback(
    // debounce((value)=>{
    //   setSearch(value);
    //   },400),
    // [])
    
    const onChangeInput =(e)=>{
        setValue(e.target.value)
        // inputDebounce(e.target.value)
    }
  return (
    <div className={style.filter_search_header}>
      <div className={style.search}>
      <input 
      type="text" 
      placeholder="Введите название"
      className='focus:ring-0'
      value={value}   
      onChange={onChangeInput}/>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.3333 9.33333H9.80667L9.62 9.15333C10.2733 8.39333 10.6667 7.40667 10.6667 6.33333C10.6667 3.94 8.72667 2 6.33333 2C3.94 2 2 3.94 2 6.33333C2 8.72667 3.94 10.6667 6.33333 10.6667C7.40667 10.6667 8.39333 10.2733 9.15333 9.62L9.33333 9.80667V10.3333L12.6667 13.66L13.66 12.6667L10.3333 9.33333ZM6.33333 9.33333C4.67333 9.33333 3.33333 7.99333 3.33333 6.33333C3.33333 4.67333 4.67333 3.33333 6.33333 3.33333C7.99333 3.33333 9.33333 4.67333 9.33333 6.33333C9.33333 7.99333 7.99333 9.33333 6.33333 9.33333Z" fill="#4F5B67"/>
        </svg>
      </div>
          <div className={style.sort} ref={sortRef} >
              <div className={style.sort__label} >
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"
                  />
                </svg>
                <p>Сортировка по: </p>
                {/* <span onClick={()=>setIsopen(!isopen)} >{list.name}</span> */}
                 <span onClick={()=>setIsopen(!isopen)} >дате</span>
              </div>
               {isopen &&  
               <div className={style.sort__popup}>
                  <ul>
                    {list.map((item,i) =>(
                      <li key={i} className={list.sortTypeProp === item.sortTypeProp ? 'active': ''} onClick={()=>handleSortSelection(item)}>{item.name}</li>
                    ))}
                  </ul>
                </div>} 
            </div>
    </div>
  )
}

export default FilterSearch;