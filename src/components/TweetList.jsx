import Tweet from "./Tweet";
import './TweetList.css';

const TweetList = ({ tweets, onLike }) => {
  return (
    <div className="tweetList-container">
      <div className="tweetList">
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} onLike={onLike} />
        ))}
      </div>
    </div>
  );
};

export default TweetList;
