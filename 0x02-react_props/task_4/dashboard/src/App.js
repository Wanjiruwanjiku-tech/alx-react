import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Notifications from './Notifications/Notifications';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import CourseList from './CourseList/CourseList';

function App({ IsLoggedIn }) {
  return(
    <>
      <Notifications displayDrawer={false} />
      <div className='App'>
        <Header />
        <>
          {IsLoggedIn ? (
            <div data-testid="course-list">
              <CourseList />
            </div>
          ) : 
          (
            <div data-testid="login">
              <Login />
            </div>
          )}
        </>
        <Footer />
      </div>
    </>
    
  );
}


App.propTypes = {
  IsLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  IsLoggedIn: false,
};

export default App;