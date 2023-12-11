import React from 'react'
import Loader from '../loader/loader';
import MemberCard from '../memberCard/MemberCard';
import styles from './MemberListCard.module.scss'

export const MemberListCard = ({memberList,loader}) => {
 
 const usersDataList = memberList?.map(user => <MemberCard {...user} key={user.id}/>);
   
  return (
   <> {!loader?
    <>
            <p className={styles.modalTitle}>Members</p>
            <div className={styles.memberCardWrapper}>
                {usersDataList}
            </div>
        </>:<Loader/>}</>
  )
}
 export default MemberListCard;