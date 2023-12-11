import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/button/Button';
import { setEditStatus, modifyBlogDetails } from '../../slices/blogSlice';
import style from './BlogDetails.module.scss';

export const BlogDetails = () => {
  const titleRef = useRef();
  const descRef = useRef();
  const dispatch = useDispatch();
  const { warningModalStatus, selectedContent, isEditingStatus } = useSelector(state => {
    return state.blogs;
  });
  const saveContent = () => {
    const titleContent = titleRef.current.value;
    const descContent = descRef.current.value;
    if (titleContent.trim().length <= 0 || titleContent.trim().length > 50 || descContent.trim().length <= 0) { }
    else { dispatch(modifyBlogDetails({ title: titleContent, details: descContent })); }
  }

  const blogDetailsEditHandler = (status) => {
    dispatch(setEditStatus(status));
  }

  useEffect(() => {
    if (isEditingStatus && !warningModalStatus) { titleRef.current.focus(); }
  }, [isEditingStatus, warningModalStatus]);

  return (
    <div className={style.individualContent}>
      <img src={selectedContent?.photo} />
      <textarea ref={titleRef} className={isEditingStatus ? `${style.blogTitle} ${style.border}` : `${style.blogTitle}`} value={isEditingStatus ? undefined : selectedContent?.title} readOnly={!isEditingStatus} />
      <textarea ref={descRef} className={isEditingStatus ? `${style.details} ${style.border}` : `${style.details}`} value={isEditingStatus ? undefined : selectedContent?.details} readOnly={!isEditingStatus} />
      <div className={style.editButtonContainer}>

        {!isEditingStatus ?
          <Button name={'EDIT CONTENT'} onClick={() => blogDetailsEditHandler(true)} style={style.editButton} /> : <>
            <Button name={'CANCEL'} onClick={() => blogDetailsEditHandler(false)} style={style.cancelButton} />
            <Button name={'SAVE CONTENT'} onClick={() => saveContent()} style={style.saveContentButton} />
          </>}
          
      </div>
    </div>
  )
}

export default BlogDetails;
