// import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Blog () {
    const posts = useLoaderData()
    // const [posts, setPosts] = useState([])
    
    // useEffect( () => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(json => setPosts(json))
    // } ,[])

    
    return (
        <>
        <h2>External Post</h2>
        {posts.map((post , index) => (
            <div key={index}>
                <Link to={`/blog/${post.id}`} >{post.title}</Link>
            </div>
        ))}
        </>
    )
}

export default Blog