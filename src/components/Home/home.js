import { Link } from "react-router-dom";
import "./home.css";
import main from "../../image/Group 2.svg";
import leaves from "../../image/Leaves.png";
const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>Welcome</h1>
        <p>I am Mariam</p>
        <p>Front end Developer</p>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img alt="main" src={main} />
      </div>
      <div>
        <img className="leaves" alt="leaves" src={leaves} />
      </div>
    </div>
  );
};

export default Home;
