// * setiap melakukan looping harus menambahkan key
import Article from '../components/Article'
import postData from '../data.json'
import { useState, useEffect } from 'react'
import Search from '../components/Search'

function HomePage () {
    const [posts, setPosts] = useState(postData)
    const [totalPost, setTotalPost] = useState(0)

    const resultSearch = (value) => {
        const filterPost = postData.filter((item) => 
            item.title.includes(value))
        setPosts(filterPost)
        setTotalPost(filterPost.length)
        // console.log(value)
    }


    //multiple useEfect untuk memntau posts
    useEffect (()=>{
        console.log('ada post beru')
    },[posts])

    return (
        <>
        <h1>Simple Blog</h1>
        <Search onResultSearch={resultSearch} totalPost={totalPost} />
        {posts.map((props, index) => (
            <Article {...props } key={index} />
        ) )}
        <hr />
        
        </>
        
    )
}

export default HomePage

    {/* {Post.map(({title, tags, date}, index) => (
            <Article {...{title,tags,date}} key={index} />
        ) )} */}
        {/* {Post.map(({title, tags, date}) => (
            <Article title ={title} tags={tags} date={date} />
        ) )} */}
        {/* {Post.map(blog => (
            <Article title ={blog.title} tags={blog.tags} date={blog.date} />
        ) )} */}

        // useEffect adalah function yg prtma kali di render ktka web dbka
// useEffect( () => {
//     console.log('render')

//     return () => { console.log('clean up') }//fungsi return untuk meremove
//     },[posts]) //[posts] bagian utk update
