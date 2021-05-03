import React, {useState} from 'react';

export default function TextInput(props) {
  const [value, setValue] = useState(props.value);
  return (
    <div className="text-input" >
      <p>{props.heading}</p>
      <input type={props.type} value={value} onChange={event => {setValue(event.target.value); props.setValue(event.target.value) }} className="text-input-height" />
    </div>
  )
}