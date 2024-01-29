/*
File name: App.jsx
Student’s Name: Gisella Tavara
StudentID: 301350493
Date: Jan, 28th 2024
*/

/*The MainRouter component contains the route definitions and routing logic for the application. This section perform the import to use React */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';

const App = () => {
 return (
 <Router>
 <MainRouter />
 </Router>
 );
};
export default App;
