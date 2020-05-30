import { cond } from "ramda";
  
  export const advertisements = (state = [], action) => {
    switch (action.type) {
      case "FETCH_ADVERTISEMENTS":
        return action.data
      case "DELETE_ADVERTISEMENT":
        return state.filter(el => el.id!=action.id)
      default:
        return state;
    }
  };
  
  export const getAdvertisements = state => state;
  export const addAdvertisements = state => state;

  export default advertisements;