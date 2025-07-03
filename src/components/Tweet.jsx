const Tweet = ({ tweet, onLike }) => {
  return (
    <div className="tweet">
      <p><strong>@{tweet.user}</strong>: {tweet.text}</p>
      <button onClick={() => onLike(tweet.id)}>❤ {tweet.likes}</button>
    </div>
  );
};

export default Tweet;
