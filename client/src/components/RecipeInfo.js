import React from 'react'

export default function RecipeInfo(props) {
  console.log(props.instructions);
  return (
    <>
    {props.instructions.map(step => {
     return   ( <li key={step.number}><p>{step.step}</p></li>)
    })}
    </>
  )
}
