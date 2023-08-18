import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="notFound">
            <h2>Sorry</h2>
            <p>That page can't be found</p>
            <Link to='/'>Back to the home page...</Link>
        </div>
    );
}
 
export default NotFound;