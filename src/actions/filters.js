export const setFilter = (filter) => async dispatch => {
    dispatch({
      type: "SET_FILTERS",
      filter
    });
  };
  