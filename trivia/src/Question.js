import React from 'react';
import Answer from './Answer.js';
import Typography from '@mui/material/Button'
import {decode} from 'html-entities'
const Question = (props) => {
    const insert = (arr, index, ...newItems) => [
        ...arr.slice(0, index),
        ...newItems,
        ...arr.slice(index)
      ];
    const incorrect = props.incorrect_answers
    const rand = Math.trunc(Math.random() * (incorrect.length + 1));
    //incorrect.splice(rand, 0, props.correct_answer);
    //incorrect.splice(rand, 0, props.correct_answer);
    //console.log(props.incorrect_answers);
    const incorrect1 = insert(incorrect, rand, props.correct_answer)
    console.log(incorrect1)
    return(
        <div>
            <Typography display='block' variant='h3'>
                {decode(props.title)}
            </Typography>
            <div>
            {incorrect1.map((choice, i) =>(
            
            <Answer 
                is_correct={choice === props.correct_answer}
                answer_text={choice}
                key={i}
            />)
            )}
            </div>
            
            <br></br>
        </div>
    );
    
    
}

export default Question;