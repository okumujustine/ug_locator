import axiosInstance from "../axios";

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
    const resp = axiosInstance.post("/auth/users/", registerRequestParams);
    return (await resp).data;
  } catch (error) {
    console.log("---", error);
    throw new Error("User registration failed");
  }
};
