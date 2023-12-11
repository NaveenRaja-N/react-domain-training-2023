import React, { useEffect } from 'react';
import styles from './ContentContainer.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { searchContent, setWarningModalStatus, setAddNewBlogStatus, setEditStatus } from '../../slices/blogSlice';
import { getBlogs } from '../../store/index'
import ContentCard from '../../components/content/ContentCard';
import Button from '../../components/button/Button';

export const ContentContainer = () => {

  const dispatch = useDispatch();
  const { blogData, addNewBlogActive, searchTermBlog, isSearchActive, filters, filteredBlogData, isEditingStatus ,isLoad} = useSelector(state => {
    return state.blogs;
  });

  useEffect(() => {
    dispatch(getBlogs())
  }, [dispatch])

  const searchHandler = (e) => {
    dispatch(searchContent(e.target.value))
  }

  const focusHandlers = () => {
    if (isEditingStatus) {
      dispatch(setWarningModalStatus(true))
    }
  }
  const addNewBlogsHandler = () => {

    if (isEditingStatus || addNewBlogActive) {
      dispatch(setWarningModalStatus(true))
    }
    else {
      dispatch(setAddNewBlogStatus(true));
    }
  }
console.log(isLoad);
  const content = filteredBlogData?.map((ind, key) => <ContentCard key={key} content={ind} />)
  return (
    <div className={styles.contentContainer}>
      <div className="content-header">
        <input type="text" id="search" placeholder="Search Blogs" onChange={(e) => searchHandler(e)} onFocus={() => focusHandlers()} readOnly={isEditingStatus} />
        <Button name={'NEW'} onClick={() => addNewBlogsHandler()} />
      </div>
      <div className={styles.content}>
        {content}
      </div>
    </div>


  )
}

export default ContentContainer;
