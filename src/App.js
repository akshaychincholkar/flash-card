import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [question,setQuestion] = useState('');
  const [answer,setAnswer] = useState('');
  const [isVisible,setIsVisible] = useState(false);
  const [cards, setCards] = useState([{question: "No Question", answer: "Nothing"}]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleCard = () => {
    setIsVisible(!isVisible);
  }
  const addCard = () => {
    // setCard([...card,{question : question , answer: answer}]);
    setCards([...cards,{ question : question , answer: answer }])
    setQuestion("");
    setAnswer("");
  };
  const handleIndex = () => {
    setCurrentIndex((currentIndex+1)%cards.length);
  }
  return (
    <div >
       Flashcard application!
        <br/>
        <input type='text' value={question} placeholder='enter question' onChange={(e)=>setQuestion(e.target.value)}></input>
        <br/>
        <input type='text' value={answer} placeholder='enter answer' onChange={(e)=>setAnswer(e.target.value)}></input>
        <br/>
        <button onClick={addCard}>Add Card</button>
        <br/>
        <div onClick={toggleCard}>
          {!isVisible?<h2>{cards[currentIndex].question}</h2>:<h2>{cards[currentIndex].answer}</h2>}
        </div>
        <button onClick={handleIndex}>Next</button>
    </div>
  );
}

export default App;
