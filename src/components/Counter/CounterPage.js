import React, { Component } from 'react';
import { Link } from "react-router-dom";
class CounterPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
             <h1>CounterPage</h1>  
             <Link to="/game">Games</Link>
 
            </div>
         );
    }
}
 
export default CounterPage;