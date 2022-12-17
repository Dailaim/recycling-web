import { GET_USER, DELETE_USER} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: payload,
      };
    case DELETE_USER:
      return {
        ...state,
        user: undefined,
      };

    default:
      return state;
  }
};