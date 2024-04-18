import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from '../src/components/Signup';
import Login from '../src/components/Login';
import Home from '../src/pages/Home';
import GLevels from './components/GLevels';
import Level2 from './components/Level2';
import Leaderb from './components/Leaderb';
import Level3 from './components/Level3';
import Level4 from './components/Level4';
import UserProfile from './components/Userprofile';



function App() {
  
  return (
    <BrowserRouter>
        <Routes>
        
          <Route path='/home' element={<Home />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/glevels' element={<GLevels/>}></Route>
          <Route path='/level2' element={<Level2 />}></Route>
          <Route path='/leaderb' element={<Leaderb />}></Route>
          <Route path='/level3' element={<Level3/>}></Route>
          <Route path='/level4' element={<Level4/>}></Route>
          <Route path='/userprofile' element={<UserProfile/>}> </Route>
      
        </Routes>
        
    </BrowserRouter>
  )
}

export default App;
