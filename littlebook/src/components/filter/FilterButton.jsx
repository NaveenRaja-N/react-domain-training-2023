import React from 'react'
import Label from '../label/Label';
import InputTag from '../inputTag/InputTag';

export const FilterButton = ({name,onChange}) => {
            

  return (
    <div>
           <InputTag name={name} value={name} onChange={onChange}/>
            <Label htmlFor={name}/> 
    </div>
  )
}

export default FilterButton;


