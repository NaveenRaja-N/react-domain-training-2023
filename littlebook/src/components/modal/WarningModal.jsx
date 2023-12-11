import React from 'react';
import style from './WarningModal.module.scss'
import Button from '../button/Button';
import {setWarningModalStatus,setEditStatus,setAddNewBlogStatus,setDisplayMembers} from '../../slices/blogSlice'
import { useDispatch, useSelector } from 'react-redux';
import {} from '../../slices/blogSlice'

export const WarningModal = () => {
    const {addNewBlogActive,isDisplayMember} = useSelector(state => {
        return state.blogs;
    });
    const dispatch=useDispatch();
    const continueHandler = () => {
        if(addNewBlogActive||isDisplayMember){
            dispatch(setAddNewBlogStatus(false))
            dispatch(setDisplayMembers(false))
        }
        dispatch(setWarningModalStatus(false));
        dispatch(setEditStatus(false));

    };

    const cancelHandler = () => {
        if(!addNewBlogActive){
        dispatch(setEditStatus(true))
        }
        dispatch(setWarningModalStatus(false));
    }
   return (
    <div className={style.modalcontainerWapper}>
        <div className={style.modalContainer}>
            <div className={style.modalContent}>
                <p className={style.modalTitle}>{'Click continue to cancel the editing....!'}</p>
                <div className={style.buttonsContainer}>
                    <Button className="cancelButton" onClick={cancelHandler} name={'CANCEL'} style={style.cancelButton}></Button>
                    <Button className="continueButton" onClick={continueHandler} name={'CONTINUE'} style={style.continueButton}></Button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default WarningModal;