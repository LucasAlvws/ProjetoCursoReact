//import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import MyClass from './components/MyClass';
function App() {
  return (
    <div className="App">
      <Hello name = "Lucas"/>
      <MyClass email="lucas@email.com"/>
    </div>
  );
}

export default App;
