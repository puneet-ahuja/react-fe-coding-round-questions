import { Link } from "react-router-dom";

const Home = () =>{

    return <div>
        <h1>Home Implementation</h1>
        <Link to='/accordian'>Accordian</Link>
        <Link to='/todo'>TODO Application</Link>
    </div>

}

export default Home;