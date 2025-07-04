import { useState } from "react";
import "./TweetForm.css";

const TweetForm = ({ onAddTweet }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTweet(text);
    setText("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="¿Qué estás pensando?"
        />
        <button type="submit">Tweet</button>
      </form>
    </div>
  );
};

export default TweetForm;
