import { ChangeEvent, MouseEvent, FC } from 'react';
import Button from 'react-bootstrap/Button';


type CommentInputProps = {
  addComment: (e: MouseEvent<HTMLButtonElement>) => void;
  name: string;
  setName: (name: string) => void;
  content: string;
  setContent: (content: string) => void;
};

const CommentInput: FC<CommentInputProps> = ({ addComment, name, setName, content, setContent }) => {
  return (
    <div className="addCommentBlurb">
      <input
        type="text"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        placeholder="Your name"
      />
      <input
        type="text"
        value={content}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setContent(e.target.value)}
        placeholder="Your comment"
      />
      <Button onClick={addComment}>Post</Button>
    </div>
  );
};

export default CommentInput;
