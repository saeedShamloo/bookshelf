/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as React from "react";
import { FaTimes } from "react-icons/fa";
import { CircleButton, Dialog } from "./index";

const callAll = (...fns: Function[]) => (...args: any[]) =>
  fns.forEach((fn) => fn && fn(...args));

type ModalContextType = [boolean, Function];

const initialModalContext: ModalContextType = [false, () => {}];
const ModalContext = React.createContext<ModalContextType>(initialModalContext);

export const Modal: React.FunctionComponent = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const modalContextValue = React.useMemo(() => [isOpen, setIsOpen], [isOpen]);

  return (
    <ModalContext.Provider
      {...props}
      value={modalContextValue as ModalContextType}
    />
  );
};

const ModalDismissButton: React.FunctionComponent = () => {
  const [, setIsOpen] = React.useContext(ModalContext) as [boolean, Function];

  return (
    <CircleButton onClick={() => setIsOpen(false)}>
      <FaTimes />
    </CircleButton>
  );
};

export const ModalOpenButton: React.FunctionComponent = ({ children }) => {
  const [, setIsOpen] = React.useContext(ModalContext);
  const child = children as React.ReactElement;

  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(true), child.props.onClick)
  });
};

const ModalHeader: React.FunctionComponent<{ title: string }> = ({ title }) => {
  return (
    <div>
      <div css={{ display: "flex", justifyContent: "flex-end" }}>
        <ModalDismissButton />
      </div>
      <h3 css={{ textAlign: "center" }}>{title}</h3>
    </div>
  );
};

export const ModalContent: React.FunctionComponent<{
  title: string;
  arialLabel: string;
}> = ({ title, children, arialLabel }) => {
  const [isOpen, setIsOpen] = React.useContext(ModalContext);

  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={() => setIsOpen(false)}
      arial-label={arialLabel}
    >
      <ModalHeader title={title} />
      <div>{children}</div>
    </Dialog>
  );
};
