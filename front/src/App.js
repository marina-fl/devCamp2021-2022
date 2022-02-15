import './App.css';
import HeaderContainer from './containers/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileContainer from './containers/profile/Profile';
import AddPostContainer from './containers/addPost/AddPost';
import PostListContainer from './containers/posts/PostsList';
import UsersContainer from './containers/users/Users';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
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
    
    <Route path='/users' 	element={
						<UsersContainer />
		        }
    />        

<Route
      path="*"
      element={
        
          <main style={{ padding: "1rem" }}>
              <p>URL is incorrect (no matches)</p>
          </main>
    
      }
    />

      </Routes>
      </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
} 



export default App;


