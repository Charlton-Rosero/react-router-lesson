
import './App.css';
import {NavLink, Route, Routes} from 'react-router-dom'
import data from './FakeData.json'
// NavLink : a component for setting the URl and providing navigation between components in our app without rigerring a  a page refresh
import NoMatch from './screens/NoMatch';
import Home from './screens/Home';
import About from './screens/About';
import Posts from './screens/Posts';
import Post from './screens/Post';


function App() {
  return (
    <div className="App">
      <div className='links'>
        <nav>
          <NavLink to={"/"}>HOME</NavLink>
          <NavLink to={"/about"}>ABOUT</NavLink>
          <NavLink to={"/posts"}>POSTS</NavLink>
        </nav>
      </div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts posts={data} />} />
        <Route path="/posts/:post_id" element={<Post {...data} />} />
        <Route path="*" element={<NoMatch />}/>

      </Routes>


    </div>
  );
}

export default App;
