import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import GameList from "./GamesList";
import {fetchGames} from "../../actions"

class GamePage extends Component {

    state = {}
    componentDidMount(){
        this.props.fetchGames();
    }
    render() {
        console.log("Games Props: ", this.props)
        const {games} = this.props
        return (
            <div>
                <h1>
                    GameList
                </h1>
                <GameList games={games}/>
            </div>
        )
    }
}

GamePage.propTypes ={
    games : PropTypes.array.isRequired,
    fetchGames : PropTypes.func.isRequired
}


function mapStateToProps(state) {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps,{fetchGames})(GamePage);
