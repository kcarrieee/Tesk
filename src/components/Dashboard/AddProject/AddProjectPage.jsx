import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import { Tooltip } from 'flowbite-react';
import Select from "react-select";
import { useNavigate } from 'react-router-dom';
import { addDoc, serverTimestamp, getDocs, collection } from 'firebase/firestore';
import { db } from '../../../firebase.config';
import { getAuth } from "firebase/auth";
import question  from './icons/QuestionMark.svg';
import { Picker, Picker2 } from './DatePicker';
import { toast } from 'react-toastify';
import Spinner from '../../Shared/Preloader/Spinner';
import split from '../../../utils/StringtoArr';
import makeAnimated from 'react-select/animated';


  const colourStyles = {
   control: (base, state) => ({
      ...base,
      boxShadow: "none",
      outline: state.isFocused && state.isSelected ? 'none' : '',
      height: 42,
      borderRadius: 8,
    
    })
    ,
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      
    }
  }
  };

const AddProjectPage = () => {
    const animatedComponents = makeAnimated();

    const auth = getAuth();
    const user = auth.currentUser;
    const [loading, setLoading] = useState(false);
    const [activeTheme, setActiveTheme] = useState(0);
    const [startDate, setStart] = useState(null);
    const [dueDate, setEnd] = useState(null);
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [status, setStatus] = useState('new');
    const [users, setUsers] = useState([]);
    const [links, setLinks] = useState(null);
    const [tags, setTags] = useState(null);
    const [assignedUsers, setAssignedUsers] = useState([]);
    const [formError, setFormError] = useState(null);
    const navigate = useNavigate();

  
  
    useEffect(() => {
        const fetchInfo = async () => {

        const usersRef = collection(db, 'users')
        const docsUsers = await getDocs(usersRef)
        let usersArr = []

        docsUsers.forEach((doc) => {
          return usersArr.push({
            data: doc.data(), id: doc.id})
        })

        if (usersArr) {
                    const options = [...usersArr].map((user) => {
                        return { value: user.data, label: user.data.name, id: user.id};
                    });
                    setUsers(options);
                }
        }

        fetchInfo();
    }, [])

    
   const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    if (!name) {
      setFormError("Введите название проекта");
      return;
    }
    if (!links) {
      setFormError("Введите ссылки");
      return;
    }
    if (!tags) {
      setFormError("Введите тэги");
      return;
    }
    if (!details) {
      setFormError("Введите описание проекта");
      return;
    }

    if (assignedUsers.length < 1) {
      setFormError("Добавьте участников");
      return;
    }
    setFormError(null);
    setLoading(true);

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const assignedUsersList = assignedUsers.map((user) => {

      return {
        displayName: user.value.name,
        photoURL: user.value.image,
        username: user.value.username,
        id: user.id,
      };
    });
    const linksArr = split(links);
    const tagsArr = split(tags);

    const project = {
      activeTheme, 
      startDate, 
      dueDate, 
      name,
      details,
      status,
      links: [...linksArr],
      tags: [...tagsArr],
      timestamp: serverTimestamp(),
      createdBy,
      assignedUsersList,
      // tasks: [],
      isImportant: false,
      isArchived: false,
    };




    const docRef = await addDoc(collection(db, 'projects'), project)
            setLoading(false)
            toast.success('Проект сохранен')
            navigate(`/dashboard`)
  };

  if(loading){
        return <Spinner/>
    }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
		<div>
            <div className={style.block}>
        <h3>Общая информация:</h3>
		<div className='input_group input_limit'>
			<input 
            maxLength={50}
            id='name'
            value={name} 
            onChange={(e) => setName(e.target.value)}
            className='focus:ring-0 placeholder-[#A7A7A7]' 
            type="text" 
            placeholder='Название проекта' />
          <span className={name.length <= 49 ? 'limit' : 'limit_error'} >{name.length}/50</span>
		</div>
        </div>
		<div className={style.block}>
			<p>Дата начала:</p>
           <div>
			<Picker setStart={setStart}/>
		</div>
		</div>
		<div className={style.block}>
			<p>Дата окончания:</p>
			<div>
			<Picker2 setEnd={setEnd}/>
		</div>
		</div>
		<div className={style.block}>
		<h3> Описание проекта:</h3>
		   <textarea
          placeholder='Расскажите про свой проект'
           className={`${style.details} focus:ring-0 placeholder-[#A7A7A7]`} 
           value={details}
           id='details'
           onChange={(e) => setDetails(e.target.value)}
           ></textarea>
		</div>
		</div>
		<div>
            <div className={style.block} >
                <div className={style.heading}>
                    <h3>Участники проекта</h3>
                </div>
                <Select
                    placeholder={<div className="select-placeholder-text">Выберите участников</div>}
                    options={users}
                    onChange={(option) => setAssignedUsers(option)}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    isMulti
                    noOptionsMessage={() => "Больше нет вариантов"}
                    components={animatedComponents}
                    styles={colourStyles}
                     theme={(theme) => ({
                    ...theme,
                    border: '1px solid black',
                    colors: {
                      ...theme.colors,
                      primary25: '#eeeff1',
                      primary: 'black',
                    },
                  })}
                />
                </div>
            <div className={style.block} >
			  <h3>Статус проекта</h3>
                    <select
                        id="status"
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        autoComplete="off"
                        className="focus:ring-0 mt-1 block w-1/2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-black  sm:text-sm"
                      >
                        <option value='new'>Новый</option>
                        <option value='process' >В процессе</option>
                        <option value='done'>Завершен</option>
                        <option value='archive'>В архиве</option>
                      </select>
                </div>
                <div className={style.block}>
				<h3>Тематика проекта</h3>
                    <div className={style.tags}>
                        {['дизайн','разработка','бизнес','образование','повседневные дела','другое'].map((item, i) => (
                            <div key={i}
                            className={activeTheme === i ? style.active : ''}
                            onClick={() => setActiveTheme(i)}
                            >{item}</div>
                        ))}
                    </div>
                </div>
                <div className={style.block}>
                    <div className={style.heading}>
                        <h3>Ссылки</h3> 
                        <Tooltip style="light"  content="Разделите ссылки запятой" animation="duration-500" >
                            <span>
                              <img src={question} alt="question" />
                            </span>
                        </Tooltip>
                    </div>
                   
                        <div className='input_group'>
                          <input type="text" id='links' className='focus:ring-0 w-full placeholder-[#A7A7A7]' value={links} onChange={(e) => setLinks(e.target.value)} placeholder='https://www.google.com, https://figma.com'/>
                          </div>
                </div>
                 <div className={style.block}>
                    <div className={style.heading}>
                        <h3>Тэги</h3> 
                        <Tooltip  style="light" content="Разделите тэги запятой"  animation="duration-500" >
                            <span>
                              <img src={question} alt="question" />
                            </span>
                        </Tooltip>
                    </div>
                   
                        <div className='input_group'>
                          <input type="text" id='tags' className='focus:ring-0 w-full placeholder-[#A7A7A7]' value={tags} onChange={(e) => setTags(e.target.value)} placeholder='дизайн, разработка, логотип'/>
                          </div>
                </div>
                
                <button className='add_btn'>создать проект</button> {formError && <span className="text-red-500 text-xs m-2">{formError}</span>}
		</div>
    </form>

  )
}

export default AddProjectPage;