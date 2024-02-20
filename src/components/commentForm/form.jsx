// Import necessary dependencies
import { useState } from "react";
// Import the form styles
import "./form.css";

// Create a functional component for the form
const CommentForm = () => {
  // Define state variables for form inputs
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  // Define a function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Comment:", comment);
    // Reset the form inputs
    setName("");
    setComment("");
  };

  // Render the form
  return (
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
  );
};

export default CommentForm;
