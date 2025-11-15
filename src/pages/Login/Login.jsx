import React from "react";
import "./Login.scss";
import Form from "../../components/Form";
import { login } from "../../api/login";

async function handleOnSubmit(userInfos) {
  try {
    const data = await login(userInfos);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

function Login() {
  return (
    <div className=" h-screen container__login relative">
      <div className="container__comp w-screen h-screen flex items-center justify-center">
        <div>
          <Form mode="login" onSubmit={handleOnSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Login;
