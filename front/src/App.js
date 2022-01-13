import './App.css';
import HeaderContainer from './containers/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileContainer from './containers/Profile';
import AddPostContainer from './containers/AddPost';
import PostListContainer from './containers/PostsList';
/* import PostContainer from './containers/Post'; */

import { ValidatePostUrl, ValidateTitleUrl, ValidateFileUrl } from './ValidateFunctions';




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
    

    <Route path="/articles/:id" element={<ValidatePostUrl/>} />

<Route
      path="*"
      element={
        
          <main style={{ padding: "1rem" }}>
              <p>URL is incorrect (no matches)</p>
          </main>
    
      }
    />

<Route path="/titles/:title" element={<ValidateTitleUrl/>} />

<Route path="/files/:file" element={<ValidateFileUrl/>} />


      </Routes>
      </BrowserRouter>
    

    
    </div>
  );
} 




export default App;


