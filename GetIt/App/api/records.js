import client from "./client";

const endpoint = "/api/v1/employees";

const getRecords = () => client.get(endpoint);

export default {
  getRecords,
};
