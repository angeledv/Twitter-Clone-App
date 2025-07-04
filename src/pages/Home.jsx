import TweetForm from "../components/TweetForm";
import TweetList from "../components/TweetList";
import NavBar from "../components/NavBar";
import "./Home.css";

const Home = ({ user, tweets, addTweet, likeTweet, setUser }) => {
  return (
    <div className="page-content">
      <div className="home-content">
        <NavBar user={user} setUser={setUser} />
        <div className="">
          <TweetForm onAddTweet={addTweet} />
          <TweetList tweets={tweets} onLike={likeTweet} />
        </div>
      </div>
    </div>
  );
};

export default Home;
