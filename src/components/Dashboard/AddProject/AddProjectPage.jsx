import React, { useEffect } from 'react';
import style from './style.module.scss';
import { useState } from 'react';
import Datepicker from "tailwind-datepicker-react";
import { options } from './Options';
import { Tooltip } from 'flowbite-react';
import Select from "react-select";
import { useNavigate } from 'react-router-dom';
import { useCollection } from '../../../hooks/useCollection';
import { useAuthContext } from "../../../hooks/useAuthContext";
// import { useFirestore } from "../../../hooks/useFirestore";
import { serverTimestamp, getDocs, collection } from 'firebase/firestore';
import { db } from '../../../firebase.config';
// import { toast } from 'react-toastify';
import { getAuth } from "firebase/auth";
import question  from './icons/QuestionMark.svg';


const Picker = () => {
	const [show, setShow] = useState(false);

	const handleChange = (selectedDate) => {
		console.log(selectedDate)
	}
	const handleClose = (state) => {
		setShow(state)
	}
	return (
		<div>
			<Datepicker 
            options={options} onChange={handleChange} show={show} setShow={handleClose} />
		</div>
	)
}

const AddProjectPage = () => {
  
    const [theme, setTheme] = useState(0);
    const [projectForm, setProjectForm] = useState({
        name: '',
        startDate: '',
        dueDate: '',
        details:'',
        status: 'Разработка',
        theme,
        users: [],
        links: [],
        tags:[]
    })

    const { name, tags, startDate, dueDate, details, status, links} = projectForm;

     const onChange = (e) => {
        setProjectForm((prevState)=>(
        {...prevState,
        [e.target.id]: e.target.value,
        }))
    }
    const auth = getAuth();
    const navigate = useNavigate();
    // const { addDocument, response } = useFirestore("projects");
    const { documents } = useCollection("users");

    

    const [users, setUsers] = useState([]);

    const { user } = useAuthContext();

    const [assignedUsers, setAssignedUsers] = useState([]);
    const [formError, setFormError] = useState(null);

    useEffect(() => {
        const fetchInfo = async ()=> {

        const usersRef = collection(db, 'users')
        const docsUsers = await getDocs(usersRef)

        if (docsUsers) {
                    const options = [...docsUsers].map((user) => {
                        return { value: user.name, label: user.displayName };
                    });
                    setUsers(options);
                }
        }

        fetchInfo()
        console.log(users)
    }, [])

        // const fetchInfo = async ()=> {
        // const userRef = collection(db, 'users');
          

        //     const docSnap = await get(userRef);
        //     const data = docSnap.data();

        //     // if (data) {
        //     //     const options = data.map((user) => {
        //     //         return { value: user, label: user.displayName };
        //     //     });
        //     //     setUsers(options);
        //     // }
        //     console.log(data)
        //     }

        //     fetchInfo();
            
            
                
    
//   }, []);

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

    if (assignedUsers.length < 1) {
      setFormError("Добавьте участников");
      return;
    }

    setFormError(null);

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const assignedUsersList = assignedUsers.map((user) => {
      return {
        displayName: user.value.displayName,
        photoURL: user.value.photoURL,
        id: user.value.id,
      };
    });

    const project = {
      ...projectForm,
      timestamp: serverTimestamp(),
      createdBy,
      assignedUsersList,
      tasks: [],
    };

    // await addDocument(project);
    // if (!response.error) {
    //   navigate("/dashboard");
    // }
  };

//   console.log(response);


  return (
    <form className={style.form} onSubmit={handleSubmit}>
		<div>
            <div className={style.block}>
        <h3>Общая информация:</h3>
		<div className='input_group'>
			<input 
            id='name'
            value={name} 
            onChange={onChange}
            className='focus:ring-0' type="text" placeholder='Название проекта' />
		</div>
        </div>
		<div className={style.block}>
			<p>Дата начала:</p>
           <div>
			<Picker/>
		</div>
		</div>
		<div className={style.block}>
			<p>Дата окончания:</p>
			<div>
			<Picker/>
		</div>
		</div>
		<div className={style.block}>
		<h3> Описание проекта:</h3>
		   <textarea
           className={`${style.details} focus:ring-0`} 
           value={details}
           id='details'
           onChange={onChange}
           ></textarea>
		</div>
		</div>
		<div>
            <div className={style.block} >
                <div className={style.heading}>
                    <h3>Участники проекта</h3>
                </div>
                <Select
                    placeholder='Выберите участников'
                    options={users}
                    onChange={(option) => setAssignedUsers(option)}
                    isMulti
                />
                </div>
            <div className={style.block} >
			  <h3>Статус проекта</h3>
                    <select
                        id="status"
                        name="status"
                        value={status}
                        onChange={onChange}
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
                            className={theme === i ? style.active : ''}
                            onClick={() => setTheme(i)}
                            >{item}</div>
                        ))}
                    </div>
                </div>
                <div className={style.block}>
                    <div className={style.heading}>
                        <h3>Ссылки</h3> 
                        <Tooltip  content="Разделите ссылки запятой" style="light" animation="duration-500" >
                            <span>
                              <img src={question} alt="question" />
                            </span>
                        </Tooltip>
                    </div>
                   
                        <div className='input_group'>
                          <input type="text" id='links' className='focus:ring-0 w-full' value={links} onChange={onChange} placeholder='https://www.google.com'/>
                          </div>
                </div>
                 <div className={style.block}>
                    <div className={style.heading}>
                        <h3>Тэги</h3> 
                        <Tooltip  content="Разделите тэги запятой" style="light" animation="duration-500" >
                            <span>
                              <img src={question} alt="question" />
                            </span>
                        </Tooltip>
                    </div>
                   
                        <div className='input_group'>
                          <input type="text" id='tags' className='focus:ring-0 w-full' value={tags} onChange={onChange} placeholder='дизайн, разработка логотипа'/>
                          </div>
                </div>
                <button className='add_btn'>создать проект</button>
                {formError && <p className="error">{formError}</p>}
		</div>
    </form>

  )
}

export default AddProjectPage;