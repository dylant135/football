import React from 'react';
import './App.css';

function App() {
  React.useEffect(() => {
    fetch('https://api.fantasynerds.com/v1/nfl/depth?apikey=TEST')           
      .then(response => response.json())
      .then(data => console.log(data));
  }, [])
  
  return (
    <div className="App">
      <h1>Football</h1>
      
    </div>
  );
}

export default App;
