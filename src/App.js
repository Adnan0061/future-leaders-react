import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound'
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import MyAccount from './components/MyAccount/MyAccount';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import CourseDetails from './components/CourseDetails/CourseDetails';

function App() {
  return (
    <div className="App">
    <AuthProvider>  
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/courses'>
            <Courses></Courses>
          </Route>
          <Route path="/course/:courseDetails">
            <CourseDetails></CourseDetails>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <PrivateRoute path='/account'>
            <MyAccount></MyAccount>
          </PrivateRoute>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
