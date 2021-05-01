import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { increment, decrement } from '../actions';

// Ensures that the connected versions of the increment & decrement ActionCreators
// are passed into props.
// Second argument to 'connect' function.
const Controls = (props) => {
    return (
        <div>
            {/* MUST CALL INCREMENT & DECREMENT METHODS IN PROPS */}
            <button type="button" onClick={props.increment}>+</button>
            <button type="button" onClick={props.decrement}>-</button>
        </div>
    );
};

export default withRouter(connect(null, { increment, decrement })(Controls));
