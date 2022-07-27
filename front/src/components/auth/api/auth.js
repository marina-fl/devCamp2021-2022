import { apiClient } from "../../../config/axios";

export const login = async (data) => {
  return apiClient.post("/login", data);
};
