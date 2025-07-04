import TweetList from "../components/TweetList";
import NavBar from "../components/NavBar";
import "./Home.css";

const Profile = ({ user, tweets, likeTweet, setUser }) => {
  const userTweets = tweets.filter((tweet) => tweet.user === user.username);

  return (
    <div className="page-content">
      <div className="profile-content">
        <NavBar user={user} setUser={setUser} />
        <div>
          <h2>Perfil de @{user.username}</h2>
          <TweetList tweets={userTweets} onLike={likeTweet} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
