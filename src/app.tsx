import React from 'react';
import './app.css';
import CommentBoard from './comment';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {  

  return (
    <div>
      <h1>Elliu comment board</h1>
      <h2>Rules</h2>
      <h3>1. No hate speech.</h3>
      <h3>2. Mature but PG-13.</h3>
      <h3>3. No advertising.</h3>
      <h3>Sorry there is something buggy with my code, so the replies sometimes disappears and generates 20 times if you click reply too many times</h3>
      <div className='comment-board'>
        <CommentBoard showReply={true} depth={1} />
      </div>
    </div>
  )
};

export default App;
