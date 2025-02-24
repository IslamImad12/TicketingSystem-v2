// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import LandingPage from './Components/LandingPage/LandingPage';
import Register from './Components/Register/Register';

let routers = createBrowserRouter([
  {path:'' , element:<Layout/> , children:[
    {index: true, element:<LandingPage/>},
    {path:'/home' , element:<Home/>},
    {path:'/profile' , element:<Profile/>},
    {path:'/navbar' , element:<Navbar/>},
    {path:'/login' , element:<Login/>},
    {path:'/register' , element:<Register/>},
    {path:'/main' , element:<LandingPage/>},
  ]},
])

function App() {
  return (<>
  <RouterProvider router={routers}></RouterProvider>
  </>
  );
}

export default App;