import { useState } from "react";
import "./App.css";
import { BACKEND_URL } from "./config";
import { LabelButton } from "./components/LabelButton";
import { PrimaryButton } from "./components/PrimaryButton";
import { SigninInput } from "./components/SignInInput";
import axios from "axios";

function App() {
  const [UID, setUID] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-[1440px] h-[1024px] gap-4 pt-6 pr-8 pb-6 pl-8 flex flex-col justify-center items-center">
      <div className="w-[320px] h-[314px] flex flex-col gap-12 justify-center items-center">
        <LabelButton>Welcome back!</LabelButton>
        <SigninInput
          placeholder="UID"
          type="text"
          onChange={(e) => {
            setUID(e.target.value);
          }}
        />
        <SigninInput
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <PrimaryButton
          onClick={() => {
            axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
              UID: UID,
              password: password,
            });
          }}
        >
          Login
        </PrimaryButton>
      </div>
    </div>
  );
}

export default App;
