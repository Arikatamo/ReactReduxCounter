import React, { Component } from 'react';
import PropTypes from 'prop-types';
class GamesList extends Component {
    state = {  }
    
    render() { 
        const {games} = this.props;
        console.log("Games: ", games)

        const emptyMessage = (
        <p>
        There are no games yet in your collection!!!
        </p>);
        const gameList =(
           
            <p> {games.base_ccy}</p>
        );
        return ( 
            <div>
                {games.length===0? emptyMessage : gameList}
            </div>
         );
    }
}
 GamesList.propTypes ={
     games:PropTypes.array.isRequired
 }

export default GamesList
