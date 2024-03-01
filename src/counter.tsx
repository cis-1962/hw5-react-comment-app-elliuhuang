import React, { useState } from 'react';
import './app.css';

const Counter: React.FC = () => {

    const [count, setCount] = useState(0);
    return (
        <div className='card'>
            <button className='upvote' onClick={() => setCount(count + 1)}>+</button>
            <div className='count'>{count}</div>
            <button className='downvote' onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
};

export default Counter;