import PropTypes from 'prop-types';
import style from './Card.module.css'; 
import Button from "../Button/Button";
import {CardConstants} from '../../constants/pageConstants'
const Card=({data={}})=> {
  // const ele=props.data;
  return (
   
    <div className={style.container}>
      <img
      src= {`../../assets/images/${data.city}.png`}
        alt={CardConstants.IMAGE_ALTER_TAG}
      ></img>
      <h3>{data.place}</h3>
      <h4>{data.city}</h4>
      <p>{data.shortDescription}</p>
      <Button name={CardConstants.BUTTON_NAME} path={`/details/${data.city}`}></Button>
    </div>
    
  );
}

export default Card;

Card.prototype={
  data:PropTypes.object.isRequired
}