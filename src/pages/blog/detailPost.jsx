import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function SinglePost () {
    const post = useLoaderData()
    // const params = useParams()
    // const [post, setPost] = useState(null)

    // useEffect(()=>{
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    //     .then(response => response.json())
    //     .then(json => setPost(json))
    // },[])

    return (
        <>
        <h2>{post?.title}</h2>
        <div>
            <p>{post?.body}</p>
        </div>
        <hr />
        <Link to={'/blog'}>Back</Link>
        </>
    )
}

export default SinglePost