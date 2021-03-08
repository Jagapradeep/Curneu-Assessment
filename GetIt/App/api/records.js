import client from "./client";

const getRecords = () => client.get("/api/v1/employees");

const addRecord = (record) => {
  const data = new FormData();
  data.append("employee_name", record.name);
  data.append("employee_age", record.age);
  data.append("employee_salary", record.salary);
  data.append("profile_image", "");

  return client.post("/api/v1/create", data);
};

export default {
  getRecords,
  addRecord,
};
