import React, { useState } from 'react';
import './App.css';
import Notifications from './Notifications/Notifications';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import CourseList from './CourseList/CourseList';
import { getLatestNotification } from './utils';

const App = () => {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
  ];

  return (
    <>
      <Notifications listNotifications={listNotifications} />
      <div className='App'>
        <Header />
        <>
          {IsLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          <button onClick={() => setIsLoggedIn(!IsLoggedIn)}>
            {IsLoggedIn ? 'Log Out' : 'Log In'}
          </button>
        </>
        <Footer />
      </div>
    </>
  );
}

export default App;