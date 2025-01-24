import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';

const Calender = () => {
    const [value, onChange] = useState<Value>(new Date());

    console.log(value)

    return (
      <div>
        <Calendar onChange={onChange} value={value} />
        {value.toString()}
      </div>
    );
}

export default Calender