import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Media , Badge} from 'reactstrap';

let imgStyle = {
    maxHeight: '128px',
    maxWidth: '128px'
}

class GamesList extends Component {
    state = {}
    render() {
        const { games } = this.props;
        console.log("Games: ", games)
        console.log("Name: ", games.name)

        const emptyMessage = (
            <p>
                There are no games yet in your collection!!!
        </p>);
        const Items = games.map(game =>
            <Media key={game.id}>
                <Media left href="#">
                    <Media object style={imgStyle} src={game.images} alt="Generic placeholder image" />
                </Media>
                <Media body>
                    <Media heading>
                    &emsp;
                    <Badge color="primary">{game.name}</Badge>
                  </Media>
                  &emsp;
                    {game.discription}
            </Media>
            </Media>
        )
        const gameList = (
            {Items}
        );
        return (
            <div>
                {games.length === 0 ? emptyMessage : Items}
            </div>
        );
    }
}
GamesList.propTypes = {
    games: PropTypes.array.isRequired
}

export default GamesList
