const visibilityFilter = (state, action) =>{
  switch (action.type) {
    case "SET_VISIBILITY":
      action.visibilityFilter
    default:
      return state
  }
}

export default visibilityFilter;
