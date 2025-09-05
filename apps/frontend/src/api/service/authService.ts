import axiosInstance from "../axios";
import { apiServiceEndpoints } from "../endpoints";

interface RegisterUserRequestParams {
  name: string;
  email: string;
  password: string;
}

interface RegisterUserResponse {
  name: string;
  email: string;
  id: number;
}

interface LoginUserRequestParams {
  email: string;
  password: string;
}

interface LoginUserResponse {
  refresh: string;
  access: string;
}

export const registerUserService = async (
  registerRequestParams: RegisterUserRequestParams
): Promise<RegisterUserResponse> => {
  const resp = axiosInstance.post(
    apiServiceEndpoints.registerUser,
    registerRequestParams,
    { withCredentials: true }
  );
  return (await resp).data;
};

export const loginUserService = async (
  loginRequestParams: LoginUserRequestParams
): Promise<LoginUserResponse> => {
  const resp = axiosInstance.post(
    apiServiceEndpoints.loginUser,
    loginRequestParams,
    { withCredentials: true }
  );
  return (await resp).data;
};
