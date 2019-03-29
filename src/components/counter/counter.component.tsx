import React from 'react';
import { connect } from 'react-redux';
import { counterState, IState } from '../../reducers';
import { increment, decrement } from '../../actions/counter.action';

interface IProps {
    counter: counterState
    increment: (amount: number) => void
    decrement: (amount: number) => void
}


class Counter extends React.Component<IProps, IState> {
    
    increment = () => {
        this.props.increment(1);
    }

    decrement = () => {
        this.props.decrement(5);
    }
    
    render() {
        return (
            <div className="jumbotron">
                <div>Counter {this.props.counter.count}</div>
                <button
                    onClick={this.increment}
                >+1</button>
                <button
                    onClick={this.decrement}
                >-1</button>
            </div>
        );
    };
};

const mapStateToProps = (state: IState) => {
    return { counter: state.counter };
}

const mapDispatchToProps = {
    increment,
    decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)