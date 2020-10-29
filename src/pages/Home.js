import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Post from '../components/Post';

export default() => {
    /*useState() is being set as default as an empty list*/
    const [posts, setPosts] = useState([])

    /*useEffect() runs a function whenever a certain condition is met
    This sets the default of setPosts to mockPosts variable*/
  
    /*the empty list at the end of this indicates that you only want to run this function once. 
    This essentially mounts the component*/ 
    useEffect(() => {
        const getPosts = async () => {
        /*this creates an asyncronous request to posts*/
        const response = await fetch('http://localhost:1337/posts')
        const data = await response.json()
        setPosts(data)
        }
  
        getPosts()
    }, [])
  
    return (
    <div className="Home">
        {posts.map(post =>(
            <Link to={`/${post.id}`}>
            <Post 
                likes={post.likes}
                description={post.description}
                url={post.image && post.image.url}
            />
            </Link>
        ))}
    </div>
    );
}