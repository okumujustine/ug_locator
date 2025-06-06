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

export const registerUserService = async (
  registerRequestParams: RegisterUserRequestParams
): Promise<RegisterUserResponse> => {
  const resp = axiosInstance.post(
    apiServiceEndpoints.registerUser,
    registerRequestParams
  );
  return (await resp).data;
};
