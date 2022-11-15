
import './App.css';
import { useEffect, useState } from 'react';
import SingleCard from './Components/SingleCard';

const cardImages =[

  {
    "src":"https://github.com/iamshaunjp/React-Firebase/blob/lesson-58/magic-memory/public/img/helmet-1.png?raw=true", matched:false
  },
  {
  "src":"https://github.com/iamshaunjp/React-Firebase/blob/lesson-58/magic-memory/public/img/potion-1.png?raw=true", matched:false
  },
  {
    "src":"https://github.com/iamshaunjp/React-Firebase/blob/lesson-58/magic-memory/public/img/ring-1.png?raw=true", matched:false
  },
  {
    "src":"https://github.com/iamshaunjp/React-Firebase/blob/lesson-58/magic-memory/public/img/scroll-1.png?raw=true", matched:false
  },
  {
    "src":"https://github.com/iamshaunjp/React-Firebase/blob/lesson-58/magic-memory/public/img/shield-1.png?raw=true", matched:false
  },
  {
    "src":"https://github.com/iamshaunjp/React-Firebase/blob/lesson-58/magic-memory/public/img/sword-1.png?raw=true", matched:false
  }
    
]

function App() {

  const [cards,setCards] = useState([]);
  const [turns,setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false)

  const shuffleCards = () => {

    const shuffledCards = [...cardImages,...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card)=> ({...card, id: Math.random()}));
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards);
    setTurns(0);

  }

  
  const handleChoice = (card) =>{
   choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(()=>{
    
    if(choiceOne && choiceTwo){
      setDisabled(true)
      if(choiceOne.src === choiceTwo.src){
        setCards(prevCards =>{
          return prevCards.map(card => {
            if(card.src === choiceOne.src){return {...card, match:true}
          }else{
              return card
            }
          })
        })
        resetTurn();
      }else{
        setTimeout(()=> resetTurn(),1000)

      }
    }

  },[choiceOne,choiceTwo])

  useEffect(()=>{
    shuffleCards();
  },[])

  const resetTurn = () =>{
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns +1);
    setDisabled(false);
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
          {cards.map(card =>(
              
            <SingleCard  
            key ={card.id} 
            card ={card}
            handleChoice = {handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched} 
            disabled={disabled}
            />
          ))}
         </div>
         <p>Turns:{turns}</p>
    </div>
  );
}

export default App;
