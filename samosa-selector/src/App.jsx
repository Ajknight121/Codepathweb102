import { useState } from 'react';
import './App.css';
import Upgrade from './upgrade';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => {setCount(count + multiplier)};
  const buyUpgrade = (cost, mult) => {
    if (count >= cost) {
      setMultiplier(multiplier + mult);
      setCount(count - cost);
    }
  }
  return (
    <div className="App">
      <div className='header'>
        <h1>Samosa Selector</h1>
        <h2>Count:{count}</h2>
        <img className='samosa' onClick={updateCount} src='https://i.kym-cdn.com/photos/images/newsfeed/002/747/336/eba'/>
      </div>
      <div className="container">
        <Upgrade upgrade={buyUpgrade} mult={2} name="Double Stuffed" description="2x per click" cost={10}/>
        <Upgrade upgrade={buyUpgrade} mult={5} name="Party Pack" description="5x per click" cost={100}/>
        <Upgrade upgrade={buyUpgrade} mult={10} name="Full Feast" description="10x per click" cost={1000}/>
      </div>
    </div>
  )
}

export default App