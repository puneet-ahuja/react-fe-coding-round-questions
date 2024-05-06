import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Implementation</h1>
      <ul>
        <li>
          <Link to="/accordian">Accordian</Link>
        </li>

        <li>
          <Link to="/random-color-generator">Random COlor Generator</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
