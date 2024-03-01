import { useState, FC } from 'react';
import CommentInput from './commentInput'; 
import Counter from './counter'; 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


type CommentProps = {
  name: string;
  content: string;
  depth: number;
};

const HideButton: FC<{ showReply: boolean; setShowReply: (showReply: boolean) => void; }> = ({ showReply, setShowReply }) => {
  return (
    <Button onClick={() => setShowReply(!showReply)}>
      Reply
    </Button>
  );
};

const Comment: FC<CommentProps> = ({ name, content, depth }) => {
  const [showReply, setShowReply] = useState(false);
  return (
    <Container className="comment-container">
      <Row>
        <Col xs={8}>
          <div className="comment-container">
            <div className='username'><strong>{name}</strong></div>
            <div className='content'>{content}</div>
          </div>
        </Col>
        <Col xs={4}>
          <Counter />
        </Col>
      </Row>
      <Row>
        <Col>
          {(depth < 3) && <HideButton showReply={showReply} setShowReply={setShowReply} />}
          {<CommentBoard showReply={showReply} depth={depth + 1} />}
        </Col>
      </Row>
    </Container>
  );
};

type CommentBoardProps = {
  depth: number;
  showReply?: boolean;
};

const CommentBoard: FC<CommentBoardProps> = ({ showReply, depth }) => {
  const [comments, setComments] = useState<string[][]>([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const addComment = () => {
    if (content !== '' && name !== '') {
      setComments([...comments, [name, content]]);
      setContent('');
      setName('');
    }
  };

  return (
    <>
      <div className='input'>
        {showReply && 
            <CommentInput
            addComment={() => addComment()}
            name={name}
            setName={setName}
            content={content}
            setContent={setContent}
            />
        }
      </div>
      <div className='new-comment'>
      {comments.map((comment) => (
        <Comment key={Date.now()} name={comment[0]} content={comment[1]} depth={depth} />
      ))}
      </div>
    </>
  );
};

export default CommentBoard; 