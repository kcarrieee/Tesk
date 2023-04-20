import React, { useState } from 'react';
import Text from '../../Shared/Text/Text';
import styles from './Modal.module.css';
import Plus from './Plus.svg';
import FileSvg from './File.svg';
// import { services } from './ServicesList';




const Modal = () => {
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    comment: '',
    attachments: files,
  });

  const { name, number, email, comment } = formData;

  const onMutate = ( e ) => {

        let boolean = null;
        const target = e.target;

        if (target.value === 'true') {
            boolean = true
        }

        if (target.value === 'false') {
            boolean = false
        }

        const file = target.files;

        if(target?.files !== null && file){
             const newFile = target.files[0];
             
             setFiles([...files, newFile])
             setFormData((prevState) => ({
                ...prevState,
                attachments: files  
            }))
        }

        if (!file) {
          setFormData((prevState) => ({
              ...prevState,
              [target.id]: boolean ?? target.value
          }));
        }
    }


    const onSubmit = (e) => {
      e.preventDefault();
    }

  return (
    <>
        <section className={styles.modal}>
        <Text tag='p' color='gray'>Обратная связь</Text>
        <form onSubmit={onSubmit}>
          <div className={styles.heading}>
            <Text tag='h3' color='black'>Tesk поможет вам в этом.</Text>
            {/* <Text tag='h3' color='black'>Обязательные поля:</Text> */}
          </div>
          <div className={styles.input_group}>
            <input 
                type='text' 
                required
                id='name'
                autoComplete='off'
                placeholder='Имя' 
                value={name}
                onChange={onMutate}
                />
            <input 
                type='text' 
                required
                id='number'
                autoComplete='off'
                placeholder='Номер'
                value={number}
                onChange={onMutate}
                />
            <input 
                type='text' 
                required
                id='email'
                autoComplete='off'
                placeholder='E-mail' 
                value={email}
                onChange={onMutate}/>
          </div>
            {/* <Text tag='h3' color='black'>Выберите услугу:</Text>
            <div className={styles.input_services}>
            {services.map((service, i) => (
               <label 
                className={styles.checkbox}
                key={service.id}
                >
                <input 
                  type="checkbox"
                  value={service.text}
                  onChange={handleCheck}
                  id={`${i}`}
                  />
                <Text tag='p' color='black' className={styles.checkbox_text}>
                  {service.text}
                </Text>
              </label>
            ))}
            </div> */}
         
            <Text tag='h3' color='black'>Дополнительная информация:</Text>
            <div className={styles.textarea}>
               <textarea
                  id='comment'
                  value={comment}
                  onChange={onMutate}
                  autoComplete='off'
                  placeholder='Комментарий'
                />
            </div>
            <div>
              {files?.map((file, i) => (
                <div key={i} className={styles.file}>
                  <i><img src={FileSvg} alt="svg" /></i>
                  <div className={styles.file_description}>
                  <p>{file?.name}</p>
                  <p>{file?.size} КБ</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.files_input}>
              <div className={styles.upload_btn}>
              <i><img src={Plus} alt="plus" /></i>
              <p>Добавть файл</p>
              </div>
              <input 
                type='file'
                onChange={onMutate}
                max='6'
                id='attachments'
                name='attachments'
                accept='.doc,.docx,.pdf'
                multiple
              />
            </div>
             <div className={styles.agreement}>
                <label htmlFor="agreement" className={styles.red_checkbox}>
                  <input 
                    type="checkbox" 
                    id='agreement'
                    name='agreement' 
                    required
                  />
                  <div></div>
                  <Text tag='p' color='black'>Я принимаю пользовательское соглашение</Text>
                </label>
              </div>
            {/* <Button color='red' type='submit'>
              Отправить
            </Button> */}
            <button>send</button>
        </form>
      </section>
    </>
  );
}

export default Modal;