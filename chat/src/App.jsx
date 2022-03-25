import {React} from 'react'
import Home from './Pages/Home'
import Create from './Pages/Create'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App = () => {
    return ( 
        <div>
           <Router>
                    <div>
                        <Navbar />
                            <p style={{height: '10vh'}} />
                            <Routes>
                                <Route index element={<Home />} />
                                <Route path='About' element={(<About/>)} />
                                <Route path='Contact' element={(<Contact/>)} />
                                <Route path='Create' element={(<Create/>)} />
                                <Route path="Login" element={(<Login/>)} />
                                <Route path='Register' element={(<Register/>)} />
                            </Routes>
                        </div>
                    <Footer/>
                </Router>
        </div>
    )
}

export default App
