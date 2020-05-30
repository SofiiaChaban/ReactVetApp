const initialState = {
    groomer:true,
    vet:true,
    city: "All"
  }
  
    export const filters = (state = initialState, action) => {
      switch (action.type) {
        case "SET_FILTERS":
          return {
            ...state,
            ...action.filter
          }
        default:
          return state
      }
    };
  
     export const getFilter = state => state;
  
    export default filters;
  