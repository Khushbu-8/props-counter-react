import React from 'react'

const Count = ({no,plus,minus,reset}) => {
  return (
    <div align="center">
      <h1>Counter App</h1>
      <h1>Count  : {no}</h1>
      <button onClick={ () => plus()}>+</button>
      {
        no == 0 ? ( <button disabled onClick={ () => minus()}>-</button>
    ):( <button  onClick={ () => minus()}>-</button>
)
      }
     
      <button onClick={ () => reset()}>reset</button>
    </div>
  )
}

export default Count
