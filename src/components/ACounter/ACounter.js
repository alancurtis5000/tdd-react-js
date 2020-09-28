import React from 'react';
import { connect } from 'react-redux';
import { increment as incrementAction } from '../../redux/counter/actions';

const ACounter = (props) => {
  const { increment } = props;

  return (
    <div className="ACounter">
      ACounter
      <button onClick={increment}>+</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(incrementAction()),
  dispatch,
});

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

export default connect(mapStateToProps, mapDispatchToProps)(ACounter);
