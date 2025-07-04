const Tweet = ({ tweet, onLike }) => {
  return (
    <div
      className="tweet"
      style={{
        borderBlockEnd: "1px solid #ccc4",
        paddingBlockEnd: "2rem",
        width: "350px",
      }}
    >
      <p>
        <strong>@{tweet.user}</strong>: {tweet.text}
      </p>
      <button onClick={() => onLike(tweet.id)}>❤ {tweet.likes}</button>
    </div>
  );
};

export default Tweet;
