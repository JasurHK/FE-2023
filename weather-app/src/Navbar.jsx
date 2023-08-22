const Navbar = () => {
    return (
        <nav className="navigation">
            <h1>MyWeatherApp |</h1>
            <form >
                <label >City name:</label>
                <input type="text" placeholder="Search for a location"/>
            </form>
            <div className="links">
                <a href="">Warsaw</a>
                <a href="">Berlin</a>
                <a href="">Tokyo</a>
            </div>
        </nav>
    );
}
 
export default Navbar;