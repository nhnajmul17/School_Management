import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import News from './Pages/News/News';
import Notices from './Pages/Notices/Notices';
import Home from './Pages/Home/Home';
import Teachers from './Pages/Teachers/Teachers';
import Class from './Pages/Class/Class';
import About from './Pages/About/About';
import Club from './Pages/Club/Club';
import Calender from './Pages/Calender/Calender';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Error from './Pages/Error/Error';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/notice' element={<Notices />}></Route>
          <Route path='/class' element={<Class />}></Route>
          <Route path='/teachers' element={<Teachers />}></Route>
          <Route path='/club' element={<Club />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/teachers' element={<Teachers />}></Route>
          <Route path='/calender' element={<Calender />}></Route>

          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
        {/* <Footer></Footer> */}

      </BrowserRouter>


    </div>
  );
}

export default App;
