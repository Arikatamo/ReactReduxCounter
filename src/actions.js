export const INC_COUNTER='INCREMENT';
export const DEC_COUNTER='DECREMENT';
export const SET_GAMES='SET_GAMES';

export function setGames(games){
    return{
        type: SET_GAMES,
        games
    }
}

export function fetchGames(){
    return dispath=>{
        fetch('https://localhost:44349/api/game')
        .then(res=> res.json())
        .then(data => dispath(setGames(data)))
    }
}