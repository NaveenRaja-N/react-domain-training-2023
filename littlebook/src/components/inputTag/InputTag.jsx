import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setWarningModalStatus} from '../../slices/blogSlice'

export const InputTag = ({name,onChange}) => {
  const depatch=useDispatch();
  const inputRef = useRef(null);
  const {addNewBlogActive,filters,checkBlogs,isEditingStatus} = useSelector(state => {
    return state.blogs;
});
  const toggleHandler=()=>{
    if(isEditingStatus||addNewBlogActive){
      inputRef.current.checked = !inputRef.current.checked;
      depatch(setWarningModalStatus(true));
    }
    else{
    onChange(name.slice(0, -7))
    }
  }

  return (
    <input ref={inputRef} id={name} type="checkbox" defaultChecked={true} name={name} value={name} onChange={toggleHandler} readOnly={!isEditingStatus}/>
  )
}

 export default InputTag;
