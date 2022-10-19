import AsyncStorage from "@react-native-async-storage/async-storage";
import spaceApi from "./api";

export const user_register = async (data) => {
  try {
    const result = await spaceApi("/users/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: data,
    });
    return result;
  } catch (error: any) {
    return error.response.data;
  }
};
export const user_login = async (data) => {
  try {
    const result = await spaceApi("/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: data,
    });
    return result;
  } catch (error: any) {
    return error.response.data;
  }
};

export const get_users = async () => {
  try {
    let token = await AsyncStorage.getItem("key");
    const result = await spaceApi("/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    return result;
  } catch (error: any) {
    return error.response.data;
  }
};
