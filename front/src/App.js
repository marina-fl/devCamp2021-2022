import logo from './logo.svg';
import './App.css';
import PostContainer from '././containers/post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Be In Touch - a new social network
        </p>
        </header>
        <PostContainer/>
    </div>
  );
}

export default App;
