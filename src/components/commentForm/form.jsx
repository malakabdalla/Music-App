import { useState } from "react";
import "./form.css";

const CommentForm = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = { name, comment };

    setCommentsList([...commentsList, newComment]);

    setName("");
    setComment("");
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            className="form-input"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Comment:
          <textarea
            className="form-textarea"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          ></textarea>
        </label>
        <br />
        <button className="form-submit" type="submit">
          Submit
        </button>
      </form>
      <ul>
        {commentsList.map((comment, index) => (
          <li key={index}>
            <strong>{comment.name}: </strong>
            {comment.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentForm;
