import httpService from "./httpService";

const api = "http://localhost:9090/";

const logIn = async (data) => {
  return await httpService.Post(`${api}api/SignIn/Users`, data);
};

const userService = { logIn };

export default userService;
