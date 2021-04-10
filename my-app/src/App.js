import Header from './Components/Header'
import Experience from './Components/Experience'
import './App.css';

function App() {
  return (
    <div>
      <div 
        className="header"
      >
        <Header/>
      </div>
      <Experience Company = {'Yahoo'}/>
      Body
    </div>
  );
}

export default App;
