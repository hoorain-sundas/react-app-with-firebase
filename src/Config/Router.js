import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import SignUp from '../Screens/Signup';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import Productdetails from '../Screens/Productdetails';
// import MainHome from '../Screens/MainHome';


function AppRouter(){
    return(
        <>
        <BrowserRouter>
        {/* <nav>
        <div className="text-center mt-4" >
            <ul className="list-style-none">
                <li className='d-inline m-5 fs-5 p-2'><Link to="/">Home</Link></li>
                <li className='d-inline m-5 fs-5 p-2'><Link to="login">Login</Link></li>
                
                
            </ul>
        </div>    
        </nav> */}
        <Routes>
            
            {/* <Route path="/" element={<MainHome />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="Productdetails" element={<Productdetails />} />
            {/* <Route path="" element={<Productdetails />} /> */}


            
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;