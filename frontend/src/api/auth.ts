import api from "../lib/axios";
import { API } from "../constants/api";
import type{
  LoginRequest,
  RegisterRequest,
} from "../types/auth";

export const login = async (
  data: LoginRequest
) => {
  const response = await api.post(
    API.LOGIN,
    data
  );

  return response.data;
};

export const register = async (
  data: RegisterRequest
) => {
  const response = await api.post(
    API.REGISTER,
    data
  );

  return response.data;
};