import "@reach/dialog/styles.css";
import "./styles.css";
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as React from "react";
// import Logo from "components/Logo";
// import { LoginForm, LoginFormData } from "components/LoginForm";
// import { Button } from "components/lib";
// import { Modal, ModalOpenButton, ModalContent } from "components/lib/Modal";
import Discover from "components/Discover";

export default function App() {
  // const handleLogin = (c: LoginFormData) => {};
  // const handleRegister = (c: LoginFormData) => {};

  return (
    <Discover />
    // <div
    //   css={{
    //     height: "100vh",
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center"
    //   }}
    // >
    //   <Logo width={150} height={150} />
    //   <div
    //     css={{
    //       marginTop: 15,
    //       display: "grid",
    //       gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    //       gridGap: "0.75rem"
    //     }}
    //   >
    //     <Modal>
    //       <ModalOpenButton>
    //         <Button>login</Button>
    //       </ModalOpenButton>
    //       <ModalContent title="Login" arialLabel="login form">
    //         <LoginForm buttonText={"login"} onSubmit={handleLogin} />
    //       </ModalContent>
    //     </Modal>

    //     <Modal>
    //       <ModalOpenButton>
    //         <Button variant={"secondary"}>Register</Button>
    //       </ModalOpenButton>
    //       <ModalContent title="Register" arialLabel="register form">
    //         <LoginForm buttonText={"login"} onSubmit={handleRegister} />
    //       </ModalContent>
    //     </Modal>
    //   </div>
    // </div>
  );
}
