import './App.css';
import { useState } from 'react';
import {useEffect} from 'react';
import Question from './Question.js'

// https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret
function App() {
  const [questions, setQuestions] = useState(null);
  const [token, setToken] = useState(null)
  const num_questions = 10;
  const initial_api_req = 'https://opentdb.com/api_token.php?command=request'
  const api_req = 'https://opentdb.com/api.php?amount=' + num_questions + '&type=multiple&token='
  
  useEffect(() => {
    async function fetchToken() {
      let response = await fetch((initial_api_req));
      response = await response.json();
      setToken(response['token']);
    }
    
    fetchToken()
  }, [initial_api_req])
  /*
  const fetchQuestions = () => {
    return fetch(api_req + token)
    .then((response) => response.json())
    .then((data) => setQuestions(data['results']))
    .catch((error) => console.error(error));
    
  }
  useEffect(() => {
    fetchQuestions();
    console.log(questions)
    
    
  }, [])
  */
  useEffect(() => {
    async function fetchQuestions() {
      let response = await fetch((api_req + token));
      response = await response.json();
      setQuestions(response['results']);
    }
    
    fetchQuestions()
  }, [api_req, token])
  /*
  return (
    <div>
    <h1>Trivia App</h1>
    <p>{token}</p>
    </div>
    
    );
    */
   
  if(questions !== null){
    return (
      <div>
      <h1>Trivia App</h1>
      {questions.map((question, i) => (<Question 
        title={question['question']} 
        correct_answer={question['correct_answer']}
        incorrect_answers={question['incorrect_answers']}  
        key={i}
      />)
    )}
      </div>
        
    );
  }

        
}
      
export default App;