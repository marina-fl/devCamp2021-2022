import './App.css';
import React, { useState } from 'react';
import Header from './containers/Header';
import { BodyContent }  from './containers/Body';


function App() {
  const [Content, setContent] = useState('articles');

  return (
    <div className="App">
      <Header setContent={setContent} />
      <BodyContent Content={Content} />
    </div>
  );
} 

export default App;


