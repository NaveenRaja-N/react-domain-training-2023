import React from 'react'
import FilterButton from '../../components/filter/FilterButton';
import style from './Sidebar.module.scss'
import { useDispatch, useSelector } from 'react-redux';
// import { saveBlogs,searchContent ,filterOptions} from '../slices/blogSlice';
import {toggleFilter,setWarningModalStatus,setDisplayMembers} from '../../slices/blogSlice'
import Button from '../../components/button/Button';
import { ThemeContext } from '../../App';
import { useContext } from 'react';

export const Sidebar = ({showMembers}) => {
  const dispatch = useDispatch();
  const {addNewBlogActive,filters,checkBlogs,isEditingStatus} = useSelector(state => {
    return state.blogs;
});
const {theme, toggleTheme} = useContext(ThemeContext);
  const toggleHandler=(blogType)=>{
       if(!isEditingStatus){
       dispatch(toggleFilter(blogType));
       }
  }
  
  const displayMembers=()=>{
   showMembers();
   dispatch(setDisplayMembers(true));
}
 
    const filterButton=filters?.map((ele,ind)=><FilterButton name={`${ele}  Blogs`} key={ind} onChange={toggleHandler}/>);
  return (
    <>
   <div className={style.sideBarContainer}>
    <h2><span>Little </span>Book</h2>
    <div className={style.checkBoxContainer}>
        <h3>FILTER</h3>
       {filterButton}
    </div>
    <div className={style.sideBarLink}>
      <Button onClick={displayMembers} name={'View Members'}/>
       <Button onClick={()=>toggleTheme()} name={theme === 'light' ? 'Switch to Dark Mode':'Switch to Light Mode'}/>
    </div>
</div>

</>
  )
}


export default Sidebar;
