import * as React from "react";
import { Button, FormGroup, Input } from "components/lib";

type LoginFormProps = {
  buttonText: string;
  onSubmit: (data: LoginFormData) => void;
};

export type LoginFormData = {
  username: string;
  password: string;
};

export const LoginForm: React.FunctionComponent<LoginFormProps> = ({
  buttonText,
  onSubmit
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      elements: {
        username: { value: string };
        password: { value: string };
      };
    };

    const username = target.elements.username.value;
    const password = target.elements.password.value;

    onSubmit({
      username,
      password
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="usernam">username:</label>
        <Input type="text" id="username" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">password:</label>
        <Input type="password" id="password" />
      </FormGroup>
      <div css={{ marginTop: 15 }}>
        <Button type="submit">{buttonText}</Button>
      </div>
    </form>
  );
};
