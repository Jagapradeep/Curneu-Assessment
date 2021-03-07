import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://dummy.restapiexample.com",
});

export default apiClient;
