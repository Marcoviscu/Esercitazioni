import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';
import Navbar  from './components/Navbar/Navbar.jsx';


export default function App() {

  return (
    <div className={styles.App}>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Outlet/>
        </div>
      </div>
     
    </div>
  );
}