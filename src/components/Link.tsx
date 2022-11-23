import React from "react";

interface ILink {
  disabled: boolean;
  onClick: () => void;
  children: JSX.Element;
}

const Link: React.FC<ILink> = ({ disabled, onClick, children }) => {
  return (
    <button
      style={{
        marginLeft: "4px",
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Link;
