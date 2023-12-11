import React from 'react'
import styles from './MemberCard.module.scss'

export const MemberCard = (props) => {
    const {name, username, photo, company} = props;
  return (
    <div className={styles.memberCard}>
      <div className={styles.membersImg}>
      <img src={`${`https://jsonmockserver.vercel.app/`}/${photo}`} alt={username} className="memberImage"/>

      </div>
    <p className={styles.memberName}>{name}</p>
    <p className={styles.company}>{company.name}</p>
    </div>
  )
}
export default MemberCard; 