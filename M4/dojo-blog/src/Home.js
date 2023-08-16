import {useState , useEffect} from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
   const {isPending, error,  data: blogs } = useFetch('http://localhost:8000/blog');

    return (
        <div className="home">
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}   
          {blogs && <BlogList blogs={blogs} title= 'All blogs' />}
        </div>
    );
}
 
export default Home;