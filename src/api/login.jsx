import api from "./api";

export async function login(data) {
  console.log(data);
  try {
    const response = await api.get("/users", data);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error("invalid fields");
  }
}
