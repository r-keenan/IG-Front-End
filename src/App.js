import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post'



const mockPosts = [
  {
    likes: 20,
    description: "This is a post",
    image: {
      url: "/uploads/ali_karimi_0_N1_C_Nx_Oqw_I0_unsplash_f0855a2dfe.jpg"
    } 
  },
  {
    likes: 33,
    description: "The second post",
    image: {
      url: "/uploads/ali_karimi_0_N1_C_Nx_Oqw_I0_unsplash_f0855a2dfe.jpg"
    }
  },
  {
  likes: 88,
  description: "The third post",
  image: {
    url: "/uploads/ali_karimi_0_N1_C_Nx_Oqw_I0_unsplash_f0855a2dfe.jpg"
    }
  }
]

function App() {
  /*useState() is being set as default as an empty list*/
  const [posts, setPosts] = useState([])

  /*useEffect() runs a function whenever a certain condition is met
  This sets the default of setPosts to mockPosts variable*/

 /*the empty list at the end of this indicates that you only want to run this function once. 
 This essentially mounts the component*/ 
  useEffect(() => {
    setPosts(mockPosts)
  }, [])

  return (
    < div className="App">
    {posts.map(post =>(
      <Post 
        likes={post.likes}
        description={post.description}
        url={post.image && post.image.url}
        />
    ))}
    </div>
  );
}

export default App;
