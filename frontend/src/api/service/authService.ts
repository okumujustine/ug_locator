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
  try {
    const resp = axiosInstance.post(
      apiServiceEndpoints.registerUser,
      registerRequestParams
    );
    return (await resp).data;
  } catch (error) {
    console.log("---", error);
    throw new Error("User registration failed");
  }
};
