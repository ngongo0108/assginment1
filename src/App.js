import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Main from './components/Main';
function App() {
  return (
    <div className="App">
        <Navigation></Navigation>
        <Main></Main> 
        <Footer></Footer>
    </div>
  );
}

export default App;
