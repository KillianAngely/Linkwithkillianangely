// import logo from './logo.svg';
import './App.css';
import  Navbar from './Components /Navbar/Navbar'
import Footer from './Components /Footer/Footer'
import About from './Components /About/About';
import Work from './Components /Work/Work';
import RepositoryList from './Components /Project/Projects';

function App() {
  return (
    <div className='App'>
     <Navbar/>
     <About/>
     <Work/>
     <RepositoryList />
     <Footer/>
    </div>
   
  );
}

export default App;
