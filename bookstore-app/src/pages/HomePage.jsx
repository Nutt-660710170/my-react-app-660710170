import { Link } from "react-router-dom";

const HomePage = ()=>{
    return (
        <div>
            <h1>Welcome to bookstore</h1>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>xxxxxxxxxx</p>
            <Link to="/books">Go to Book List</Link>
        </div>
    );
}
export default HomePage;