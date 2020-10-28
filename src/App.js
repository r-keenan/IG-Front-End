import logo from './logo.svg';
import './App.css';
import Post from './components/Post'


const posts = [
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
  }
]

function App() {
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
