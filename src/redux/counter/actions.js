export const types = {
  INCREMENT: 'INCREMENT',
};

export const increment = () => (dispatch, getState) => {
  console.log('incrementAction: ', getState('counter').counter.count);
  const currentCount = getState('counter').counter.count;
  const payload = { count: currentCount + 1 };
  dispatch({
    type: types.INCREMENT,
    payload,
  });
};
