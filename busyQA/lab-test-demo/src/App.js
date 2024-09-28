import logo from './logo.svg';
import "./styles/styles.css";
import React from "react";
import Feed from './components/Feed';


// Main App component that renders the Feed component
function App() {
  return (
    <React.Fragment className="app">
      <Feed/>
    </React.Fragment>
    
  );
}

export default App;
