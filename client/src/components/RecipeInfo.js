import React from 'react'

export default function RecipeInfo(props) {
  console.log(props.instructions);
  return (
    <div>
    {props.instructions.map(step => {
     return   (<div>
      <h3>{step.number}</h3>
      <p>{step.step}</p>
      </div>)
    })}
    </div>
  )
}
