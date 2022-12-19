import http from "../http-common";

const create = (data) => {
  return http.post("/smarthomes", data);
};

const getAll = () => {
  return http.get("/smarthomes");
};

const SmarthomeService = {
  create,
  getAll,
};

export default SmarthomeService;
