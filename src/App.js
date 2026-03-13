import logo from './logo.svg';
import img_1 from './IMG_8106.png';
import img_2 from './img_2.png';
import img_3 from './img_3.png';
import img_4 from './img_4.png';
import img_5 from './img_5.png';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-div'>
          <img src={img_1} className="App-logo" alt="logo" />
          <img src={img_2} className="App-logo" alt="logo" />
          <img src={img_3} className="App-logo" alt="logo" />
          <img src={img_4} className="App-logo" alt="logo" />
          <img src={img_5} className="App-logo" alt="logo" />
        </div>
        
        <p>
          Moi mä rakastan sua!
        </p>
      </header>
    </div>
  );
}

export default App;
