import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import BulletIn from './Components/BulletIn';

function App() {
    const [sample, setSample] = useState([]);



    useEffect(async () => {
        
    }, []);

    return (
        <div className='App'>
            <Router>
                <div className='rp-container container-fluid'>
                    <Switch>
                        <Route exact path='/' render={(props) => (<BulletIn {...props}/>)} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
