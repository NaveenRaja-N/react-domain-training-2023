import React, { useRef } from 'react'
import Button from '../button/Button';
import style from './CreateNewBlogs.module.scss'
import { useDispatch } from 'react-redux';
import { setWarningModalStatus, setEditStatus, addNewBlog, setAddNewBlogStatus } from '../../slices/blogSlice'


const CreateNewBlogs = () => {
    const titleRef = useRef();
    const detailsRef = useRef();
    const dispatch = useDispatch();
    const createBlog = () => {
        const titleContent = titleRef.current.value.trim();
        const detailContent = detailsRef.current.value.trim();
        if (!titleContent.length <= 0 || !detailContent.length <= 0) {
            dispatch(addNewBlog({ title: titleContent, details: detailContent, photo: 'https://himalyantrips.com/wp-content/uploads/2019/03/travel-and-tourism.jpg', type: 'local' }));
            dispatch(setAddNewBlogStatus(false));
        }
    }
    return(
        <>
         <p className={style.modalTitle}>{'Add New Blog'}</p>
                <div className={style.inputContainer}>
                    <input ref={titleRef} type='text' className={style.blogTitle} placeholder={'Name your blog'} />
                    <textarea ref={detailsRef} className={style.blogDetails} placeholder={'Write Content Here  ....'} />
                </div>
                <div className={style.buttonContainer}>
                    <Button name="ADD" onClick={createBlog}></Button>
                </div>
        </>
    )
}

export default  CreateNewBlogs