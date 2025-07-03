import TweetList from "../components/TweetList";
import NavBar from "../components/NavBar";

const Profile = ({ user, tweets, likeTweet, setUser }) => {
  const userTweets = tweets.filter((tweet) => tweet.user === user.username);

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <h2>Perfil de @{user.username}</h2>
      <TweetList tweets={userTweets} onLike={likeTweet} />
    </div>
  );
};

export default Profile;
