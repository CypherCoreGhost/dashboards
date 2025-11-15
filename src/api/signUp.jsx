import api from "./api";

export async function signUp(user) {
  console.log(user);
  try {
    const response = await api.post("/users", user);
    return response.data;
  } catch (err) {
    if (err.response?.status === 422) {
      throw new Error("Fields invalids");
    }
    throw new Error("Erro no servidor, tente novamente mais tarde");
  }
}
