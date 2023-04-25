import {  RouterProvider,  createBrowserRouter } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn';
import Blog from './components/Blog';
import PostList from './components/PostList';
import SinglePost from './components/SinglePost';
import DarkMode from 'darkmode-js'





const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path:"/posts",
    element:<PostList/>
  },
  {
    path: "/blog/:unique_id",
    element: <SinglePost />,
  },
]);


// const options = {
//   bottom: '20px', // default: '32px'
//   right: '20px', // default: '32px'
//   left: 'unset', // default: 'unset'
//   time: '0.5s', // default: '0.3s'
//   mixColor: '#fff', // default: '#fff'
//   backgroundColor: '#fff',  // default: '#fff'
//   buttonColorDark: '#100f2c',  // default: '#100f2c'
//   buttonColorLight: '#fff', // default: '#fff'
//   saveInCookies: false, // default: true,
//   label: '🌓', // default: ''
//   autoMatchOsTheme: true // default: true
// }

// const darkmode = new DarkMode(options);
// darkmode.showWidget();



function App() {
  // new DarkMode().showWidget();
  
  
  return (
    
    <div className='app'>
     


      <RouterProvider router={router} />
    </div>
  );
}

export default App;
