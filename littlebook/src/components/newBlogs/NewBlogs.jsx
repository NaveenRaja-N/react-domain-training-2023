import React, { useRef } from 'react'
import Button from '../button/Button';
import style from './NewBlogs.module.scss'
import { useDispatch } from 'react-redux';
import { setWarningModalStatus, setEditStatus, addNewBlog, setAddNewBlogStatus } from '../../slices/blogSlice'
import CreateNewBlogs from '../createNewBlogs/CreateNewBlogs';
import MemberListCard from '../memberList/MemberListCard';

export const NewBlogs = ({memberList,isDisplayMember,loader}) => {
    const titleRef = useRef();
    const detailsRef = useRef();
    const dispatch = useDispatch();
    
    const removeAddNewBlogHandler=()=>{
        dispatch(setWarningModalStatus(true))
    }
    return (
        <div className={style.blogContainer} >
            <div className={style.fadeContainer} onClick={removeAddNewBlogHandler}>
             
            </div>
            <div className={style.createBlogContainer}>
            {isDisplayMember?
      <MemberListCard memberList={memberList} loader={loader}/>:<CreateNewBlogs/>}
               
            </div>
        </div>
    )
}

export default NewBlogs;