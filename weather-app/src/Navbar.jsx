const Navbar = () => {
    return (
        <nav className="navigation">
            <h1>MyWeatherApp |</h1>
            <form >
                <label >City name:</label>
                <input type="text" placeholder="Search for a location"/>
            </form>
        </nav>
    );
}
 
export default Navbar;