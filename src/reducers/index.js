import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import advertisements, * as fromAdvertisements from "./advertisements";
import filters, * as fromFilters from "./filters";

export const getAdvertisements = state => fromAdvertisements.getAdvertisements(state.advertisements);
export const getFilter = state => fromFilters.getFilter(state.filters);


export default history =>
  combineReducers({
    router: connectRouter(history),
    advertisements,
    filters,
  });
