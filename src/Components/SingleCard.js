import React from 'react'
import "./SingleCard.css"

const SingleCard = ({card, handleChoice, flipped, disabled}) => {

    const handleClick = ()=>{
        if(!disabled){
        handleChoice(card);
        }
        
    }

  return (
    <div className="card">
              
                <div className ={flipped ? "flipped":""}>
                    <img 
                    className ="front" 
                    src ={card.src} 
                    alt ="card front"/>
                    <img 
                    className ="back" 
                    src ="https://github.com/iamshaunjp/React-Firebase/blob/lesson-58/magic-memory/public/img/cover.png?raw=true" 
                    onClick={handleClick}
                    alt ="card back"/>
                  </div>
              </div>
  )
}
export default SingleCard