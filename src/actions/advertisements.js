import * as fromApi from "../api/advertisements";

export const fetchAdvertisementsAction = (advertisements) => ({
  type: "FETCH_ADVERTISEMENTS",
  data: advertisements
});


export const fetchAdvertisements = () => async dispatch => {
  let advertisements = await fromApi.fetchAdvertisements();
  dispatch(fetchAdvertisementsAction(advertisements));
};

export const deleteAdvertisementAction = (id) => ({
  type: "DELETE_ADVERTISEMENT",
  id
});

export const deleteAdvertisement = (id) => async dispatch => {
  let advertisement = await fromApi.deleteAdvertisement(id);
  dispatch(deleteAdvertisementAction(id));
};
