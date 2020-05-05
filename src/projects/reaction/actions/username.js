import { types } from "./types";
export const Setusername = (username) => {
  return {
    type: types.SET_USER_NAME,
    username
  };
};
