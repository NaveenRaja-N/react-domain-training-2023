import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setCurrentContent, setWarningModalStatus} from '../../slices/blogSlice';
import styles from './ContentCard.module.scss'

export const ContentCard = ({content}) => {
  const dispatch = useDispatch();
  const {addNewBlogActive,isEditingStatus,selectedContent} = useSelector(state => {
    return state.blogs;
});
console.log(selectedContent);
const individualCardHandler=()=>{
  if(isEditingStatus||addNewBlogActive){
    dispatch(setWarningModalStatus(true));
  }else{
  dispatch(setCurrentContent(content))
  }
}
  return (
    <div className={(selectedContent===content)?styles.selected:''} onClick={()=>individualCardHandler()} >
      <h3>{content.title}</h3>
      <h4>{content.type}</h4>
      <p>{content.details}</p>
    </div>
  )
}


export default ContentCard;