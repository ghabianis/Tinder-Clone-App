import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';
function App() {
  return (
    //BAM convention
    <div className="app">
     {/*Header*/}
      <Header />
     {/*Tinder Card*/ }
      <TinderCards/>
     {/*Footer */}
     <SwipeButtons/>
    </div>
  );
}

export default App;
