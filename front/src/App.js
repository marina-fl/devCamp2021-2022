import './App.css';
import HeaderContainer from './containers/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileContainer from './containers/Profile';
import AddPostContainer from './containers/AddPost';
import PostListContainer from './containers/PostsList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={
        <div>
      <HeaderContainer/>
      <PostListContainer/>
      </div>     
    }/>
      <Route path="/profile" element={
        <div>
      <HeaderContainer/>
      <ProfileContainer/>
      </div>     
    }/>
       
    <Route path="/add-article" element={
    <div>
      <HeaderContainer/>
      <AddPostContainer/>  
    </div>
      
    }/>
    <Route path="/articles" element={
     <div> 
    <HeaderContainer/>
    <PostListContainer/>
    </div>  
    }/>  
      </Routes>
      </BrowserRouter>
    
     
    </div>
  );
} 

export default App;


