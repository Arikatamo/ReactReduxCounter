import React, { Component } from 'react';
import { connect } from "react-redux";
import { DEC_COUNTER } from '../../actions';
import { INC_COUNTER } from "../../actions";
//imrc
//cc
class CounterDecrement extends Component {
    state = {  }
    onClickDecrement = (e) => {
        e.preventDefault();
        console.log('----increment---', e.target.name);
        this.props.dispatch({type: e.target.name});
    }
    render() {
        console.log('----props Counter---', this.props);
        const {count} = this.props;
        return ( 
        <div>
            <h1>Page counter decrement {count}</h1>
            <button onClick={this.onClickDecrement} name={DEC_COUNTER}>Зменшити значення на 1</button>
            <button onClick={this.onClickDecrement} name={INC_COUNTER}>Збільшити значення на 1</button>

        </div> 
        );
    }
}

const mapStateProps = (state) => 
{
    console.log('----redux store connect----', state);
    return {
        count: state.counter.counterStore
    };
}
 
export default connect(mapStateProps)(CounterDecrement);