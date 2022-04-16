import React from 'react';
import Button from '@mui/material/Button'
import { useState } from 'react';
import {decode} from 'html-entities'
const Answer = (props) => {
    // Reprents an answer choice
    const [revealed, setRevealed] = useState(false);
    function handleClick(e){
        e.preventDefault();
        setRevealed(true);
    }
    if(!revealed){
        return (
            <div>
                <Button variant = 'contained' onClick={handleClick}>{decode(props.answer_text)}</Button>
            </div>
        )
    }
    else{
        if(props.is_correct){
            return (
                <div>
                    <Button variant='contained' color='success' onClick={handleClick}>{decode(props.answer_text)}</Button>
                </div>
            )
        }
        else{
            return (
                <div>
                    <Button variant='contained' color='error' onClick={handleClick}>{decode(props.answer_text)}</Button>
                </div>
            )
        }
    }
    
    
}

export default Answer;