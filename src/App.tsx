import "@reach/dialog/styles.css";
import "./styles.css";
/* @jsx jsx */
import { jsx } from "@emotion/react";
import * as React from "react";
import { Dialog } from "@reach/dialog";
import Logo from "components/Logo";
import { LoginForm, LoginFormData } from "components/LoginForm";
import { Button } from "components/lib";

export default function App() {
  enum OpenModal {
    NONE = "none",
    LOGIN = "login",
    REGISTER = "register"
  }

  const [openModal, setOpenModal] = React.useState(OpenModal.NONE);

  const handleRegister = (data: LoginFormData) => {
    console.log("register data: ", { data });
  };

  const handleLogin = (data: LoginFormData) => {
    console.log("login data", { data });
  };

  return (
    <div
      css={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Logo width={150} height={150} />
      <div
        css={{
          marginTop: 15,
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gridGap: "0.75rem"
        }}
      >
        <Button onClick={() => setOpenModal(OpenModal.LOGIN)}>Login</Button>
        <Button
          onClick={() => setOpenModal(OpenModal.REGISTER)}
          variant={"secondary"}
        >
          Register
        </Button>
      </div>

      <Dialog aria-label="login form" isOpen={openModal === OpenModal.LOGIN}>
        <Button
          onClick={() => setOpenModal(OpenModal.NONE)}
          variant="secondary"
        >
          X
        </Button>
        <h3 css={{ textAlign: "center" }}>login form</h3>
        <LoginForm buttonText={"login"} onSubmit={handleLogin} />
      </Dialog>

      <Dialog
        aria-label="register from"
        isOpen={openModal === OpenModal.REGISTER}
      >
        <Button
          onClick={() => setOpenModal(OpenModal.NONE)}
          variant="secondary"
        >
          X
        </Button>
        <h3 css={{ textAlign: "center" }}>register form</h3>
        <LoginForm onSubmit={handleRegister} buttonText={"register"} />
      </Dialog>
    </div>
  );
}
